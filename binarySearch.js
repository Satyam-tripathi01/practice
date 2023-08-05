// itrerative Method

/* function BinarySearch (arr ,target){
    let low =0
    let high =arr.length -1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        //console.log(mid)/ 
        if(arr[mid]<target) low =mid+1;
        else if(arr[mid]>target) high= mid-1
        else return mid
    }
    return false;
}

let arr = [2,4,8,56,57,98,103]
let target=56
let result=BinarySearch(arr,target)

if(BinarySearch(arr,target)){
    console.log(`Found`)
    console.log(`target at index ${result} index Value ${arr[result]}`)

}else{
    console.log(`Target not Found`)
} */

//============================================
// Recursive Method

function BinarySearch(arr, target, start ,end ){
    if(start>end) return -1

    let mid = Math.floor(end+start)/2

    if(arr[mid]>target) return BinarySearch(arr, target,start,mid-1)
    else if( arr[mid] <target) return BinarySearch(arr ,target, mid+1,end);
    else return mid
    
    
}

let arr = [2,4,8,56,57,98,103]
let target=56
let start=0
let end =arr.length
let result=BinarySearch(arr,target,start,end)

if(BinarySearch(arr,target)){
    console.log(`Found`)
    console.log(`target at index ${result}
index Value ${arr[result]}`)

}else{
    console.log(`Target not Found`)
}
