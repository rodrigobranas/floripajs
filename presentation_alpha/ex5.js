function sum(a,b) {
	return new Promise(function (resolve, reject) {
		if (!a || !b) return reject('Invalid input!');
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
}

console.time();
sum(2,2).then(function (a) {
	return sum(4,4).then(function (b) {
		return sum(a,b).then(function (result) {
			console.log(result);
			console.timeEnd();
		});
	});
}).catch(function (e) {
	console.log(e);
});