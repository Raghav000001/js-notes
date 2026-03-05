
 
    function outerFunction () {
        let privateVariable =10;
        
        return {
           increase : ()=> {
               privateVariable++
               return privateVariable
           },
           decrease: ()=> {
             privateVariable--
             return privateVariable
           }
        }
    }

    const result = outerFunction()
    console.log(result.increase());
    console.log(result.increase());
    
    // console.log(result.decrease());

    const result2 = outerFunction()
    console.log(result2.increase());
    console.log(result2.increase());    
    
    

    