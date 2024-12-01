/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length -1;
    let max = 0;
    while (i < j) {
        max = Math.max(max, (height[i] > height[j] ? height[j] : height[i]) * (j - i));
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return max;
};
