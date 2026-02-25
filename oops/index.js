// oop => object oriented programming (just a programming style)

// object - collection of properties and methods

// components of oop
     /*
      - object literals
      - constrtuctor function
      - prototypes
      - classes
      - instances (new,this)
     */


      const user = {
         name:"test",
         age:21,
         isLoggedIn:false,
         sayHello : function () {
            console.log(`hello ${this.name}`);
            // this => current context
            // console.log(this);
            
         }
      }

    //   console.log(user.name);
    //   console.log(user.sayHello());
    //   console.log(this);
      

    //   what if we want to make a user 2,3,4 and so on
    //    ----> constructor functions

    //   const promiseOne = new Promise()
    // new keyword = constructor function


    function User (username,age,isLoggedIn) {
           this.username = username
           this.age = age
           this.isLoggedIn = isLoggedIn
           this.sayHello = function () {
               console.log(`welcome ${this.username}`);
               
           }

1    }  


    const userOne = new User("raghav",21,true)
     const userTwo = new User("another user",25,false)
    console.log(userOne.sayHello());
    
    