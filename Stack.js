/**
 ** Stacks are build in Data Structure in JavaScript
 ** Arrays in JavaScricp works as Stack.
 ** Stacks Are first in Last out.
 * */
class Stack {
	constructor() {
		this.count = 0;
		this.storage = {};
	}
	push(value) {
		this.storage[this.count] = value;
		this.count++;
	}
	pop() {
		if (this.count === 0) {
			return undefined;
		}
		this.count--;
		let result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}
	size() {
		return this.count;
	}
	peek() {
		return this.storage[this.count - 1];
	}
}

const myStack = new Stack();
myStack.push(1); //add element to tha last
myStack.push(2);
console.log(myStack.peek()); // returns the last element
console.log(myStack.pop()); // removes and returns the last element
console.log(myStack.peek());
