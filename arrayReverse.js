

function ReverseArray(arr,N){
    let reverse=[]
    for(let i=N-1; i>=0 ;i--){
        reverse.push(arr[i])
    }
    console.log(`Reverse Array [${reverse}]`)
}
//Driver Code 
let arr = [4,6,8,3,9,6]
let N = arr.length
ReverseArray(arr,N)