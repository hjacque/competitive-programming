function Nearsq(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    let index = 1;
    for (let t = 0; t < T; t++) {
        const n = parseInt(lines[index++]);

        for (let b = 1; b <= 100; b++) {
            if (b * b > n) {
                console.log((b - 1) * (b - 1));
                break;
            }
        }
    }
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    Nearsq(input);
});