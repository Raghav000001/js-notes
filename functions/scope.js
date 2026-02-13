
// global scope
// block scope / local scope


const scoreGlobal = 70

function one() {
   const score = 50
   console.log(scoreGlobal);
   
//    console.log(score);
   
}

// can not be used outside the functiom
// console.log(score);



one()