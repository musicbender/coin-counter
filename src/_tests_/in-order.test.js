import makeChange from '../util/calculate.js';


describe('calculate', function () {
  it('should find least amount of coins', function () {
    expect(() => makeChange(18, [25, 10, 5, 1])).to.not.throw(Error);
  });
});
