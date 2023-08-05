

// JavaScript program to find three element
// from different three arrays such
// that a + b + c is equal to
// given sum

// Function to check if there is
// an element from each array such
// that sum of the three elements
// is equal to given sum.
function findTriplet(a1, a2, a3, n1,
					n2, n3, sum)
{
	for (var i = 0; i < n1; i++)
	for (var j = 0; j < n2; j++)
		for (var k = 0; k < n3; k++)
			if (a1[i] + a2[j] + a3[k] == sum)
			return true;

	return false;
}

// Driver Code
var a1 = [ 1 , 2 , 3 , 4 , 5 ];
var a2 = [ 2 , 3 , 6 , 1 , 2 ];
var a3 = [ 3 , 2 , 4 , 5 , 6 ];
var sum = 9;
var n1 = a1.length;
var n2 = a2.length;
var n3 = a3.length;
findTriplet(a1, a2, a3, n1, n2, n3, sum)?
			console.log("Yes") : console.log("No");



