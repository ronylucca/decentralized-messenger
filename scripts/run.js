
const hre = require("hardhat");

const main = async() => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const messengerContractFactory = await hre.ethers.getContractFactory("Messenger");
    const messengerContract = await messengerContractFactory.deploy();
    await messengerContract.deployed();
    
    console.log("Console was deployed to: ", messengerContract.address);
    console.log("Console was deployed by: ", owner.address);

    let waveCount = await messengerContract.getTotalWaves();
    let waveTxn = await messengerContract.wave();
    await waveTxn.wait();
    waveCount = await messengerContract.getTotalWaves();

    waveTxn = await messengerContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveCount = await messengerContract.getTotalWaves();
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