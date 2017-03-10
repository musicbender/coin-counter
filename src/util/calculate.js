const calculate = {
    makeChange(amount, coinSet) {
    	var badges = [], coinValue = 0, coinCount = 0;
        const coinsArray = this.makeSortable(coinSet); //.sort(this.sortCoins)

    	for (let x of coinsArray) {
    		coinCount = 0;
    		coinValue = x.value;

    		while (amount >= coinValue) {
    			amount -= coinValue;
    			coinCount++;
    		}
    		badges[x.key] = {
                'key': x.key,
                'value': coinCount
            };

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
        return b[1]-a[1];
    },
}

export default calculate;
