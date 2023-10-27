require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
networks: {
    local: {
      url: "http://localhost:8545", // local Hardhat node
    },
  },
};
