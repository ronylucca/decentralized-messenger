
const hre = require("hardhat");

const main = async() => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const messengerContractFactory = await hre.ethers.getContractFactory("Messenger");
    const messengerContract = await messengerContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.001"),
    });
    await messengerContract.deployed();
    
    console.log("Messenger contract address: ", messengerContract.address);

//     let waveCount = await messengerContract.getTotalWaves();
//     let waveTxn = await messengerContract.wave();
//     await waveTxn.wait();
//     waveCount = await messengerContract.getTotalWaves();

//     waveTxn = await messengerContract.connect(randomPerson).wave();
//     await waveTxn.wait();

//     waveCount = await messengerContract.getTotalWaves();
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