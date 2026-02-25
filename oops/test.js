// java script  => 

      function add (a,b) {
        return a+b
      }

      add.score = "raghav"

     function createUser (username,age) {
         this.username = username
         this.age = age
     }         
 
    createUser.prototype.increaseAge = function () {
        this.age++
        return this.age
    }

    createUser.prototype.greet = function () {
        console.log(`welcome ${this.username}`);
        
    }

    const userOne = new createUser("test",30)
    console.log(userOne.greet());
    

 
    // console.log(add(20,30));
    // console.log(add.score);
    // console.log(add.prototype);
    


    let username = "test              "
   
    Object.prototype.realLength = function () {
         return `${this.trim().length}`
    }
    

    const obj ={
        username:"raghav     "
    }

    console.log(obj.username.realLength());
    

  let anotherName = "another    "
  console.log(username.realLength());
       
    