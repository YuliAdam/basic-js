const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let setNames = Array.from(new Set(names));
  let countNames = Array.from({length: setNames.length}).fill(-1);
  names = names.map((el)=>{
    let i = setNames.indexOf(el);
    countNames[i]+=1;
    if(countNames[i]>0){
      return el+'('+countNames[i]+')';
    }
    return el;
  })
  return names.map(el=>{
    if(names.indexOf(el)!==names.lastIndexOf(el)){
      names[names.lastIndexOf(el)]  = names[names.lastIndexOf(el)]+'(1)';
    }
    return el;
  })
}

module.exports = {
  renameFiles
};
