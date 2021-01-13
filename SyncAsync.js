
// function FoodPreparing(mycallback){
//         console.log("----------Welcome------------")

// const { rejects } = require("assert")
// const { resolve } = require("path")

//         setTimeout(()=>{
//             console.log("Food is preparing")
//             mycallback("My Food is ready")
//         })

// }
// function DesertPreparing(mycallback){
//     setTimeout(()=>{
//         console.log("Desert is preparing")
//         mycallback("Desert is ready")
//     })

// }
// function DrinkIsBringing(mycallback){
//     setTimeout(()=>{
//         console.log("Drink is on the wat")
//         mycallback("Enjoy your drink")
//         console.log("-----------Bye Bye----------")

//     })

// }

// getFoodResponse = (responce) =>{
//     console.log(responce)
//     // DesertPreparing(getDesertResponce)
// }
// getDesertResponce = (responce) =>{
//     console.log(responce)
//     // DrinkIsBringing(getDrinkResponce)
// }
// getDrinkResponce = (responce) =>{
//     console.log(responce)
// }


// FoodPreparing( function(value){
//     console.log(value)
//     DesertPreparing(function(value){
//         console.log(value)
//         DrinkIsBringing(function(value){
//         console.log(value)
//         })
//     })
// })




// // FoodPreparing( getFoodResponse)

// using Promises
function FoodPreparing(){
   let promise = new Promise( (resolve,rejects)=>{
    setTimeout(()=>{
        console.log("------welcome")
        console.log("Food is preparing")
        resolve("Food is ready")
    })
   });

   return promise
}
function DesertPreparing(mycallback){
    let promise = new Promise( (resolve,rejects)=>{
        setTimeout(()=>{

            console.log("Desert is preparing")
            resolve("Desert is ready")
        })
       });
    
    return promise
}
function DrinkIsBringing(mycallback){
    let promise = new Promise( (resolve,rejects)=>{
        setTimeout(()=>{
            resolve("Enjoy your drink")

        })
    });
    
    return promise

}

// let FoodPromise = FoodPreparing()

// FoodPromise.then( (value) =>{
//     console.log(value)
//     let DesertPromise =  DesertPreparing()
//     DesertPromise.then( (value)=>{
//         console.log(value)
//         let DrinkPromise = DrinkIsBringing()
//         DrinkPromise.then( (value)=>{
//             console.log(value)
//             console.log("----Bye Bye---------")

//         })
//     }).catch( (err)=>{
//         console.log(err)
//     })

// }).catch( (err) =>{
//     console.log(err)
// })


// Calling all bye one funtion

async function startProcess( ) {
    try{
    let Food = await FoodPreparing();
    console.log(Food)

    let Desert = await DesertPreparing();
    console.log(Desert)

    let Drink = await DrinkIsBringing()
    console.log(Drink)
    console.log("----Bye Bye---------")

    }
    catch(err){
        console.log(err)
    }
}
startProcess()


// FoodPreparing( getFoodResponse)

