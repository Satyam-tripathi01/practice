function GetLargestElementByForEach(arr) {
    let gretest = 0
    arr.forEach(element => {
        if (element > gretest) {
            gretest = element;

        }
    });
    return gretest
}

function GetLargestElementByNormalLoop(arr) {
    let gretest = 0
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > gretest) {
            gretest = arr[i];

        }
    };
    return gretest
}

//arr=[2,4,10,15,42,42.5,3,5]

//arrZero = [2,0,5,6,0,4,0,8,0,0,0,9,0,7,0]
//console.log(`Greatest Value ${GetLargestElementByForIn(arr)}`)

function GetLargestElementByForIn(arr) {
    let gretest = 0
    for (const index in arr) {
        if (arr[index] > gretest) {
            gretest = arr[index]

        }
    }
    return gretest
}

//create funtion to short a array (it will return a shorted array)
//(if input is not an array through an error bby funtion)

//find number of zero in array 

// shift all zeros at end of array 
//shift all zeros at starting of aaray 
//replace all zeros by one

//crate a funtion whitch takes two array as input and return sum of thies array ex a1[i] + a2[i] = a3[i]
function sortedArray(array) {
    console.log(`Array to be sort ${array}`)
    //Go through the elements behind it.
    //value comparison using ascending order.
    //swap
    for(let i = 1; i < array.length;i++){
        for(let j = i - 1; j > -1; j--){
            if(array[j + 1] < array[j]){
                [array[j+1],array[j]] = [array[j],array[j + 1]];

            }
        }
    };
    return array
}

//let arr = [3, 5, 7, 8, 9, 6, 1]
//console.log(`shorted Array ${sortedArray(arr)}`)

function FindTotalNumberOfZeroInArray(arr) {
    let count =0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            count= count+1
        }
    }
    return count
}


function ReplaceAllZeroByOne(arr){
    for(let i =0 ; i<arr.length;i++)
        if(arr[i]===0){
            arr[i]=1
        }
    return arr
}


function ShiftAllZeroAtTheEndOfArray(){
      

}
//arr = [6,0,4,7,4,0,1,3,0,0,0,2,1,0]
//console.log(`total zero in array ${ReplaceAllZeroByOne(arr)}`)

function computeSum(arr){
    if(arr.length === 1){
      return arr[0];
    }
    else{
      return arr.pop() + computeSum(arr);
    }
}
  arr =[7,2,5,5]
  console.log(computeSum(arr));


