function sum(a,b,callback) {
	setTimeout(function () {
		callback(a + b);
	}, 1000);
}

sum(2,2,function (result) {
	sum(result,result,function (result) {
		sum(result,result,function (result) {
			console.log(result);
		});
	});
});