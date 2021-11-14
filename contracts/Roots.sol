//SPDX-License-Identifier: Unlicense
/// @title: Roots by Sam King
/// @author: Sam King (samking.eth)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Roots is ERC721, ERC721Burnable, ERC721Pausable, Ownable {
    uint256 public price = 0.1 ether;
    uint256[] private _mintedTokenIds;
    string private _baseTokenURI;

    constructor(string memory baseTokenURI)
        ERC721("Roots by Sam King", "ROOTS")
    {
        _baseTokenURI = baseTokenURI;
    }

    function mintForSelf(uint256 tokenId) public payable virtual {
        require(tokenId > 0 && tokenId < 41, "Token ID invalid");
        require(price == msg.value, "ETH amount is incorrect");
        _mintedTokenIds.push(tokenId);
        _safeMint(msg.sender, tokenId);
    }

    function updatePrice(uint256 newPrice) public virtual onlyOwner {
        price = newPrice;
    }

    function pause() public virtual onlyOwner {
        _pause();
    }

    function unpause() public virtual onlyOwner {
        _unpause();
    }

    function getMintedTokenIds()
        public
        view
        returns (uint256[] memory mintedTokenIds)
    {
        return _mintedTokenIds;
    }

    function withdrawAvailableBalance() public payable onlyOwner {
        require(
            payable(_msgSender()).send(address(this).balance),
            "Payment error"
        );
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override(ERC721, ERC721Pausable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
