function isReorganizedValid(b) {
    for (let i = 1; i < b.length; i++) {
        if (Math.abs(b[i-1] - b[i]) > 1) {
            console.log("NO");
            return ;
        }
    }
    console.log("YES");
}

function Permexis(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    let index = 1;
    for (let t = 0; t < T; t++) {
        const _n = parseInt(lines[index++]);
        const a = lines[index++].trim().split(' ').map(Number);

        isReorganizedValid(a.sort());
    }    
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    Permexis(input);
});