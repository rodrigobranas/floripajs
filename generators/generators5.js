function* forever() {
	let value = 0;
	while(true) {
		let newValue = yield value++;
		value = newValue || value;
	}
}

function today() {
	let date = new Date();
	return date;
}

let foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(today());
console.log(foreverGenerator.next(10));
foreverGenerator.return(); // or throw
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());