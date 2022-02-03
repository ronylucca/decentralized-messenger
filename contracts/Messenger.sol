// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Messenger {

    uint256 totalWaves;
    constructor(){
        console.log("Hey, here is the first message from this new messenger!");
    }

    function wave() public{
        totalWaves +=1;
        console.log("%s was waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256){
        console.log("We have a %d total waves!", totalWaves);
        return totalWaves;
    }
}