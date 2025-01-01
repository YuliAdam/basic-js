const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  if(!options.hasOwnProperty("addition")){
    options.addition = '';
  }
  if(!options.hasOwnProperty( "additionSeparator")){
    options.additionSeparator = '|';
  }
  if(!options.hasOwnProperty( "separator")){
    options.separator = '+';
  }
  if(!options.hasOwnProperty( "repeatTimes")){
    options.repeatTimes = 1;
  }
  if(!options.hasOwnProperty( "additionRepeatTimes")){
    options.additionRepeatTimes = 1;
  }

  let partAddition = (''+ options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  if(options.additionRepeatTimes>0){
    partAddition = partAddition.substring(0,partAddition.length - options.additionSeparator.length);
  }
  let resultSt = ('' + str + partAddition +options.separator).repeat(options.repeatTimes);
  if(options.repeatTimes>0){ 
    resultSt = resultSt.substring(0,resultSt.length-options.separator.length); 
  }
  return resultSt;
}

module.exports = {
  repeater
};
