
const hre = require("hardhat");

const main = async() => {
    const messengerContractFactory = await hre.ethers.getContractFactory("Messenger");
    const messengerContract = await messengerContractFactory.deploy();
    await messengerContract.deployed();
    console.log("Console was deployed to: ", messengerContract.address);
}

const runMain = async() => {
    try{
        await main();
        process.exit(0);

    }catch(e){
        console.log(e);
        process.exit(1);
    }
}
runMain();