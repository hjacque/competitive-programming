function Main(input) {
	[init, ...queries] = input.split("\n");
	const [N, _] = init.split(" ").map(Number);
	
	let lastType2QueryId;
	for (let i = queries.length - 1; i >= 0; i--) {
	  if (queries[i][0] === "2") {
	    lastType2QueryId = i;
	    break;
	  }
	}
	
	if (lastType2QueryId !== undefined) {
	 	let arr = new Array(N).fill(0).map((_, i) => i + 1);
        let offset = 0;
        for (let i = 0; i <= lastType2QueryId; i++) {
            const [type, int1, int2] = queries[i].split(" ").map((e) => parseInt(e));
            if (type === 1) {
                arr[(int1 - 1 + offset) % arr.length] = int2;
            } else if (type === 2) {
                console.log(arr[(int1 - 1 + offset) % arr.length]);
            } else if (type === 3) {
                offset += int1;
            }
        } 
	}
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
