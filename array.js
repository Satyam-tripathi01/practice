//===================================================
// Element insert in Array
//-----------------------------
/*let data =new Array(4,5,2,3,7,6,9,1)
let newElement = 50;
let position =4 

for(let i = data.length-1 ; i>=0; i--){
    //console.log(data[i])
    if(i>=position){
        data[i+1]=data[i];
        if(i==position){
            data[i]=newElement
        }
    }
}
console.log(data) */

//by using inbuilt function
//------------------------------------------------
/* let data= [1,5,3,6,7,3,9]
data.splice(5,0,55)
console.log(data) */

//=================================================
// Delete Element by Array
/* 
let arr = new Array(1,3,21,6,34,76,54)
let position =3
for(let i=position; i<arr.length-1; i++){
    //console.log(arr[i])
    arr[i]=arr[i+1]
}
arr.length=arr.length-1
console.log(arr)
 */
//======================================================
/* let data = [23,76,54,83,74,63,36]
let value =83
let index=undefined

for(i=0; i<data.length; i++){
    //console.log(data[i])
    if(data[i]==value){
        index=i
    }
}
console.log(index) */

//by inbuilt funtion index find
//console.log(data.indexOf(83))

//======================================================
//Merge 2 ARRAY
//-----------------







//======================================================
