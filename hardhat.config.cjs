require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const fs = require('fs');
//Get the private key of your account from MetaMask extension. 
const privateKey = fs.readFileSync('.secret').toString();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337 //no need to specify account when deploying from local environment. 
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.maticvigil.com",
    //   accounts: [process.env.privateKey], for specifying the account which is used for deploying smart contract.
    // }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}