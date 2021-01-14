var evalRPN = function (tokens) {
	//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
	//Number: [10,6,12,-11]
	//Multiply:[10,6,-132]
	var numbers = [];
	//loop thru tokens array
	tokens.forEach((token, idx) => {
		console.log(token, "index", idx);
		//if number add to stack
		if (!isNaN(Number(token))) {
			numbers.push(Number(token));
		}
		//perform operation
		//check if enough numbers in number
		//array
		//can't divide by zero
		else if (token === "+") {
			let first = numbers.pop();
			let second = numbers.pop();
			//second + first
			numbers.push(second + first);
		} else if (token === "-") {
			let first = numbers.pop();
			let second = numbers.pop();
			//second + first
			numbers.push(second - first);
		} else if (token === "*") {
			let first = numbers.pop();
			let second = numbers.pop();
			//second + first
			numbers.push(second * first);
		} else if (token === "/") {
			let first = numbers.pop();
			let second = numbers.pop();
			if (first === 0) {
				console.log("divide by zero");
				numbers[0] = false;
				return;
			}
			//second + first
			numbers.push(
				Math.sign(second / first) * Math.floor(Math.abs(second / first))
			);
		} else {
			numbers[0] = "Incorrect input";
			return;
		}

		if (tokens[idx + 1] === undefined && numbers.length > 1) {
			numbers[0] = "too many numbers";
		}
		//else exit input wrong
	});
	return numbers[0];
};
// console.log(
// 	evalRPN([
// 		"10",
// 		"6",
// 		"9",
// 		"3",
// 		"+",
// 		"-11",
// 		"*",
// 		"/",
// 		"*",
// 		"17",
// 		"+",
// 		"5",
// 		"+",
// 	])
// );
// console.log(evalRPN(["10", "2", "+", "11", "-", "2", "*", "0", "/"]));
console.log(evalRPN(["10", "2", "+"]));
