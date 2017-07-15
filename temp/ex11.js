function* accumulator() {
	let history = [];
	while(true) {
		history.push(yield);
		console.log(history.reduce((total, actual) => total + actual, 0));
	}
}

let accumulatorGenerator = accumulator();
accumulatorGenerator.next();
accumulatorGenerator.next(1);
accumulatorGenerator.next(2);
accumulatorGenerator.next(3);
accumulatorGenerator.next(4);