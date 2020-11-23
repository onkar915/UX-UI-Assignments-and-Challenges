function lifePathNumber(dateOfBirth) {
  return [...dateOfBirth.split('-')].map(v=>v.split('').reduce((a,b)=>a+b*1,0))
 .map(v=>v.toString().split('').reduce((a,b)=>a+b*1,0)).reduce((a,b)=>a+b*1,0).toString().split('').reduce((a,b)=>a+b*1,0)
 .toString().split('').reduce((a,b)=>a+b*1,0)
}


function lifePathNumber(dateOfBirth) {
  return dateOfBirth.split('-').join('') % 9 || 9;
}
