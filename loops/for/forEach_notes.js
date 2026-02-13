// syntax
const array = [1,2,3,4,5,6,7,8,9,10]

array.forEach(function (element, index, array) {
     
})

// | Parameter | Meaning => 

// | `element` | current value (array ka current element)          |
// | `index`   | current element ka index
// whole --> array  |

// basic example
const fruits = ["apple", "banana", "mango"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});


// with arrow funtion
const colors = ["red", "green", "blue"];
colors.forEach((color) => {
    // console.log(color);
});


// with index
const students = ["mayank","sunny","raghav"]

students.forEach((student,index)=>{
    console.log(`${index+1} ${student}`);    
} 
)

// with return => for each kuch return nahi karta
const numbers = [1, 2, 3];
const result = numbers.forEach(num => num * 2);
console.log(result); //  undefined


// solution
// real life example -> e-commerce discount
const prices= [100,200,300,400,500]
const discountedPrices = []
const discount = 0.9

prices.forEach(function(price) {
        discountedPrices.push(price * discount)
})
console.log(prices);
console.log(discountedPrices);


// calculate cart price example
const cart = [100,200,300,400,500]
let sum = 0
 cart.forEach(function(item){
        sum = sum + item    
 })
 console.log(sum);
 