/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minimumOperationsToMakeEqual = function(x, y) {
    const visited = new Set();

    const queue = new Queue();
    queue.enqueue([0, x]);
    while (queue.size()) {
        const [steps, node] = queue.dequeue();

        if (node === y) {
            return steps;
        }

        visited.add(node);

        if (!visited.has(node + 1)) {
            queue.enqueue([steps + 1, node + 1]);
        }
        if (!visited.has(node - 1)) {
            queue.enqueue([steps + 1, node - 1]);
        }
        if (node % 11 === 0 && !visited.has(node / 11)) {
            queue.enqueue([steps + 1, node / 11]);
        }
        if (node % 5 === 0 && !visited.has(node / 5)) {
            queue.enqueue([steps + 1, node / 5]);
        }
    }
};