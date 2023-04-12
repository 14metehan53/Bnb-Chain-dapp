const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Test Contract', function () {
  let CounterContract;

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory('Counter');
    const counter = await Counter.deploy();
    await counter.deployed();
    CounterContract = counter;
  });

  it('Does the aggregation process working correctly', async function () {
    await CounterContract.add(5, 2);
    expect(await CounterContract.addition()).to.equal(7);
  });

  it('Does the extraction process work correctly', async function () {
    await CounterContract.sub(8, 4);
    expect(await CounterContract.subtract()).to.equal(4);
  });

  it('Does the multiplication operation work correctly', async function () {
    await CounterContract.mult(2, 2);
    expect(await CounterContract.multiple()).to.equal(4);
  });

  it('Does the division operation work correctly', async function () {
    await CounterContract.div(6, 3);
    expect(await CounterContract.divided()).to.equal(2);
  });
});
