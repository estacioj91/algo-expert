function isValidSubsequence(array, sequence) {
	var arrayIdx = 0;
	var subIdx = 0;
	// Write your code here.
	while (arrayIdx < array.length && subIdx < sequence.length) {
		if (array[arrayIdx] === sequence[subIdx]) {
			subIdx++;
			arrayIdx++;
		} else {
			arrayIdx++;
		}
	}
	return subIdx === sequence.length ? true : false;
}
