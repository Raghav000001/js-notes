
   const arrayOne = [1,2,3,4,5]
   const arrayTwo = [6,7,8,9,10]

//   const fullArray = arrayOne.concat(arrayTwo)
//   console.log(fullArray);


//   const fullArray = [arrayOne,arrayTwo].flat(Infinity)

const fullArray = [...arrayOne,...arrayTwo]
//   console.log(fullArray);
  

// create a function to calculate cart price
function calculatePrice(...values){
   return values
}


console.log(calculatePrice(100,20,30,40,50,500,100));




 
  