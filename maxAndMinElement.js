
function MaxElement(arr, N){
    let Max =undefined; 
    let Min =undefined;
    for( let i=0; i<N ; i++){
        Max=arr[0]
        if(Max<arr[i]){
            Max = arr[i]
        }
        Min = arr[0]
        if(Min>arr[i]){
            Min= arr[i]
        }
    }
    console.log(`Max ${Max}`);
    console.log(`Min ${Min}`)
}

function MinElement(arr , N){

}

//Driver Code
let arr = [-3,-5,-78,9,65]
let N=arr.length
MaxElement(arr,N)