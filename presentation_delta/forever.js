function* forever () {
    let i = 0;
    while (true) {
        let reset = yield i++;
        if(reset) i = 0;
    }
}

function today () {
    console.log(new Date());
}

let foreverGenerator = forever();
console.log(foreverGenerator.next().value);
console.log(foreverGenerator.next().value);
console.log(foreverGenerator.next().value);
console.log(foreverGenerator.next().value);
console.log(foreverGenerator.next().value);
today();
console.log(foreverGenerator.next(true).value);
console.log(foreverGenerator.next().value);
console.log(foreverGenerator.next().value);
console.log(foreverGenerator.next().value);
console.log(foreverGenerator.next().value);