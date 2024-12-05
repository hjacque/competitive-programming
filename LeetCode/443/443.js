/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let s = "";
    let lastSeen;
    let groupLength = 1;
    for (let i = 0; i < chars.length; i++) {
        if (i === 0) {
            s += chars[i];
            lastSeen = chars[i];
        } else if (lastSeen === chars[i]) {
            groupLength++;
        } else {
            if (groupLength > 1) {
                s += groupLength + ""
            }
            s += chars[i];
            lastSeen = chars[i];
            groupLength = 1;
        }
    }
    if (groupLength > 1) {
        s += groupLength + ""
    }

    for (let i = 0; i < chars.length; i++) {
        if (s[i]) {
            chars[i] = s[i];
        } else {
            chars.pop();
            i--;
        }
    }

    return chars.length;
};
