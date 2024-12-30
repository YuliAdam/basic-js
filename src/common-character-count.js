const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr2 = s2.split("");
  return s1.split("").filter(el=>{
    if(arr2.includes(el)){
      arr2.splice(arr2.indexOf(el),1,'');
      return true
    }
    return false;
  }).length;
}

module.exports = {
  getCommonCharacterCount
};
