

// pending
const my_promise = new Promise((resolve,reject)=> {
    // async task
    setTimeout(() => {
        const error = false
         if (!error) {
           console.log("async task is complete");
          resolve({name:"test name",email:"test@.com"})  
         } else {
            reject("error: something went wrong!!!")
         }
    },0);

})


// promise consume
my_promise
     .then((any_obj)=> {
     console.log(any_obj);  
     })
     .catch((err)=> { console.log(err)})
     .finally(()=> console.log("promise is either resolved or rejected"))


// promsie chaining
my_promise
 .then((obj)=> {
     return obj.name
  })
  .then((username)=> {
      console.log(username);
      
  })

  .catch((err)=>  {console.log(err)})

  const newPromise = new Promise((resolve,reject)=> {
      setTimeout(()=> {
       const error = false
      if (!error) {
         resolve({name:"raghav"})
      } else{
         reject('something went wrong')
      }

      },2000)

  })

   const consume = async ()=> {
       try {
       const data =  await newPromise
       console.log(data.name);
       
       } catch (error) {
          console.log(error);
       }
   }

   consume()