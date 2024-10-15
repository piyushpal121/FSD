// function sum(a,b){
//     return a+b;
// }
// console.log(sum(4,4));

// IIFFE
// Anonymus function
(function () {
//   console.log("display Name !");
})();

// Arrow Function
() => {
//   console.log("ArrowFunction");
};

// Another method
let a = new Function(`console.log("Constructor Function")`);
// a();

// Async Behaviour

// function sum(a,b){
//     return "HEllo";
// }
// setTimeout(sum, 2000);

function rollNumber(x,delay,nextRoll) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Roll Number Is ", x);
            resolve('Successfully done')
          }, delay);
        });
    }
rollNumber(1, 1000).then(()=>{
    rollNumber(2, 2000).then(() => {
        rollNumber(3, 3000);
    });
});
    

// ______Promise________
// const promise = new Promise((resolve, reject) => {
//     console.log(("first"));
//     resolve("Promise resolved");
//     reject("Promise rejected");
// });
// promise.then(() => {
//     console.log("This is my promsie");
// }).catch(()=>{
//     console.log("This is error page");
// })

let promise = function getPromise(){
    return new Promise((resolve, reject) => {
        resolve("promise resolved from function!")
    });
}