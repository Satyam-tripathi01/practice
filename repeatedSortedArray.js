


function RepeatedElementsSortedArray(arr,N){
    for(let i=0 ;i<N; i++){
        for(let j=i+1; j<N; j++){
            if(arr[i]==arr[j]){
                console.log(`Reapeated Element ${arr[i]}`)
            }
        }
    }
    //console.log(`Reapeated Element ${arr[i]}`)

}
let arr=[1,1,2,3,4,4,5,6,6]
let N= arr.length

RepeatedElementsSortedArray(arr,N)