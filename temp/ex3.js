function sum(a,b,callback) {
	setTimeout(function () {
		callback(a + b);
	}, 1000);
}

sum(2,2,function (result) {
	console.log(result);
});