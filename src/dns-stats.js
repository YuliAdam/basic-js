const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let arrAllStr = domains.join('.').split('.');
  let setStr = new Set(arrAllStr);
  let numArr = [];
  for(const i of setStr.keys()){
    numArr.push(arrAllStr.filter(el=> el===i).length);
  }
  let reverseProperty = domains.map(el=> {
    return '.'+ el.split('.').reverse().join('.')}
  );
  reverseProperty.push(...new Set(reverseProperty.map(el=>'.'+ el.split('.')[1])));
  reverseProperty = reverseProperty.sort();
  let obj = {};
  let num = 0;
  for(let i=0;i<reverseProperty.length;i+=1){
   let arr = reverseProperty[i].split('.');
    let index = Array.from(setStr).indexOf(arr[arr.length-1]);
    obj[reverseProperty[i]] = numArr[index];
  }
  return obj;
}

module.exports = {
  getDNSStats
};
