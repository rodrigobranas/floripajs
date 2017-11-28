function delayedSum (a,b,cb) {
    setTimeout(function () {
        cb(a + b);
    }, 1000);
}

delayedSum(2,2, function (a) {
    delayedSum(4,4, function (b) {
        delayedSum(a,b, function (result) {
            console.log(result);
        });
    });
});