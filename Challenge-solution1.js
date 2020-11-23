function lifePathNumber(dateOfBirth) {
  
  let num = dateOfBirth.split('-').join('');
    let sum = 0;
    
    for (let i = 0; i < num.length; i++) {
        sum += +num[i];
     }
    if (String(sum).length > 1) {
        num = String(sum);
        return lifePathNumber(num);
    }
    return sum;
  //return lifenum;
}



----------------------------------------------------------------------------------------------
function lifePathNumber(dateOfBirth) {
  return dateOfBirth.split('-').join('') % 9 || 9;
}
