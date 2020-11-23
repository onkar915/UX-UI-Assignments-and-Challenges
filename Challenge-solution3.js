
let name='ONKArrrr'
let big=name.split('').filter(n => n===n.toUpperCase()).length;
console.log(big);
let small=name.length-big;
console.log(small);
console.log((big>small)?name.toUpperCase():name.toLowerCase());
