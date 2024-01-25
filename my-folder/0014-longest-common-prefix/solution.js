/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = strs[0];
    if (strs.length === 0) {
        commonPrefix = '';
    }
    for (let i = 1; i < strs.length; i++) {
        let currWord = strs[i];
        j = 0;
        while (j < currWord.length && j < commonPrefix.length && currWord[j] === commonPrefix[j]) {
            j++;
        }
        commonPrefix = commonPrefix.slice(0, j);
        if (commonPrefix === '') {
            break;
        }
    }

    return commonPrefix;
};
