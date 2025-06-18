function Divide3(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);

    console.log(n % 3 === 0 ? 0 : 1);
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    Divide3(input);
});