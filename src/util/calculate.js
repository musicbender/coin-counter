const calculate = {
  makeChange(input, coinSet) {
    const coinsArray = this.makeSortable(coinSet).sort(this.sortCoins);
    const badges = {};
    let coinValue = 0;
    let amount = Math.round(input);

    // loop through array of coin objects
    for (const x of coinsArray) {
      let coinCount = 0;
      coinValue = x.value;

      coinCount = Math.floor(amount / coinValue);
      amount -= (coinValue * coinCount);

      badges[x.coin] = coinCount;
    }

    return badges;
  },

  // store coin data in an array of objects to it is sortable
  makeSortable(coinSet) {
    const sortable = [];
    for (const coin in coinSet) {
      sortable.push({ coin, value: coinSet[coin] });
    }
    return sortable;
  },

  // sort in decending order
  sortCoins(a, b) {
    return b.value - a.value;
  },
};

export default calculate;
