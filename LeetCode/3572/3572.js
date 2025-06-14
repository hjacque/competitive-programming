/**
 * @param {number[]} x
 * @param {number[]} y
 * @return {number}
 */
var maxSumDistinctTriplet = function(x, y) {
    const map = new Map();
    for (let i = 0; i < x.length; i++) {
        if (!map.has(x[i]) || map.get(x[i]) < y[i]) {
            map.set(x[i], y[i]);
        }
    }

    if (map.size < 3) return -1;

    const heap = MaxPriorityQueue.fromArray([...map.values()]);
    return heap.dequeue() + heap.dequeue() + heap.dequeue();
};