// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./UDSG.sol"; // Import the UDSG contract
import "@openzeppelin/contracts/access/Ownable.sol";

contract Airdrop is Ownable {
    UDSG public uDSGToken; 
    uint256 public claimAmount;
    mapping(address => bool) public airdrops; 

    constructor(address _uDSGTokenAddress, address initialOwner) Ownable(initialOwner) {
        uDSGToken = UDSG(_uDSGTokenAddress);
        claimAmount =100*(10**uint256(uDSGToken.decimals()));
    }

    function claimTokens() public {
        require(!airdrops[msg.sender], "Tokens already claimed");

        
        require(uDSGToken.transfer(msg.sender, claimAmount), "fail");

        
        airdrops[msg.sender] = true;
  } }

