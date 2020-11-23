
function petalFall(v) {

  let distToGround = 5 * 80; 
  let time = 0;
  
  if(v > 0){
    time = distToGround / v;
  }
  
  return time;

}

function petalFall(v) {
  return v < 1 ? 0 : 400 / v;
}


const petalFall = v => v>0 ? 400 / v : 0 ;
