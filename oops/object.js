

function sum (a,b) {
      return a+b
   }

   sum.age = "2 mn's"

  console.log(sum(10,20));
  console.log(sum.age);
  console.log(sum.prototype);
  
  
  function createUser (username,age) {
     this.username= username
     this.age = age
  }

  createUser.prototype.increaseAge = function () {
      this.age++
      return this.age
  }

  createUser.prototype.printMe = function () {
      console.log(`hello ${this.username}`);
      
  }


  const userOne = new createUser("raghav",21) 
  const userTwo = new createUser("another user",30)
  console.log(userOne);
  console.log( userOne.increaseAge());
  userOne.printMe()
  
  

  

  
