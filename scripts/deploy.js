
const hre = require("hardhat");

async function main() {
    const Discoin = await hre.ethers.getContractFactory('discoin');
    const discoin = await Discoin.deploy(1000000000,50);

    await discoin.deployed();

    console.log("discoin is deployed : ",discoin.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
