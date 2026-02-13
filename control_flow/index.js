// 1) What are Conditionals?
// Conditionals JS me decision lene ke liye use hote hain.
// Example -> Agar user age >= 18 ho to vote de sakta hai.


// 2) if / else-if / else
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B"); // This will run
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 3) Truthy and Falsy values
// Falsy values: false,-0 , 0-->number only, "", null, undefined, NaN

console.log(Boolean(""));   // false
console.log(Boolean("0"));  // true
console.log(Boolean("hi")); // true

const arr = []
if (arr.length<=0) {
  console.log("empty array");
}

const obj = {}
if (Object.keys(obj).length<=0) {
  console.log("empty object");
}



// 4) Comparison Operators
// ==  : Loose Compare (type conversion hota hai)
// === : Strict Compare (recommended)
// !=  : Loose inequality
// !== : Strict inequality

console.log(0 == "0");  // true
console.log(0 === "0"); // false


// 5) Logical Operators: &&, ||, !
console.log(true && false);   // "hello"
console.log(0 && "nope");       // 0
// Agar left value true/truthy ho to right value return karta hai
// Agar left value false/falsy ho to left value return karta hai


console.log(null || "fallback"); // "fallback"
console.log("name" || "xyz");    // "name"
// Pehle left dekhta hai
// Agar left truthy ho wahi return
// Agar left falsy ho right value return


console.log(!true); // false
// ye to simple hai humne kafi examples me dekha hai negative check karne k liye


// Default handling using ||
let username = "";
let finalName = username || "Guest";
console.log(finalName); // Guest


// 6) Ternary Operator (? :)
// Short form of simple if-else
let age = 17;
let allowed = age >= 18 ? "Allowed" : "Not Allowed";
console.log(allowed);


// 7) switch Statement
let day = 2;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday"); // runs
    break;
  default:
    console.log("Other Day");
}

// 8) Nested Conditionals
let user ={ isActive: true, isAdmin: false };
if (user) {
  if (user.isActive) {
    if (user.isAdmin) {
      console.log("Admin Logged In");
    } else { 
      console.log("Normal User Logged In");
    }
  }
}

// 9) Guard Clause (Best Practice)
function processUser(u) {
  if (!u) return console.log("User not found");
  if (!u.isActive) return console.log("Inactive user");
  console.log("Processing User...");
}

processUser({ isActive: true });

// 10) Optional Chaining (Modern JS)
// Safe access to nested properties

let student = {
  name: "Rahul",
  address: {
    city: "Delhi",
  },
};

console.log(student?.address?.city || "Unknown");


// 11) Real Examples
// Example 1: Age Checker (simple logic)
function checkAge(a) {
  if (a >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
}
checkAge(20);

// Example 2: Discount using ternary
let price = 1200;
let finalPrice = price > 1000 ? price * 0.9 : price;
console.log(finalPrice);

// Example 3: Role Based UI
let role = "trainer";
switch (role) {
  case "admin":
    console.log("Show Admin Panel");
    break;
  case "trainer":
    console.log("Show Trainer Panel");
    break;
  case "student":
    console.log("Show Student Dashboard");
    break;
  default:
    console.log("Guest View");
}

 
// 12) Practice Exercises

// A) Grade Calculator
function grade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "F";
}
console.log("Grade:", grade(82));

// B) Even or Odd
function isEven(n) {
  if (n % 2 === 0) return true;
  return false;
}
console.log(isEven(10)); // true

// C) Max of 3 numbers
function maxOfThree(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

console.log(maxOfThree(10, 40, 20)); // 40

// D) Login simulation
function login(role) {
  switch (role) {
    case "admin":
      console.log("Welcome Admin");
      break;
    case "user":
      console.log("Welcome User");
      break;
    default:
      console.log("Guest");
  }
}
login("admin");

