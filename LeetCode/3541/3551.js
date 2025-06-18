/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const voyelMap = new Map([
        ["a", 0],
        ["e", 0],
        ["i", 0],
        ["o", 0],
        ["u", 0],
    ]);
    const conMap = new Map();
    
    for (const char of s) {
        if (voyelMap.has(char)) {
            voyelMap.set(char, voyelMap.get(char) + 1); 
        } else {
            conMap.set(char, (conMap.get(char) || 0) + 1);
        }
    }

    return (voyelMap.size > 0 ? Math.max(...voyelMap.values()) : 0) + (conMap.size > 0 ? Math.max(...conMap.values()) : 0);
};