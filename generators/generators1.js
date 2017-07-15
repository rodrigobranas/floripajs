function forever() {
	let value = 0;
	while(true) {
		console.log(value++);
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

forever();
today();