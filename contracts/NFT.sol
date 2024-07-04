// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

//ERC721URIStorage is a child of ERC721 Contract.
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721URIStorage{
    //To store Ids of tokens
    uint256 private tokenIds;
    //To store address of marketplace where tokens are to be sold
    address private marketplace;

    //Setting the marketplace address for the token and also calling the Base Constructor (ERC721) while providing name and symbol of token.
    constructor(address memory _marketplace_address) ERC721("NFT Art Tokens", NATT) {
        tokenIds = 0;
        marketplace = _marketplace_address;
    }

    function incrementTokenId() internal {
        tokenIds++;
    }

    function createToken(string memory _tokenURI) public returns (uint) {
        incrementTokenId();
        uint256 tokenId = tokenIds;
        
        //Below functions are inherited from ERC721UIStorage

        //Mints the token (with the token ID as tokenID) at sender's address.
        _mint(msg.sender, tokenId);

        //Set token URI of token with ID as tokenID, that is, associate the token with details of the NFT, like URI of image other metadata like desc, title in the form of JSON.
        _setTokenURI(tokenId, _tokenURI);

        //Approves the marketplace to manage the sender's tokens, so that they can be sold. Basically giving permissions to the marketplace to sell those tokens. 'true' -> permission given.
        setApprovalForAll(marketplace, true);

        return tokenId;
    }
}