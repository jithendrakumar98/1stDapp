// contracts/SimpleStorage.sol
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public storedData;

    // Function to set the value
    function set(uint256 x) public {
        storedData = x;
    }

    // Function to get the stored value
    function get() public view returns (uint256) {
        return storedData;
    }
}
