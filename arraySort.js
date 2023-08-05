

function short(arr,N){
    for(let i=0 ; i<N ;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }
    }
    console.log(`sorted Array ${arr}`) 
}


//Driver Code 
let arr = [9,8,7,6,5]
let N= arr.length
short(arr,N)



/* function short(arr ,N){
    for(let i=0;i<N;i++){
        for(let j=0; j<N; j++){
            if(arr[i]<arr[j]){
                let temp =arr[i]
                arr[i]=arr[j] 
                arr[j]=temp
            }
        }
    }
    console.log(arr)
}

//Driver
let arr=[7,3,87,54,9,2]
let N= arr.length */