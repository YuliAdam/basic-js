const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( 
  n ) {
  const arrRightDigits = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];
  const nStr = ''+n;
  for(let i = 2;i< nStr.length;i+=3){
    if(nStr[i]!=='-') return false;
  } 
  for(let i = 0;i< nStr.length;i+=3){
    if(!arrRightDigits.includes(nStr[i])) return false;
  }
  for(let i = 1;i< nStr.length;i+=3){
    if(!arrRightDigits.includes(nStr[i])) return false;
  }
  return true;
}
module.exports = {
  isMAC48Address
};
