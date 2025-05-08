// const fetchDta = ()=>{
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(()=>{
//                 resolve("Data fetched");
//             }, 3000);
//         }
//     );
// }

// fetchDta().then(data=>{
//     console.log(data);
// })
// .catch(error =>{
//     console.error("Error fetching data:", error);
// })

// console.log("Fetching data...");

// CREATING A PROMISE 

// const nuPromise = new Promise((resolve, reject) => {
//     let success = true; // Simulate success or failure

//     setTimeout(() => {
//         if (success) {
//             resolve("Promise resolved successfully!");
//         } else {
//             reject("Promise rejected.");
//         }
//     }, 2000); // Simulate async operation with a timeout
 
// });

// nuPromise.then((result) => {   
//     console.log("RESOLVED : " , result); // This will run if the promise is resolved
// })
// .catch((error) => {
//     console.error("REJECTED : " , error); // This will run if the promise is rejected
// })  

// console.log("Promise processing...")

const fetchMyData = () => {
    return new Promise((resolve, reject) => {
        let netWorking = true; // Simulate network status

        setTimeout(() => {
            if (netWorking) {
                resolve({username: "John Doe", age:30});
            } else {
                reject("Network error.");
            }   
        }, 1500); // Simulate async operation with a timeout
    });
}

fetchMyData()
.then((data)=>{
    console.log("User Data: ", data.username);
    console.log("User Data: ", data.age);
})
.catch((err)=>{
  console.error("Error: ", err);
})