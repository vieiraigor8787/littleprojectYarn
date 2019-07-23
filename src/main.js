const myPromessa = () => new Promise((resolve, reject) =>{
    setTimeout(() => { resolve('OK') }, 2000)
})

//com 'them':
// myPromessa()
//     .then(response =>{
//         console.log(response);
    // myPromessa()
    //     .then(response =>{
    //         console.log(response);
        // myPromessa()
        //     .then(response =>{
        //         console.log(response);
//     })
//     .catch(err => {{

//     }})

/*async function executaPromise(){
    console.log(await myPromessa())
    console.log(await myPromessa())
    console.log(await myPromessa())
}*/

// arrow Function
const executaPromise = async () => {
    console.log(await myPromessa())
    console.log(await myPromessa())
    console.log(await myPromessa())
}
executaPromise()