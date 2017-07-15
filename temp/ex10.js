function sum(a,b) {
	return new Promise(function (resolve, reject) {
		if (!a || !b) return reject('Invalid input!');
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
		coR(generator, result)
	});
}

co(function* () {
	let result;
	result = yield sum(2,2);
	result = yield sum(result,result);
	result = yield sum(result,result);
	result = yield sum(result,result);
	console.log(result);
});