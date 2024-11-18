/**
 * @param {number[]} nums
 * @return {number}
 */
function isArrayZeroOnly(nums) {
    return !nums.find((e) => e !== 0);
}

function processSelection(nums, start, direction){
    const arr = [...nums];
    let curr = start;
    while (curr >= 0 && curr < arr.length){
        if (arr[curr] === 0) {
            curr += direction;
        } else {
            arr[curr]--;
            direction = -direction;
            curr += direction;
        }
    }
    return isArrayZeroOnly(arr);
}

var countValidSelections = function(nums) {
    let validSelectionsCount = 0;
    for (let start = 0; start < nums.length; start++){
        if (nums[start] !== 0){
            continue;
        }
        if (processSelection(nums, start, 1)){
            validSelectionsCount++;
        }
        if (processSelection(nums, start, -1)){
            validSelectionsCount++;
        }
    }
    return validSelectionsCount;
};
