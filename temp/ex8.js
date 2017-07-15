function* bears() {
	yield "panda";
	yield "polar";
	yield "pardo";
}

let bearsGenerator = bears();
console.log(bearsGenerator.next());
console.log(bearsGenerator.next());
console.log(bearsGenerator.next());
console.log(bearsGenerator.next());

for(let bear of bears()) {
	console.log(bear);
}