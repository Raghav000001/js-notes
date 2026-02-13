// reduce() ka kaam hota hai array ke saare elements ko combine karke ek single value banana. matlab “Ek array se ek nateeja nikalna.”

// simple syntax
const array = [1, 2, 3, 4, 5];
const reduce = array.reduce((accumulator, currentValue)=>accumulator*currentValue)
// console.log(reduce);


// simple example
const cartPrice = [10, 20, 30];
const sum = cartPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum); 


// calculate movie rating
const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "Interstellar", rating: 8.6 },
  { title: "Dunkirk", rating: 7.9 },
];

let initialAccValue=0;
// const avgRating =movies.reduce(function (acc,movie){
//     console.log(acc);
//     console.log(movie);
//     return acc+movie.rating/movies.length
// },initialAccValue)

const avgRating = movies.reduce((acc,curr)=> acc+curr.rating/movies.length,initialAccValue) 
console.log(avgRating);
