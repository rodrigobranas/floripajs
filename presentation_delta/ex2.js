function delayedSum (a,b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(a + b);
        }, 100);
    });
}

console.time("performance");
Promise.all([
    delayedSum(2,2), 
    delayedSum(4,4)]
).then(function (values) {
    let [a,b] = values;
    delayedSum(a,b).then(function (result) {
        console.log(result);
        console.timeEnd("performance");
    });
});