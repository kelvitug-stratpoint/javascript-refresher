// Promises

setTimeout(() => {
    console.log('kelvs');
}, 3000);


const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
    //    resolve(1); 
       reject(new Error('Hi there have some error'))
    }, 2000);
});

console.log(promise);

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error.message);
})


// Dealing with multiple promises

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});


const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});


Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error.message);
})