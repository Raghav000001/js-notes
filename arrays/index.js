

//   normal basic array
 const array = [1,2,3,4,5]

//  mixed array
  const anotherArray = [1,"string",true,undefined,null,{},[]]

     console.log(array[1]);

     console.log(array.length);
     

     // things we will cover after loops
     //    map,filter,reduce

     // push,pop,shift,unshift,includes,indexof,join,flat,splice,slice,concat,reverse
     // spread operator

//    array.push(6,3,4,5)
//    console.log(array);
   
// array.pop()
// console.log(array);


// array.unshift("random string")
// console.log(array);

// array.shift()
// console.log(array);


// console.log(array.includes(3,2));
// console.log(array.indexOf(3));

console.log(array.join(","));

// how to reverse a string
const string = "hello"
// const convertedString = string.split("")
//  const reverseArray = convertedString.reverse()
// console.log(reverseArray.join());

   console.log(string.split("").reverse().join());
   


const nestedArray = [1,2,3,4, [1,2,3,4,[1,2,3,4]] ]
     console.log(nestedArray.flat(Infinity));
     

     // slice v/s splice
   
     // slice = 0 se start or 2 elements delete
     // console.log(array.splice(0,2));
     // console.log(array.splice(0,1,10));
     // console.log(array);

     
     console.log(array.slice(1,4));
     console.log(array);
     
     
     
     
   //  slice v/s splice
  const months = ["Jan", "March", "April", "June"];

//   splice = 2 chize => remove , add
   //  const deletedArray = months.splice(0,2)
   //  console.log(deletedArray);
   //  months.splice(0,1,"feb");
   //  console.log(months);
    


   const slicedArray = months.slice(0,3)
   console.log(slicedArray);
   console.log(months);
   
   
    

    
  

  

