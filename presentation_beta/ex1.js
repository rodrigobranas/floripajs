function sum(a,b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
}


(async function () {
	console.time();
	let values = await Promise.all([sum(2,2), sum(4,4)]);
	let [a,b] = values;
	let result = await sum(a,b);
	console.log(result);
	console.timeEnd();
})();