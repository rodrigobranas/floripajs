function sum(a,b) {
	return new Promise(function (resolve, reject) {
		if (!a || !b) return reject('Invalid input!');
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
}

let result;
result = sum(2,2);
result = sum(result,result);
result = sum(result,result);
console.log(result);