const calculate = {
    makeChange(amount, coinSet) {
    	var badges = [], coinValue = 0, coinCount = 0;
        const coinsArray = this.makeSortable(coinSet).sort(this.sortCoins);
        console.log(coinsArray);

    	for (let x of coinsArray) {
    		coinCount = 0;
    		coinValue = x.value;

    		while (amount >= coinValue) {
    			amount -= coinValue;
    			coinCount++;
    		}

            // var obj = { 'key': x.key, 'value': coinCount };
    		// badges.push(obj);
            badges.push(coinCount);

            console.log(badges);
    	}

    	return badges;
    },

    makeSortable(coinSet) {
        var sortable = [];
        for (let coin in coinSet) {
            let obj = {};
            obj.key = coin;
            obj.value = coinSet[coin];

            sortable.push(obj);
        }

        return sortable;
    },

    sortCoins(a,b) {
        return b.value - a.value;
    },
}

export default calculate;
