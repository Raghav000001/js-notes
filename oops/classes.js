// es-6

// class => collection of properties and methods

    class User {
        constructor (username,email,password) {
            this.username = username
            this.email = email
            this.password = password
        }

        message () {
            console.log(`hello ${this.username}`);   
        }

        changePassword() {
          return `${this.password.toUpperCase()}`
        }
    }

    const newUser = new User("raghav","raghav123@gmail.com","raghav")
    console.log(newUser);

     console.log(newUser.changePassword());
     console.log(newUser.message());
     
     
    