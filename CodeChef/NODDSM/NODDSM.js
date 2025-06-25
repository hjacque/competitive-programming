function noddsm(input) {
    let index = 0;
    const lines = input.trim().split('\n');
    const T = parseInt(lines[index++]);

    for (let t = 0; t < T; t++) {
        let n = parseInt(lines[index++]);
        let arr = lines[index++].split(" ").map(Number);

        let numberOfOnes = numberOfTwos = 0;
        for (let num of arr) {
            if (num === 1) {
                numberOfOnes++;
            } else {
                numberOfTwos++;
            }
        }
        
        if (numberOfTwos === n || numberOfOnes === n) {
            console.log(0);
        } else if (numberOfOnes % 2 === 0 && numberOfOnes / 2 < numberOfTwos) {
            console.log(numberOfOnes / 2);
        } else {
            console.log(numberOfTwos);
        }
    }
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    noddsm(input);
});