function Maxdif(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    let index = 1;
    for (let t = 0; t < T; t++) {
        const [n, k] = lines[index++].split(' ').map(Number);
        const weights = lines[index++].split(' ').map(Number);

        //  Write your code here
        weights.sort((a, b) => a - b);
        const totalWeight = weights.reduce((acc, curr) => acc += curr, 0);

        const sonWeight = k < n - k ?
            weights.slice(0, k).reduce((acc, curr) => acc += curr, 0) :
            weights.slice(0, n - k).reduce((acc, curr) => acc += curr, 0);

        const fatherWeight = totalWeight - sonWeight;

        console.log(fatherWeight - sonWeight);
    }
}

// Set up input reading from standard input
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    Maxdif(input);
});