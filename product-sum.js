function productSum(array) {
	// Write your code here.
	var stack = [];
	var depth = 1;
	var total = 0;
	return pSumHelper(array, depth, total);
}
function pSumHelper(array, depth, total) {
	console.log("top", array, total, depth);

	if (Array.isArray(array[0])) {
		total = pSumHelper(array[0], depth + 1, total);
		console.log("depth", depth);
		console.log("array total", total);
		array.shift();
	} else {
		if (depth !== 1) {
			console.log("depth 2");
			var temp = 1;
			for (let i = 1; i < depth + 1; i++) {
				temp = temp * i;
			}
			console.log("temp", temp);
			total += temp * array.shift();
		} else {
			total += array.shift();
		}
		if (array.length === 0) {
			console.log("empty");
			return total;
		}
	}
	if (array.length !== 0) {
		console.log("pass", array);
		total = pSumHelper(array, depth, total);
	}
	console.log("total", total, array);
	return total;
}
console.log("return", productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
//5 + 2 + 6 +1 +7
