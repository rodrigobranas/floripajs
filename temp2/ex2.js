function* bears() {
	yield "panda";
	yield "polar";
	yield "pardo";
}

let bearsGenerator = bears();

for(let bear of bearsGenerator) {
	console.log(bear);
}