function* iterator(array) {
	let i = 0;
	while(i < array.length) {
		yield array[i++];
	}
}

let letters = ['a','b','c'];

let lettersGenerator = iterator(letters);
console.log(lettersGenerator.next(1));
console.log(lettersGenerator.next(2));
console.log(lettersGenerator.next(3));

for(let letter of iterator(letters)) {
	console.log(letter);
}