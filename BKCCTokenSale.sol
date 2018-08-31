pragma solidity ^0.4.2;

import "./BKCCToken.sol";

contract BKCCTokenSale {
    address admin;
    BKCCToken public tokenContract;
    uint256 public tokenPrice;

    function BKCCTokenSale(BKCCToken_tokenContract, uint256_tokenPrice)public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    // Buy Tokens
    function buyTokens(uint256_numberOfTokens) public payable {
        // Require that value is equal to tokens
        // Require that the contract has enough tokens
        // Require that a transfer is successful
        // Keep track of tokensSold
        // Trigger Sell Event
    }
}

