function delayedSum (a,b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(a + b);
        }, 100);
    });
}

function co (fn) {
    let gen = fn();
    coR(gen);
}

function coR (gen, result) {
    let obj = gen.next(result);
    if (obj.done) return;
    obj.value.then(function (result) {
        coR(gen, result);
    });
}

console.time("performance");
co(function* () {
    let [a,b] = yield Promise.all([delayedSum(2,2), delayedSum(4,4)]);
    let result = yield delayedSum(a,b);
    console.log(result);
    console.timeEnd("performance");
});