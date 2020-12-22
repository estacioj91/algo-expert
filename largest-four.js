function LargestFour(arr) {
	// code goes here
	if (arr.length === 0) return;
	var sum = 0;
	var array = arr.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < 4; i++) {
		if (array[array.length - 1 - i] === undefined) {
			break;
		}
		sum += array[array.length - 1 - i];
	}
	return sum;
}
console.log(LargestFour([]));
