function nodeDepths(root) {
	// Write your code here.
	var depth = 0;
	var sum = 0;
	return depthHelper(root, depth, sum);
}

function depthHelper(tree, depth, sum) {
	console.log(depth, sum);
	sum = sum + depth;
	if (tree.left === null && tree.right === null) {
		return sum;
	}
	if (tree.left !== null) {
		sum = depthHelper(tree.left, depth + 1, sum);
	}
	if (tree.right !== null) {
		sum = depthHelper(tree.right, depth + 1, sum);
	}
	//data we are trying to pass back
	return sum;
}
