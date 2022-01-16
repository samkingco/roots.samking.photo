import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

const baseTokenURI = process.env.BASE_TOKEN_URI || "";

describe("Roots contract", () => {
  let roots: Contract;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  beforeEach(async () => {
    const Roots = await ethers.getContractFactory("Roots");
    roots = await Roots.deploy(baseTokenURI);
    [owner, addr1] = await ethers.getSigners();
  });

  describe("Deployment", () => {
    it("should initialise Roots contract", async () => {
      expect(await roots.name()).to.equal("Roots by Sam King");
      expect(await roots.symbol()).to.equal("ROOTS");
    });

    it("should set the correct owner", async () => {
      expect(await roots.owner()).to.equal(owner.address);
    });
  });

  describe("Minting", () => {
    it("should mint a photo", async () => {
      const price = await roots.price();
      const tokenId = 20;
      expect(await roots.connect(addr1).mint(tokenId, { value: price }))
        .to.emit(roots, "Transfer")
        .withArgs(ethers.constants.AddressZero, addr1.address, tokenId);
      expect(await roots.balanceOf(addr1.address)).to.equal(1);
      expect(await roots.tokenURI(tokenId)).to.equal(
        `${baseTokenURI}${tokenId}`
      );
    });

    it("should not load tokens that have not been minted", async () => {
      // Token 5 has not been minted yet so should fail
      expect(roots.tokenURI(5)).to.be.revertedWith("InvalidTokenId()");

      // Mint token 5
      const price = await roots.price();
      expect(await roots.connect(addr1).mint(5, { value: price }))
        .to.emit(roots, "Transfer")
        .withArgs(ethers.constants.AddressZero, addr1.address, 5);

      // Check we can get minted token
      expect(await roots.tokenURI(5)).to.equal(`${baseTokenURI}5`);

      // Getting token 6 should fail
      expect(roots.tokenURI(6)).to.be.revertedWith("InvalidTokenId()");
    });

    it("should fail when the mint price is incorrect", async () => {
      const price = await roots.price();
      expect(
        roots.connect(addr1).mint(1, { value: price.mul(2) })
      ).to.be.revertedWith("IncorrectPaymentAmount()");
      expect(await roots.balanceOf(addr1.address)).to.equal(0);
    });
  });

  describe("TokenURI", () => {
    it("should fail when trying to get out of bounds token data", async () => {
      expect(roots.tokenURI(41)).to.be.revertedWith("InvalidTokenId()");
      expect(roots.tokenURI(0)).to.be.revertedWith("InvalidTokenId()");
    });
  });

  describe("Transfers", () => {
    it("should transfer tokens between accounts", async () => {
      const price = await roots.price();

      // Mint token to owner
      await roots.mint(10, { value: price });
      expect(await roots.balanceOf(owner.address)).to.equal(1);

      // Transfer some tokens
      await roots.transferFrom(owner.address, addr1.address, 10);
      expect(await roots.balanceOf(addr1.address)).to.equal(1);
      expect(await roots.balanceOf(owner.address)).to.equal(0);
    });
  });

  describe("Withdraw", () => {
    it("should let the owner withdraw contract balance", async () => {
      const price = await roots.price();

      // Mint token to addr1
      await roots.connect(addr1).mint(10, { value: price });

      // Owner withdraws
      expect(
        await roots.withdrawAvailableBalance({ value: 0 })
      ).to.changeEtherBalances([owner, roots], [price, price.mul(-1)]);
    });
  });
});
