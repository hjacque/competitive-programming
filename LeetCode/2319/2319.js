/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {

    for (let i = 0; i < grid.length; i++) {
        for (let u = 0; u < grid[i].length; u++) {
            if (((u === i || i + u + 1 === grid.length) && grid[i][u] === 0) || (u !== i && i + u + 1 !== grid.length && grid[i][u] !== 0)) {
                return false
            }
        }
    }

    return true;
};
