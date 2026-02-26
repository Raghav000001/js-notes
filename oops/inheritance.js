 class User {
        constructor (username,email,password) {
            this.username = username
            this.email = email
            this.password = password
        }

        message () {
            console.log(`hello ${this.username}`);   
        }

    static  changePassword() {
          return `${this.password.toUpperCase()}`
        }

    }



class Admin extends User {
     constructor(username,email,password,task) {
          super(username)
          this.email = email
          this.username = username
          this.password = password
          this.task = task
     }


}

  const admin = new Admin("admin","admin123@gmail.com","raghav","random task")
  console.log(admin.message());
  console.log(admin.changePassword());

// console.log(User.changePassword());

  

  
