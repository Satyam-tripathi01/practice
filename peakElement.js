
function PeakElement(arr,N){
    let peakElement=0;
    for( let i = 0; i<N ; i++){
        if( arr[i]>arr[i+1]){
            console.log(`This Element not Smaller than Neighbour Element = ${arr[i]}`)
            if(arr[i]>peakElement){
                peakElement=arr[i]
            }
        }
    }
    console.log(`Array  Peak Element ${peakElement}`)
}


// Driver Code
let arr = [12,34,13,37,6,37,1,-67]
let N= arr.length
PeakElement(arr,N)