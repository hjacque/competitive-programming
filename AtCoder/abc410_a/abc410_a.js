function Main(input) {
	const input = input.split("\n");
	const horseMaxAgePerRace = input[1].split(" ").map(Number);
	const horseAge = parseInt(input[2]);
	
	let res = 0;
	for (const max in horseMaxAgePerRace) {
	  if (horseAge <= max) {
	    res++;
	  }
	}
	console.log(res);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));