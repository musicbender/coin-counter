const calculate = {
    makeChange(amount, coinSet) {
    	var coins = {}, total = 0, coinVal = 0, coinCount = 0;

    	for (let i in coinSet) {
    		coinCount = 0;
    		coinVal = coinSet[i];

    		while(amount >= coinVal){
    			total += coinVal;
    			amount -= coinVal;
    			coinCount++;
    		}
    		coins[i] = coinCount;
    	}
    	return coins;
    },
    orderCoins(coins) {
        var c = coins;
        return c.sort((a,b) => b-a);
    },
    get(amount, coinSet) {
        const coins = this.orderCoins(coinSet);

        return this.makeChange(amount, coins);
    }
}






export default calculate;
