function findClosestValueInBst(tree, target) {
	return findClosestHelper(tree, target, tree.value);
}

function findClosestHelper(tree, target, closest) {
	//this function will do the heavy lifting
	//check if branch/tree is empty
	if (tree === null) {
		return closest;
	}
	//if current tree value is closer to target update closest value
	//variable
	//was forgetting using absolute function to find the differences
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	//check if to go to the left branch or right branch
	//depending on how target stacks up to our current value
	//go left if target is smaller
	if (target < tree.value) {
		return findClosestHelper(tree.left, target, closest);
	}
	//go right if target is greater
	else if (target > tree.value) {
		return findClosestHelper(tree.right, target, closest);
	}
	//return closest if neither of previous cases match
	else {
		return closest;
	}
}
