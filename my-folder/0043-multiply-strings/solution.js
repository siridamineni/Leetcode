/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
     const len1 = num1.length;
    const len2 = num2.length;
    const result = Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const product = parseInt(num1[i]) * parseInt(num2[j]);
            const sum = product + result[i + j + 1];
            result[i + j] += Math.floor(sum / 10);
            result[i + j + 1] = sum % 10;
        }
    }

    return result.join('').replace(/^0+(?=\d)/, '');
};
