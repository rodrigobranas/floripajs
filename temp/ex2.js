function sum(a,b) {
	setTimeout(function () {
		return a + b;
	}, 1000);
}

let result = sum(2,2);
console.log(result);