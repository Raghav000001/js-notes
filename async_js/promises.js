// A Promise in JavaScript acts as a placeholder for a value that may be available now, in the future, or never. It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// When a promise is created, its prototype will be of type Promise, and its initial status is "pending", with the result being undefined. A promise can be in one of the following states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise now has a value.
// Rejected: The operation failed, and the promise has a reason for the failure.

// Promises have two main components:

// Status: Indicates the state of the promise (pending, fulfilled, or rejected).
// Result: The value associated with a fulfilled promise or the reason for a rejected promise.

// Handling Promises
// Promises provide methods to handle the outcome of the asynchronous operation:

// .then(): Used to handle the fulfilled state and obtain the resolved value.
// .catch(): Used to handle the rejected state and catch any errors that occurred during the execution.
// .finally(): This method executes a callback when the promise is settled, meaning it will run whether the promise is fulfilled or rejected.



const promiseOne = new Promise((resolve,reject)=> {
    // do an async task= db calls etc.. 
    setTimeout(() => {
        console.log("async task is completed");
        resolve()
    }, 1000);

})

promiseOne
     .then(()=> {
        console.log("promise consumed");
     })


// also a valid syntax  
//    new Promise((resolve,reject)=>{
//    }).then().catch()  


const promiseThree = new Promise(function(resolve,reject){

     setTimeout(() => {
        console.log("async task is completed");
        resolve({username:"test user",age:21}) 
     }, 1000);

})

promiseThree
     .then((user)=> {
        console.log(user);
     })

const promiseFour = new Promise((resolve,reject)=> {
    
        setTimeout(() => {
          const err = false
          if (!err) {
             resolve({username:"test user",age:21})
          } else{
             reject("ERROR: something went wrong!!!")
          }
        }, 1000);
})     

promiseFour
.then((user)=> {
 console.log(user);
 return user.username;
})
.then((username)=> {
    console.log(username);
})
.catch((error)=> {
    console.log(error);
}).finally(()=> {
      console.log("promise is either resolved or rejected");
})



const promiseFive = new Promise((resolve,reject)=> {

     setTimeout(() => {
        const err = false
        if (!err) {
            resolve({username:"test user promise 5",age:21})
        } else {
            reject("ERROR: something went wrong!!!")
        }
     }, 1000);

})

async function consumePromiseFive() {
      try {
         const result = await promiseFive;
         console.log(result);
      } catch (error) {
         console.log(error);
      }
}

consumePromiseFive()