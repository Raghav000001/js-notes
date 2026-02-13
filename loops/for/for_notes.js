const array = [1,2,3,4,5,6,7,8,9,10]

// basic for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == 7) {
        console.log("thala for a reason");
    }
     console.log(element);
}

//   nested for loop
for (let i = 0; i <= 10; i++) {
     console.log(`value of i:${i}`);
        for (let j = 0; j <= 10; j++) {
            console.log(`value of j:${j}`);
        } 
}

// break and continue
for (let index = 0; index <= 20; index++) {
    if (index == 7) {
        console.log("7 is detected");
        break;     
    }
     console.log(index);
}


for (let index = 0; index <= 20; index++) {
    if (index == 7) {
        console.log("7 is detected");
        continue;    
    }
     console.log(index);
}


