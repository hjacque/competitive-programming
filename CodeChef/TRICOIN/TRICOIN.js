function isValidTriangle(h, n) {
    return (h * (h + 1)) / 2 <= n;
}

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (input) {
    const [t, ...arr] = input.split('\n').filter(Boolean);
    
    const res = [];
    for (let i = 0; i < t; i++) {
        let lo = 1; hi = arr[i], max = 1;
        while (lo <= hi) {
            const mid = Math.floor(lo/2 + hi/2);
            if (isValidTriangle(mid, arr[i])) {
                max = Math.max(mid, max);
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        res.push(max);
    }
    
    console.log(res.join("\n"));
});