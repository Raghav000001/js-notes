
let string = "    raghav   bhardwaj"
const string2 = 'raghav'
const string3 = `raghav`

 string = "sumit"
  
//  not allowed
//   string[3] = "g"

console.log(string.trim().length);
console.log(string[3]);

const firstName = "test"
const lastName = "last_name"
 
// not a good practice
// console.log(firstName+ " " + lastName);
// console.log(firstName.concat(" " ,lastName));

// best way to concat string
// string interpolation
 const fullName = `full name is: ${firstName} ${lastName}`
 console.log(fullName);
  console.log(fullName.split(" "));
   
console.log(firstName.charAt(2));
// console.log(firstName.indexOf("t",2));
console.log(firstName.includes("e"));
console.log(firstName.startsWith("t"));
console.log(firstName.endsWith("f"));


// slice , substring
const line = "js is very fast but js is single threaded"
console.log(line.replaceAll("js","c++"));

// end index = will not be counted
console.log(line.slice(-5));
// substring = no negative values
console.log(line.substring(0,5));

const userName = "RAGHAV".toLowerCase()
console.log(userName);











// todo = to remove spaces between letters