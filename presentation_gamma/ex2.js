function* forever() {
	let value = 0;
	while(true) {
		let reset = yield value++;
		if (reset) value = 0;
	}
}

function today() {
	return new Date();
}

let foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(today());
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());