const { expect } = require("chai");
const { ethers } = require("hardhat");

// https://ibb.co/qFqyqjF
// https://ibb.co/VQ1z75b

describe("NFT Gallery", function() {
    it("Should execute the purchase and sales of NFTs", async() => {
        //Get the contract
        const NFTGallery = await ethers.getContractFactory("NFTGallery");
        const gallery = await NFTGallery.deploy();
        //Wait till the contract gets deployed
        await gallery.deployed();
        //Get the address of deployment
        const galleryAddress = gallery.address;

        const NFTContract = await ethers.getContractFactory("NFT");
        //Address should be passed as Argument to the constructor of NFT.
        const NFT = await NFTContract.deploy(galleryAddress);
        await NFT.deployed();
        const nftContractAddress = NFT.address;
        
        let listingPrice = await gallery.getListingPrice();
        listingPrice = listingPrice.toString();

        // Price of tokens
        const auctionPrice = ethers.utils.parseUnits('1', 'ether');

        // create two tokens
        await NFT.createToken("https://ibb.co/qFqyqjF");
        await NFT.createToken("https://ibb.co/VQ1z75b");
        await NFT.createToken("https://ibb.co/VQ1z75b");
    
        // put both tokens for sale
        await gallery.createNFT(nftContractAddress, 1, auctionPrice, { value: listingPrice });
        await gallery.createNFT(nftContractAddress, 2, auctionPrice, { value: listingPrice });
        await gallery.createNFT(nftContractAddress, 3, auctionPrice, { value: listingPrice });
        //'value' is msg.value, amount to be passed to owner of gallery as NFT listing fees.

        //ethers.getSigners provides test accounts for simulating transactions (provided by Hardhat).
        const [_, buyerAddress] = await ethers.getSigners();
        //[_, buyerAddress] is array destructuring syntax, saying to extract first and second element from ethers.getSigners, while assigning the first element to a dummy variable '_' to skip it. Then stored the 2nd element to a variable 'buyerAddress'.

        //Skipping first address, since first address will be used for deploying the contracts, thus will be the owner of NFTGallery.

        //Connect to NFT Gallery from 'buyerAddress' account and execute NFTSale function to purchase the token with tokenId as 1.
        //While sending 'value' (ETH) equal to auctionPrice (price of NFT).
        await gallery.connect(buyerAddress).NFTSale(nftContractAddress, 1, { value: auctionPrice});

        //Query for NFTs listed on gallery
        const items = await gallery.fetchNFTs();
        console.log('items: ', items);
    });
});

//Item
// struct Item {
//     uint itemId;
//     address nftContract;
//     uint tokenId;
//     address payable seller;
//     address payable owner;
//     uint price;
//     bool sold;
// }