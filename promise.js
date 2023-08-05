let sum=0

let promiseData =new Promise((resolve, reject) => {
    setTimeout(()=>{
        a=300;
        resolve('Done')
    },3000);
})

promiseData.then(()=>{
    b=80
    console.log(a+b)
})