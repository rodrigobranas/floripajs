function delayedSum (a,b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(a + b);
        }, 100);
    });
}

console.time("performance");
(async function () {
    let [a,b] = await Promise.all([delayedSum(2,2), delayedSum(4,4)]);
    let result = await delayedSum(a,b);
    console.log(result);
    console.timeEnd("performance");
})();