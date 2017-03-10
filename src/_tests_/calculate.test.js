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
        amount = 18;

    expect(() => calculate.makeChange(amount, coinSet).to.equal([0,1,1,3]));
  });

  it('works with denominations in US coins in any order', function () {
    var coinSet = { coin1: 5, coin2: 10, coin3: 1, coin4: 25 },
        amount = 18;

    expect(() => calculate.makeChange(amount, coinSet).to.equal([1,1,3,0]));
  });

  it('works in random order with one coin value always being 1', function () {
    var coinSet = { coin1: 6, coin2: 11, coin3: 1, coin4: 21 },
        amount = 18;

    expect(() => calculate.makeChange(amount, coinSet).to.equal([1,1,1,0]));
  });
});
