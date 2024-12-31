const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  if(str.length<2) return str;
  let encodeLine = '';
  let num = 1;
  for(let i=0;i<str.length-1;i+=1){
    if(str[i]===str[i+1]){
      num+=1;
      if(i===str.length-2){
        encodeLine=encodeLine+num+str[i];
      }
    }else{
      if(num!==1){
        encodeLine=encodeLine+num+str[i];
      }else{
        encodeLine+=str[i];
      }
      num=1;
      if(i===str.length-2){
        encodeLine=encodeLine+str[i+1];
      }
    }
  }
  return encodeLine;
}

module.exports = {
  encodeLine
};
