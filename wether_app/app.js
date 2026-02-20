
  async function fetchWether () {
      const city = document.getElementById("input").value
      const apiKey = "5f56d525d1619d0a2cd2eac4ce55588e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     
       try {
          const data = await fetch(url)
          const json = await data.json()
          console.log(json);

           if (json.cod === "404") {
             alert("city not found")
             return 
           }

          document.getElementById("wether-info").innerHTML = `
           <h1> ${json.name} </h1>
            <p> temperature is : ${json.main.temp} </p>          
          `
          
       } catch (error) {
         console.log(error);
         
       }

      
  }