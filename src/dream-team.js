const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)|| members.length===0) return false;

  let nameArr = members.filter(el => {return typeof(el)==='string'}).map(el=> el.trim()).sort();
  let teamName ='';
  for(let i =0;i<nameArr.length;i+=1){
    teamName+=nameArr[i].split('')[0].toLocaleUpperCase();
  }
  return teamName.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
