// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Counter {

    uint public addition; // +
    uint public subtract; // -
    uint public multiple; // *
    uint public divided;  // /

    function add(uint _num1, uint _num2) public {
        addition = _num1 + _num2;
    }

    function sub(uint _num1, uint _num2) public {
        require(_num1 > 0, "");
        require(_num2 > 0, "");
        subtract = _num1 - _num2;
    }

    function mult(uint _num1, uint _num2) public {
        multiple = _num1 * _num2;
    }

    function div(uint _num1, uint _num2) public {
        divided = _num1 / _num2;
    }

}
