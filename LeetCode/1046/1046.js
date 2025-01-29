/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let arr = stones;

    while (arr.length >= 2) {
        arr = arr.sort((a, b) => b - a);
        if (arr[0] > arr[1]) {
            arr[0] = arr[0] - arr[1];
            arr.splice(1, 1);
        } else {
            arr.shift();
            arr.shift();
        }
    }

    return arr.length ? arr[0] : 0;
};
