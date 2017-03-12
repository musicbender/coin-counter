import calculate from '../util/calculate.js';

describe('calculate', function () {
  it('should not error', function () {
    var coinSet = { coin1: 25, coin2: 10, coin3: 5, coin4: 1 },
        amount = 18;

    expect(() => calculate.makeChange(amount, coinSet).to.not.throw(Error));
  });

  it('should return an array', function () {
    var coinSet = { coin1: 25, coin2: 10, coin3: 5, coin4: 1 },
        amount = 18;

    expect(() => calculate.makeChange(amount, coinSet).should.be.an('array'));
  });

  it('works with denominations as US coins in descending order', function () {
    var coinSet = { coin1: 25, coin2: 10, coin3: 5, coin4: 1 },
        amount = 18,
        expected = { coin1: 0, coin2: 1, coin3: 1, coin4: 3 };

    expect(() => calculate.makeChange(amount, coinSet).to.equal(expected));
  });

  it('works with denominations in US coins in any order', function () {
    var coinSet = { coin1: 5, coin2: 10, coin3: 1, coin4: 25 },
        amount = 18,
        expected = { coin1: 1, coin2: 1, coin3: 3, coin4: 0 };

    expect(() => calculate.makeChange(amount, coinSet).to.equal(expected));
  });

  it('works in random order with one coin value always being 1', function () {
    var coinSet = { coin1: 6, coin2: 11, coin3: 1, coin4: 21 },
        amount = 18,
        expected = { coin1: 1, coin2: 1, coin3: 1, coin4: 0 };

    expect(() => calculate.makeChange(amount, coinSet).to.equal(expected));
  });

  it('works with duplicate denominations', function () {
    var coinSet = { coin1: 25, coin2: 10, coin3: 10, coin4: 1 },
        amount = 18,
        expected = { coin1: 0, coin2: 1, coin3: 0, coin4: 8 };

    expect(() => calculate.makeChange(amount, coinSet).to.equal(expected));
  });
});
