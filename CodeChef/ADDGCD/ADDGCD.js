function Addgcd(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    let index = 1;
    for (let t = 0; t < T; t++) {
        let [x, y] = lines[index++].split(" ").map(Number);
        
        function gcd(a, b) {
            if (a == 0)
                return b;
            return gcd(b % a, a);
        }
        
        if (gcd(x, y) > 1) {
            console.log(0);
        } else if (gcd(x, y + 1) > 1 || gcd(x + 1, y) > 1) {
            console.log(1);
        } else {
            console.log(2);
        }
    }
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    Addgcd(input);
});