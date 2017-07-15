function sum(a,b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
}

function co(fn) {
	let gen = fn();
	coR(gen);
}

function coR(gen, result) {
	let obj = gen.next(result);
	if (obj.done) return;
	obj.value.then(function (result) {
		coR(gen, result);
	});
}

co(function* () {
	let values = yield Promise.all([sum(2,2), sum(4,4)]);
	let [a,b] = values;
	let result = yield sum(a,b);
	console.log(result);
});