import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Roots = await ethers.getContractFactory("Roots");
  if (process.env.BASE_TOKEN_URI) {
    const roots = await Roots.deploy(process.env.BASE_TOKEN_URI, {
      gasLimit: ethers.BigNumber.from(1720000),
    });
    console.log("Roots deployed to:", roots.address);
  } else {
    console.log("Missing BASE_TOKEN_URI env var");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
