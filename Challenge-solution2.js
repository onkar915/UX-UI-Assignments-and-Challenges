function squareSum(n){
    var sqN=n.map(num=>num*num);
    var addN=sqN.reduce((acc,curr)=> acc + curr);
    console.log(addN)
  };
