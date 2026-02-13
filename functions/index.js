

//    how to define a function
   function message() {
       console.log("hello world");
   }


//  another way to define a function = fat arrow function
const message2 = ()=> {
     console.log("hello from arrow function");
}




//    sirf refrence pass
   message
// to execute a function
   message()   
   message2()

//    const number = 10
//    console.log(number);
   
// parameters aceept
  function calculateCartPrice (value1,value2) {
     console.log("hello inside function");
     
     return value1+value2

    //   after return the code will not be executed
    //  console.log("hello inside function");
}


// arguments pass
 const totalPrice =  calculateCartPrice(10,20)
 console.log(totalPrice);


const numbers = [1,2,3,4,5]
function handleArray(arr){
   return arr[3]
}

const result =  handleArray(numbers)
console.log(result);

 
 const person = {
    name:"raghav",
    age:21
 }

 function handleObject(anyObject) {
     return  anyObject.name
 }

 const resultWithObj =  handleObject(person)
 console.log(resultWithObj);
 
//  iffe = Immediately Invoked Function Expression
(function sayHello(){
    console.log("HELLO FROM IFFE");
})()