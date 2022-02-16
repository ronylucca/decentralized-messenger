
<p>
<img alt="Web3.js" src="https://img.shields.io/badge/-Web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white" />
<img alt="HardHat" src="https://img.shields.io/badge/-Hardhat-7C86C7?style=for-the-badge&logo=hardhat&logoColor=white" />
<img alt="Solidity" src="https://img.shields.io/badge/-Solidity-BAC9F9?style=for-the-badge&logo=solidity&logoColor=363636" />
<img alt="Ethereum" src="https://img.shields.io/badge/-Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white" />
</p>

# Basic Messenger using Solidity contract

This is a simple contract used to process transactions in a messenger

This contract is used to: 


- send a message
- there is a counter and a public method that frontent is calling to render it's data.
- At the creation of this contract 0.01 Ether is sent to its treasure.
- Each wave message sent has a 50% chance to earn 0.001 ether to the sender wallet from contract. There is a logic used with the mining block difficulty on each transaction to decide this proportion.
- There is a 5 min of cooldown logic for each wave caller

To test this contract you can use: 
 npx hardhat run scripts/[scriptname] for eg.:  npx hardhat run scripts/run_message.js  
 
To deploy on testnet Rinkeby just use: 
  npx hardhat run scripts/deploy.js --network rinkeby

  ps.: Fill the .env.example file and rename it to .env
  
 This is a simple project used for solidity training and there is a frontend repo used for it. Feel free to take a [look](https://github.com/ronylucca/decentralized-messenger-portal)