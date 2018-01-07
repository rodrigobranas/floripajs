let i = 0;
function increment () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(i++);
            resolve();
        }, 1000);
    });
}

function end() {
    console.log("end");
}