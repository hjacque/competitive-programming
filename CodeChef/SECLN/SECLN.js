function secln(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    const T = parseInt(lines[index++]);

    for (let t = 0; t < T; t++) {
        let n = parseInt(lines[index++]);
        let arr = lines[index++].split(" ").map(Number);
        
        let res = arr[0];
        for (let i = 1; i < arr.length; i++) {
            const seconds = Math.max(arr[i] + 1, i);
            res = Math.min(res, seconds);
        }
        console.log(res);
    }
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    secln(input);
});