// A promise is a Javascript object that represents the 
// eventual completion (or failure) of an asynchronous operation and its resulting value.
// JavaScript by default is single-threaded, meaning it can only do one thing at a time.

// A simple synchronous code

function mkGreeting(usrname){
   return `Hello ${usrname}`;
}

const user_name = "John Doe";
// const age = 30;

const greeting = mkGreeting(user_name);
console.log(greeting);

// A case for asynchronous code
const MAX_PRIME = 1000000;
function isPRime(n){
    for(let i=2;i<= Math.sqrt(n);i++){
        if(n % i === 0){
            return false;
        }
    }
    return n > 1;
}

const random = (max)=>Math.floor(Math.random() * max);

function generatePrims(quota){
    const primes = [];
    while (primes.length < quota){
        const n = random(MAX_PRIME);
        if(isPRime(n)){
            primes.push(n);
        }
    }
  
    return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {

    const prims = generatePrims(quota.value);
    output.textContent = `Finished generating ${quota.value} primes`;
});

document.querySelector("#reload").addEventListener("click", () => {
   document.location.reload();

})