// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract NFTGallery is ReentrancyGuard {
    //To store ids and number of items sold on gallery
    uint256 private itemIds;
    uint256 private itemsSold;

    //Owner of the NFT, to which the amount should be paid
    address payable owner;

    //Fees for listing NFT on Gallery
    uint256 listingPrice = 0.001 ether;

    constructor() {
        //'payable' to make sure msg.sender can accept ether.
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
            payable(address(0)), // Buyer is initially set to the zero address (0x0000000000000000000000000000000000000000). Can be assumed as NULL value.
            price,
            false //not sold yet
        );

        //Typecasting nftContract to IERC721 type
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        //Transfer the NFT of contract, nftContract, whose token id is tokenId from msg.sender to NFT Gallery contract, that is, now Gallery will be the owner of that NFT.
        // address(this) refers to current contract's address

        emit ItemCreated(itemId, nftContract, tokenId, msg.sender, address(0), price, false);
    }
}