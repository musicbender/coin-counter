import calculate from '../util/calculate';

describe('calculate', function () {
  it('test chai', function () {
    expect(1).to.equal(1);
  });

  it('should return an object', function () {
    const coinSet = { coin1: 25, coin2: 10, coin3: 5, coin4: 1 };
    const amount = 18;

    expect(calculate.makeChange(amount, coinSet)).should.be.an('object');
  });

  it('works with denominations as US coins in descending order', function () {
    const coinSet = { coin1: 25, coin2: 10, coin3: 5, coin4: 1 };
    const amount = 18;
    const expected = { coin1: 0, coin2: 1, coin3: 1, coin4: 3 };

    expect(calculate.makeChange(amount, coinSet)).to.deep.equal(expected);
  });

  it('works with denominations in US coins in any order', function () {
    const coinSet = { coin1: 5, coin2: 10, coin3: 1, coin4: 25 };
    const amount = 18;
    const expected = { coin1: 1, coin2: 1, coin3: 3, coin4: 0 };

    expect(calculate.makeChange(amount, coinSet)).to.deep.equal(expected);
  });

  it('works in random order with one coin value always being 1', function () {
    const coinSet = { coin1: 6, coin2: 11, coin3: 1, coin4: 21 };
    const amount = 18;
    const expected = { coin1: 1, coin2: 1, coin3: 1, coin4: 0 };

    expect(calculate.makeChange(amount, coinSet)).to.deep.equal(expected);
  });

  it('works with duplicate denominations', function () {
    const coinSet = { coin1: 25, coin2: 10, coin3: 10, coin4: 1 };
    const amount = 18;
    const expected = { coin1: 0, coin2: 1, coin3: 0, coin4: 8 };

    expect(calculate.makeChange(amount, coinSet)).to.deep.equal(expected);
  });
});
