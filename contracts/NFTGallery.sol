// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract NFTGallery is ReentrancyGuard {
    //To store ids and number of items sold on gallery
    uint256 private itemIds;
    uint256 private itemsSold;

    //Owner of the NFTGallery, to which the amount should be paid
    address payable owner;

    //Fees for listing NFT on Gallery
    uint256 listingPrice = 0.002 ether;

    constructor() {
        //'payable' to make sure msg.sender can accept ether.
        //The constructor will be called when the contract will be deployed thus, owner of the NFTGallery will be account which deployed the contract.
        owner = payable(msg.sender);
        itemIds = 0;
    }

    function incrementId() internal{
        itemIds++;
    }

    function incrementSold() internal{
        itemsSold++;
    }

    struct Item {
        uint itemId;
        address nftContract; //Address of the NFT contract.
        uint tokenId;
        address payable seller;
        address payable owner;
        uint price;
        bool sold;
    }

    mapping (uint => Item) idToItem;

    event ItemCreated(
        uint itemId,
        address nftContract,
        uint tokenId,
        address payable seller,
        address payable owner,
        uint price,
        bool sold
    );

    //To fetch listing price of item from frontend
    function getListingPrice() public view returns (uint) {
        return listingPrice;
    }

    function createNFT(address nftContract, uint tokenId, uint price) public payable nonReentrant {
        require(price > 0, "Price must be greater than 0.");

        // msg.value contains the amount of Ether (in wei) that was sent along with the transaction that called the function. When someone calls the createNFT function and includes Ether in the transaction, msg.value will be equal to that amount of Ether.
        require(msg.value == listingPrice, "Price must be equal to listing price");
        //Listing price must be sent for the transaction to get executed and thus list the NFT.

        incrementId();
        uint currentItemId = itemIds;

        //Mapping the ID of item created to item.
        idToItem[currentItemId] = Item(
            currentItemId,
            nftContract,
            tokenId,
            payable(msg.sender), //seller will be the user calling this function, that is msg.sender.
            payable(address(0)), // owner is initially set to the zero address (0x0000000000000000000000000000000000000000). Can be assumed as NULL value.
            price,
            false //not sold yet
        );

        //Typecasting nftContract to IERC721 type
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        //Transfer the NFT of contract, nftContract, whose token id is tokenId from msg.sender to NFT Gallery contract, that is, now Gallery will be the owner of that NFT.
        // address(this) refers to current contract's address

        emit ItemCreated(currentItemId, nftContract, tokenId, payable(msg.sender), payable(address(0)), price, false);
    }

    function NFTSale(address nftContract, uint itemId) public payable nonReentrant { 
        uint price = idToItem[itemId].price;
        uint tokenId = idToItem[itemId].tokenId;

        require(msg.value == price, "Please submit the asking price in order to purchase.");

        //Transfer price of NFT to seller of that NFT.
        idToItem[itemId].seller.transfer(msg.value);

        //Change ownership of token from NFTGallery to msg.sender (who initiated the sale).
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);

        //Modify owner of NFT in map (while typecasting it into payable)
        idToItem[itemId].owner = payable(msg.sender);
        idToItem[itemId].sold = true;

        incrementSold();

        //Transfer listing price to owner (account which created NFTGallery contract).
        payable(owner).transfer(listingPrice);
    }

    //Fetch all the unsold NFTs to be displayed on the frontend
    function fetchNFTs() public view returns(Item[] memory) {
        uint unsoldItemsCount = 0;

        for(uint i = 1; i<=itemIds; i++){
            if(idToItem[i].sold == false) unsoldItemsCount++;
        }

        Item[] memory items = new Item[](unsoldItemsCount);
        uint index = 0;
        for(uint i = 1; i<=itemIds; i++){
            if(idToItem[i].sold == false){
                items[index] = idToItem[i];
                index++;
            }
        }

        return items;
    }

    //Fetch the NFTs owned by user
    function fetchMyNFTs() public view returns(Item[] memory) {
        uint count = 0;

        for(uint i = 1; i<=itemIds; i++){
            if(idToItem[i].owner == msg.sender) count++;
        }

        Item[] memory items = new Item[](count);
        uint index = 0;
        for(uint i = 1; i<=itemIds; i++){
            //If owner of NFT is the user making calls to this function
            if(idToItem[i].owner == msg.sender){
                items[index] = idToItem[i];
                index++;
            }
        }
        return items;
    }

    //Fetch all the NFTs created by user
    function fetchCreatedNFTs() public view returns(Item[] memory) {
        uint count = 0;
        for(uint i = 1; i<=itemIds; i++){
            if(idToItem[i].seller == msg.sender) count++;
        }

        Item[] memory items = new Item[](count);
        uint index = 0;
        for(uint i = 1; i<=itemIds; i++){
            //If the account calling this function is the seller of this NFT
            if(idToItem[i].seller == msg.sender){
                items[index] = idToItem[i];
                index++;
            }
        }
        return items;
    }
}