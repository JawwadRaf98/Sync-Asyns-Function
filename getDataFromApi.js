async function getData(){
  try{
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await responce.json()
    console.log('Get Data ===>> ',data)
  }
  catch(err){
    console.log(err)
  }
}

async function postData(){

  try{

      const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method : 'POST',
        body : JSON.stringify({
          title : 'dummy data',
          body : 'abc',
          userId : 1
        }),
        headers : {
          'Content-type' : 'application/json; charset = UTF-8'
        }
      })

      const data = await response.json()
      console.log('Post Data ===>> ',data)
  }
  catch(err){
    console.log(err)
  }
}

// async function getDatByOwn(){
//   try{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then( (response) =>  response.json())
//     .then( (json) => console.log(json))
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// getDatByOwn()

// async function postData(){
//   try{
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// async function postDataByOwn(){
//   try{
//     const response  = await fetch("https://jsonplaceholder.typicode.com/posts",
//     {
//       method : 'POST',
//       body : JSON.stringify({
//         title : "jawwad",
//         body : "Foo",
//         userId : 1
//       }),
//       headers : {
//         'Content-type' : 'application/json; charser=UTF-8' 
//       }
//     })

//     console.log("This is response ====>>>", response)
//     const data = await response.json()

//     console.log("This is data====>", data)
//   }
//   catch(err){
//     console.log(err)
//   }
//   try{
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   }
//   catch(err){
//     console.log(err)
//   }
// // }
//   fetch('https://jsonplaceholder.typicode.com/posts',{
//     method : 'POST',
//     body : JSON.stringify({
//       title :  "jawwad",
//       body : 'dummy content',
//       userId  : 123
//     }),
//     headers :  {
//       'Contnet-type': 'application/json; charset = UTF-8',
//     },
//   })
//   .then( (response) => response.json())
//   .then( (json) => console.log(json))
// }
// getData()
// postData()
// postDataByOwn()
getData()
postData()