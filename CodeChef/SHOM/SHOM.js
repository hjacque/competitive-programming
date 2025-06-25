function shom(input) {
    const lines = input.trim().split('\n');
    const [l, r] = lines[0].split(" ").map(Number);

    console.log(Math.abs(l - r));
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    shom(input);
});