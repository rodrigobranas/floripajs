function sum(a,b) {
	return new Promise(function (resolve, reject) {
		if (!a || !b) return reject('Invalid input!');
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
}

(async function () {
	let result;
	result = await sum(2,2);
	result = await sum(result,result);
	result = await sum(result,result);
	console.log(result);
})();