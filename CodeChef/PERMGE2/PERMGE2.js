function Permge2(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    let index = 1;
    for (let t = 0; t < T; t++) {
        let [x, y, z] = lines[index++].trim().split(' ').map(Number);

        const n = x + y + z;
        let faulty = false;
        const arr = [];
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                if (x) {
                    arr[i] = 0;
                    x--;
                } else if (y) {
                    arr[i] = 1;
                    y--;
                } else if (z) {
                    arr[i] = 2;
                    z--;
                }
            } else {
                if (arr[i - 1] === 0) {
                    if (z) {
                        z--;
                        arr[i] = 2;
                    } else {
                        faulty = true;
                        break;
                    }
                } else if (arr[i - 1] === 1) {
                    if (y) {
                        y--;
                        arr[i] = 1;
                    } else if (z) {
                        z--;
                        arr[i] = 2;
                    } else {
                        faulty = true;
                        break;
                    }
                } else if (arr[i - 1] === 2) {
                    if (x) {
                        x--;
                        arr[i] = 0;
                    } else if (y) {
                        y--;
                        arr[i] = 1;
                    } else if (z) {
                        z--;
                        arr[i] = 2;
                    }
                }
            }
        }
        console.log(faulty ? "No" : "Yes");
    }    
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    Permge2(input);
});