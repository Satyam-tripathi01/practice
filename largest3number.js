function largestValue(arr,N){
    sortedValue = arr.sort((a,b)=>(a-b))
    sortedValue.reverse()
    for(let i=0;i<N;i++)
    {
        console.log(sortedValue[i])
    }
}

let arr =[6,2,3,5,55,8,6]
let N = 4
largestValue(arr,N)
