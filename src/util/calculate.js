const calculate = {
    makeChange(input, coinSet) {
      const coinsArray = this.makeSortable(coinSet).sort(this.sortCoins);
        var badges = [], coinValue = 0, amount = Math.round(input);

    	for (let x of coinsArray) {
    		var coinCount = 0, coinValue = x.value;

    		while (amount >= coinValue) {
    			amount -= coinValue;
    			coinCount++;
    		}

            badges.push(coinCount);
    	}

    	return badges;
    },

    makeSortable(coinSet) {
        var sortable = [];
        for (let coin in coinSet) {
            sortable.push({ coin, value: coinSet[coin] });
        }
        return sortable;
    },

    sortCoins(a,b) {
        return b.value - a.value;
    },
}

export default calculate;
