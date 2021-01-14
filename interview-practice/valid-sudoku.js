var isValidSudoku = function (board) {
	var hash = {};
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			var current = board[i][j];
			if (current != ".") {
				// console.log(current);
				//get current subbox
				var subBox = Math.floor(i / 3) + Math.floor(j / 3) * 3;
				//0 3 6
				//1 4 7
				//2 5 8
				//check if number exists already, if it does return
				//false
				if (
					hash["row " + i + " " + current] ||
					hash["col " + j + " " + current] ||
					hash["subBox " + current + " " + subBox]
				) {
					return false;
				}
				hash["row " + i + " " + current] = true;
				hash["col " + j + " " + current] = true;
				hash["subBox " + current + " " + subBox] = true;
			}
		}
	}
	return true;
	// console.log(hash);
};
console.log(
	isValidSudoku([
		["5", "3", "5", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	])
);
