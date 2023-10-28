const { expect } = require("chai");

describe("Airdrop", function () {
    it("Should distribute tokens to the caller", async function () {
        // Deploy the UDSG token
        const UDSG = await ethers.getContractFactory("UDSG");
        const uDSG = await UDSG.deploy("UDSG", "UDSG");

        // Deploy the Airdrop contract and provide the UDSG token address
        const Airdrop = await ethers.getContractFactory("Airdrop");
        const airdrop = await Airdrop.deploy(uDSG.address);

        // Make a claim from the Airdrop contract
        await airdrop.claim();

        // Check the balance of the caller
        const balance = await uDSG.balanceOf(await ethers.provider.getSigner(0).getAddress());
        expect(balance).to.equal(1); // Adjust this value as needed
    });
});
