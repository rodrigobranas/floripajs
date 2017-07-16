function sum(a,b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
}

function co(fn) {
	let generator = fn();
	coR(generator);
}

function coR(generator, result) {
	let obj = generator.next(result);
	if (obj.done) return;
	obj.value.then(function (result) {
		coR(generator, result);
	});
}

co(function* () {
	let [a,b] = yield Promise.all([sum(2,2), sum(4,4)]);
	let result = yield sum(a,b);
	console.log(result);
});






