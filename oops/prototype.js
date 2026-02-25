
        let name = 'test           '
        // console.log(name.length);

        String.prototype.trueLength = function () {
             return `${this.trim().length}`
        }
         
       console.log(name.trueLength());


       let anotherName = "                amitabh   "
       console.log(anotherName.trueLength());
       


       const obj = {
          name:"raghav        ",
          age:21
       }

     const anotherArr = ["raghav   "]
     console.log(anotherArr[0].trueLength());
     

    console.log(obj.name.trueLength());
       


    Object.prototype.realTrueLength = function () {
         return this.trim().length
    }

    let myName = "nigga"
    console.log("nigga's true length is", myName.realTrueLength());
    