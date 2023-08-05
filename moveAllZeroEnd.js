function MoveAllZeroEnd(arr,N){
    let B=[]
    let C=[]
    for( let i=0 ; i<N; i++){
        if(arr[i]==0){
            B.push(arr[i])
        }else{
            C.push(arr[i])
        }
    }
    let A=C.concat(B)
    console.log(...A)
}

let arr = [2,4,0,5,3,0,0,0,0,1,76,0,0]
N= arr.length
MoveAllZeroEnd(arr,N)
