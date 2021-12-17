/**
 ** The Set Data Structure is kind of like an array But it doesn't contain any duplicate item
 ** The most use case of Set is to check if an item exist or not
 ** The values don't have any perticular order
 ** ES6 has a built in implementation of Set
 */

class MySet {
	constructor() {
		this.collection = [];
	}
	has(element) {
		return this.collection.includes(element);
	}
	values() {
		return this.collection;
	}
	add(element) {
		if (!this.has(element)) {
			this.collection.push(element);
			return true;
		}
		return false;
	}
	remove(element) {
		if (!this.has(element)) {
			let index = this.collection.indexOf(element);
			this.collection.splice(index, 1);
			return true;
		}
		return false;
	}
	size() {
		return this.collection.length;
	}
	union(otherSet) {
		const unionSet = new MySet();
		const firstSet = this.values();
		const secondSet = otherSet.values();
		firstSet.forEach((e) => {
			unionSet.add(e);
		});
		secondSet.forEach((e) => {
			unionSet.add(e);
		});
		return unionSet;
	}
	intersection(otherSet) {
		const intersectionSet = new MySet();
		const firstSet = this.values();
		firstSet.forEach((e) => {
			if (otherSet.has(e)) {
				intersectionSet.add(e);
			}
		});
		return intersectionSet;
	}
	difference(otherSet) {
		const differenceSet = new MySet();
		const firstSet = this.values();
		firstSet.forEach((e) => {
			if (!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});
		otherSet.values().forEach((e) => {
			if (!this.has(e)) {
				differenceSet.add(e);
			}
		});
		return differenceSet;
	}
	subSet(otherSet) {
		const firstSet = this.values();
		return firstSet.every((value) => {
			return otherSet.has(value);
		});
	}
}
const setA = new MySet();
const setB = new MySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setB.difference(setA));
