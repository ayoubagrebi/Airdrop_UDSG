const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying UDSG token");
    const UDSG = await ethers.getContractFactory("UDSG");
    const uDSG = await UDSG.deploy("UDSG", "UDSG");
    await uDSG.deployed();

    console.log("UDSG token deployed to:", uDSG.address);

    console.log("Deploying Airdrop contract");
    const Airdrop = await ethers.getContractFactory("Airdrop");
    const airdrop = await Airdrop.deploy(uDSG.address);
    await airdrop.deployed();

    console.log("Airdrop contract deployed to:", airdrop.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

