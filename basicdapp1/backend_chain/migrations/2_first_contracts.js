// 2_Simple_Storage.js

const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function (deployer) {
    // Deploy the Migrations contract as our only task
    deployer.deploy(SimpleStorage);
  };
  