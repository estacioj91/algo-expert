//[7,1,5,3,6,4]
var maxProfit = function (prices) {
	var maxProfit = 0;
	var minVal = Infinity;
	prices.forEach((value) => {
		if (value < minVal) {
			minVal = value;
		} else if (value - minVal > maxProfit) {
			maxProfit = value - minVal;
		}
	});
	return maxProfit;
};
console.log(maxProfit([7, 1, 5, 2, 3, 6, 8, 4]));
