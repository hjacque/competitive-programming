function Main(input) {
	input = input.split("\n");
	const [N, Q] = input[0].split(" ").map(Number);
	const X = input[1].split(" ").map(Number);
	
	const boxes = new Array(N).fill(0);
	let res = "";
	for (let i = 0; i < Q; i++) {
        if (X[i] >= 1) {
            boxes[X[i] - 1]++;
            res += X[i] + " ";
        } else {
            const min = Math.min(...boxes);
            const indexOfMin = boxes.indexOf(min);
            boxes[indexOfMin]++;
            res += indexOfMin + 1 + " ";
        }
	}
	
	console.log(res.trim());
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));