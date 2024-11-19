/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let result = "";

    let nicestCounter = 0;

    for (let left = 0; left < s.length -1; left++) {
        for (let right = left; right < s.length; right++) {
            const map = new Map();
            const slice = s.split("").slice(left, right+1);
            slice.map(e => {
                if (map.has(e)) {
                    map.set(e, map.get(e) + 1);
                } else {
                    map.set(e, 1);
                }
            })
            let howNice = 0;
            for(let [key, _value] of map) {
                if (key === key.toUpperCase()) {
                    if (map.has(key.toLowerCase())) {
                        howNice += map.get(key.toLowerCase())
                    } else {
                        howNice = 0;
                        break;
                    }
                } else {
                    if (map.has(key.toUpperCase())) {
                        howNice += map.get(key.toUpperCase())
                    } else {
                        howNice = 0;
                        break;
                    }
                }
            }
            if (howNice > nicestCounter && slice.length > result.length) {
                result = slice.join("");
            }
        }
    }
    return result;
};
