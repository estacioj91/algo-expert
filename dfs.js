class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	depthFirstSearch(array) {
		// Write your code here.
		array.push(this.children.name);
		for (const child of this.children) {
			child.depthFirstSearch(array);
		}
	}
}
