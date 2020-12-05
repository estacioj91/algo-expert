function getNthFib(n) {
	// Write your code here.
	var memo = {};
	return calcFib(n - 1, memo);
}

function calcFib(n, memo) {
	console.log(memo);
	if (n === 0) {
		memo[n] = 0;
		return memo[n];
	} else if (n === 1) {
		memo[n] = 1;
		return memo[n];
	} else if (memo[n]) {
		return memo[n];
	} else {
		memo[n] = calcFib(n - 1, memo) + calcFib(n - 2, memo);
		return memo[n];
	}
}
