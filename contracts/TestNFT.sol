pragma solidity ^0.7.0;

import {ERC721} from "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.2.0-solc-0.7/contracts/token/ERC721/ERC721.sol";


contract TestNft is ERC721 {
      constructor (
    address owner,
    string memory _name,
    string memory _symbol
  )
    ERC721 ( _name, _symbol )
      {
      _mint(owner, 1);
      _mint(owner, 2);
      _mint(owner, 3);
  }
}
