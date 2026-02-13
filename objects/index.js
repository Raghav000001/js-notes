
  const person = {
      name:"random",
      email:"braghav123@.com",
      age:21,
      isLoggedIn:false,
      loginActivity:["monday","friday"]
  } 


//  const name = person.name
//  console.log(name);
//   const age = person.age
//      console.log(age);


//   person.phone = "3234324"
//    delete person.email

    // Object.freeze(person)
    
//    delete person.name 

//   console.log(Object.isFrozen(person));
  

//   console.log(person);


//   console.log(Object.keys(person));
//   console.log(Object.values(person));
//   console.log(Object.entries(person));
  

// some request to backend
// backend will give us data in JSON format = array of objects

    const persons = [
        {
            name:"sumit",
            age:21,
            location:"kalanoor"
        },
        {
            name:"raghav",
            age:21,
            location:"rohtak"
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]
   

//   console.log(persons[0].location);
      

//   this , destructuring
  
   const  {name:username , email}  =  person
   console.log(username,email);
   


   const anotherObject = {
       name:"test",
       score:30,
       address:{
           state:"haryana",
           city:"rohtak",
           pincode:124001
       }
   }


   anotherObject.message = function(){
       console.log(`welcome: ${this.name}`);

   }

   console.log(anotherObject.address.city);
   
