/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

var fullJustify = function (words, maxWidth) {
	var chunk = [];
	var chunckLength = 0;
	var result = [];

	var reset = (last) => {
		console.log("chunk", chunk);
		console.log("chunklength", chunckLength);
		//is last

		//not last

		chunk = [];
		chunckLength = 0;
	};
	for (let i = 0; i < words.length + 1; i++) {
		var word = words[i];
		//end
		if (i === words.length) {
			console.log("last word");
			reset(true);
		} else if (chunckLength + word.length + chunk.length <= maxWidth) {
			chunk.push(word);
			chunckLength += word.length;
		} else {
			reset(false);
			i -= 1;
		}
	}
	return result;
};
console.log(
	fullJustify(
		["This", "is", "an", "example", "of", "text", "justification."],
		16
	)
);
