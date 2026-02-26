
   
    function createUserName (username,email) {
        this.username = username
        this.email = email
        console.log("this function is being called");
        
    }


    function createUser(username,email,pass){
        // this.username = username
        createUserName.apply(this,[username,email])

        this.email = email
        this.pass = pass
    }

   
     function createUser(username,email,pass){
        // this.username = username
        createUserName.call(this,username)
        this.email = email
        this.pass = pass
    }




    const user = new createUser("test","test@.com",1234)
    console.log(user);
    

