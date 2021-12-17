export default class PriorityQueue {
	constructor() {
		this.collection = [];
	}
	print() {
		console.log(this.collection);
	}
	enqueue(element) {
		if (this.isEmpty()) {
			this.collection.push(element);
		} else {
			let added = false;
			for (let i = 0; i < this.collection.length; i++) {
				if (element[1] < this.collection[i][1]) {
					this.collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				this.collection.push(element);
			}
		}
	}
	isEmpty() {
		return this.collection.length === 0;
	}
	dequeue() {
		const value = this.collection.shift();
		return value[0];
	}
	front() {
		return this.collection[0];
	}
	size() {
		return this.collection.length;
	}
}
