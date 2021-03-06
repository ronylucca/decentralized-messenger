const hre = require("hardhat");

const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("Messenger");
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.001"),
    });
    await waveContract.deployed();
    console.log("Contract addy:", waveContract.address);
  
    //Contract Balance
    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log('Ccontract balance: ', hre.ethers.utils.formatEther(contractBalance));

    //Wave
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());
  
    /**
     * Let's send a few waves!
     */
    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait(); // Wait for the transaction to be mined

    waveTxn = await waveContract.wave("A message 2!");
    await waveTxn.wait();


    //Lets see what happened with contract balance
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log('New contract balance: ', hre.ethers.utils.formatEther(contractBalance));





    //Second wave using another account
  
    // const [_, randomPerson] = await hre.ethers.getSigners();
    // waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
    // await waveTxn.wait(); // Wait for the transaction to be mined
  
     let allWaves = await waveContract.getAllWaves();
     console.log(allWaves);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();