let delayedSum = function (a,b) {
	return new Promise(function (resolve, reject) {
		if (!a || !b) throw "Invalid parameters";
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
};

let co = function (fn) {
	let generator = fn();
	coR(generator);
};

let coR = function (generator, result) {
	let {value, done} = generator.next(result);
	if (done) return;
	value.then(result => coR(generator, result));
};

co(function* () {
	let [a,b] = yield Promise.all([delayedSum(2,2), delayedSum(4,4)]);
	let result = yield delayedSum(a,b);
	console.log(result);
});