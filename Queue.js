/**
 * *
 * * Queue is First in First out Data Structure.
 */
export default class Queue {
	constructor() {
		this.collection = [];
	}
	print() {
		console.log(this.collection);
	}
	enqueue(element) {
		this.collection.push(element);
	}
	dequeue() {
		return this.collection.shift();
	}
	front() {
		return this.collection[0];
	}
	size() {
		return this.collection.length;
	}
	isEmpty() {
		return this.collection.length === 0;
	}
}
