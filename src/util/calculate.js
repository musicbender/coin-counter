const calculate = {
    makeChange(input, coinSet) {
      const coinsArray = this.makeSortable(coinSet).sort(this.sortCoins);
        var badges = [], coinValue = 0, amount = Math.round(input);

        //loop through array of coin objects
    	for (let x of coinsArray) {
    		var coinCount = 0, coinValue = x.value;

            //increase coin amount until coin value is higher than amount
    		while (amount >= coinValue) {
    			amount -= coinValue;
    			coinCount++;
    		}

            badges.push(coinCount);
    	}
        
    	return badges;
    },

    //store coin data in an array of objects to it is sortable
    makeSortable(coinSet) {
        var sortable = [];
        for (let coin in coinSet) {
            sortable.push({ coin, value: coinSet[coin] });
        }
        return sortable;
    },

    //sort in decending order
    sortCoins(a,b) {
        return b.value - a.value;
    },
}

export default calculate;
