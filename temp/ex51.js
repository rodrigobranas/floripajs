function sum(a,b) {
	return new Promise(function (resolve, reject) {
		if (!a || !b) return reject('Invalid input!');
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
}

console.time();
Promise.all([
	sum(2,2),
	sum(4,4)
]).then(function (values) {
	let [a,b] = values;
	sum(a,b).then(function (result) {
		console.log(result);
		console.timeEnd();
	});
});