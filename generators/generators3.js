function* forever() {
	let value = 0;
	while(true) {
		yield value++;
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
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());