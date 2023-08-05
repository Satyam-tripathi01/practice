
// Javascript program for the above approach

// Function to find the missing elements
function printMissingElements(array, N)
{
	let arr= array.sort((a,b)=>(a-b))
	let cnt = 0;
	for (let i = arr[0]; i <= arr[N - 1]; i++) {
		
		// Check if number is equal to the first element in
		// given array if array element match skip it increment for next element
		if (arr[cnt] == i)
		{
		
			// Increment the count to check next element
			cnt++;
		}
		else
		{
		
			// Print missing number
			console.log(i);
		}
	}
}

// Driver Code

// Given array arr[]
let array = [ 16, 7, 10, 11, 13 ];
let N = array.length;

// Function Call
printMissingElements(array, N);






//====================================
/* function MissingValue(arr,N){
	//let shortedArray= arr.sort((a,b)=>(a-b));
	//console.log(shortedArray)
	let count=0
	for(let i=arr[0]; i<N;i++){
		if(arr[count]==i){
			count++
		}
		else{
			console.log(i)
		}
	}
}

let arr=[6,4,2,6,7,0]
let N= arr.length
MissingValue(arr,N) */