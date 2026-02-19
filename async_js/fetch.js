// fetch

//   fetch('https://jsonplaceholder.typicode.com/users')
//      .then((data)=> {
//        return data.json()
//      })
//      .then((res)=> {
//         console.log(res[0]?.company?.name);
//      })
//      .catch((err)=> {
//         console.log(err);
//      })
//      .finally(()=> {
//         console.log('fetch is either resolved or rejected');

//      })

//  async await
async function fetchUsers() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}



//  async function getJokesAndSendEmail() {
//      const jokes = await jokes()
//      const modification = await jokes.toLowerCase()
//      const sendMail = await sendMail(modification)
//  }



fetchUsers();
