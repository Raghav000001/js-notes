
// lexical scoping in js => the scope of a variable is determined by its position in the source code. In JavaScript, functions create their own scope, and variables defined within a function are not accessible outside of that function. However, functions can access variables from their parent scopes, which is known as lexical scoping.

// exampe of lexical scoping:

function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing the variable from the outer scope
    }
    innerFunction();
}

outerFunction(); // Output: I am from the outer function


//  closure refers to the ability of a function to access variables from an enclosing scope, even after that scope has finished executing. This is a fundamental concept in JavaScript and is often used to create private variables and functions, as well as to implement data encapsulation.

// encapsulation is a programming principle that restricts access to certain components of an object and can prevent the accidental modification of data. In JavaScript, closures can be used to achieve encapsulation by creating private variables and functions that are not accessible from outside the enclosing function.

// Here's examples of a closure that demonstrates encapsulation:

function outerFunction() {
    let privateVariable = 10; // This variable is private to the outerFunction
  
    return function innerFunction() {
           privateVariable++  // Accessing the private variable
           return privateVariable;
    }
}
 const xyz = outerFunction();
 console.log(xyz()); // Output: 11
 console.log(xyz()); // Output: 12
 console.log(xyz()); // Output: 13


function createCounter() {
    let count = 0; // This variable is private to the createCounter function

    return {
        increment: function() {
            count++; // Accessing the private variable
            return count;
        },
        decrement: function() {
            count--; // Accessing the private variable
            return count;
        },
        getCount: function() {
            return count; // Accessing the private variable
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());   // Output: 1


// In this example, the `count` variable is private to the `createCounter` function. The returned object has methods that can access and modify `count`, but it cannot be accessed directly from outside the function. This is an example of encapsulation using closures, as it allows us to hide the internal state of the counter and only expose the necessary methods to interact with it.