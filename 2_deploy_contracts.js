var BKCCToken = artifacts.require("./BKCCToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BKCCToken, 21000000);
};