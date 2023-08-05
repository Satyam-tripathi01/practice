/* 
*
* *
* * * 
* * * * 
*/

/* function pattern(m,n){
    let str=''
    for (let i = 0; i < m; i++) {
        for (let j = 0; j <= i ; j++) {
            str =str+ `*`+" "
            //console.log(str);
        }
        str = str + `\n`
    }
    console.log(str)
}
let m = 3
let n=5
pattern(m,n) */

//__________________________________________________________________

/*
     *
    **
   ***
  ****
 *****  
*/

/* 
function pattern(n){
    let string = "";
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = 0; j < n - i; j++) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i; k++) {
        string += "*";
      }
      string += "\n"; 
    }
    console.log(string);
}
let n = 5
pattern(n) 
*/

//_____________________________________________________________
/* 
* * * * * * 
* * * * *
* * * *
* * *
* *
*
*/

/* function pattern(n){
    let str=''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n-i ; j++) {
            str =str+ `*`+" "
            //console.log(str);
        }
        str = str + `\n`
    }
    console.log(str)
}

let n=5
pattern(n) */

//____________________________________________________________________
/* 
*****
*   *
*   *
*   *
*****
*/

/* function pattern(n){
    let str=''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <n ; j++) {
            //str =str+ `*`
            if(i===0 ||i=== n-1){
                str += `*`
            }else{
                if(j===0 || j=== n-1){
                    str += `*`
                }else{
                    str += ` `
                }
            }
        }
        str = str + `\n`
    }
    console.log(str)
}

let n=5
pattern(n) */

//_________________________________________________________________

/* 
*
**
* *
*  *
*   *
******

*/

/* function pattern(n){
    let str =''
    for( let i=0 ; i<=n ; i++){
        for(let j=0 ; j<i ; j++){
            //str += `*`
            if(i===0 || i===n){
                str += `*`
            }else{
                if(j==0 || j== i-1){
                    str += `*` 
                }else{
                    str += ` `
                } 
            }
        }
        str += `\n`
    }
    console.log(str)
}

//Driver Code 
let n= 5
pattern(n) */

//___________________________________________________________

/* 
    *
   ***
  *****
 *******
*********
*/

/* function pattern(){
    let str = ""
    for(let i =1; i<=n ; i++){  
        for( let j =1 ; j<=n-i ; j++){
            //space print
            str += ' '

        }
        for(let k=1 ; k<=2*i-1 ;k++){
            str += `*`
        }
        str += `\n`
    }
    console.log(str)
}
//Driver Code 
let n= 5
pattern(n) */

//_______________________________________________________________
/* 
*********
 *******
  *****
   ***
    *
*/


/* function pattern(){
    let str = ""
    
    for(let i =1; i<=n ; i++){  
        for( let j =1 ; j<=i ; j++){
            //space print
            str += ' '
        }
        for(let k=1 ; k<=2*(n-i)-1 ;k++){
            str += `*`
        }
        str += `\n`
    }
    console.log(str)
}
//Driver Code 
let n= 6
pattern(n)
 */


//____________________________________________________
/* 
     *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     *
*/

/* function pattern(){
    let str = ""
    for(let i =1; i<=n ; i++){  
        for( let j =1 ; j<=n-i ; j++){
            //space print
            str += ' '

        }
        for(let k=1 ; k<=2*i-1 ;k++){
            str += `*`
        }
        str += `\n`
    }
    for(let i =1; i<=n ; i++){  
        for( let j =1 ; j<=i ; j++){
            //space print
            str += ' '
        }
        for(let k=1 ; k<=2*(n-i)-1 ;k++){
            str += `*`
        }
        str += `\n`
    }
    console.log(str)
}
//Driver Code 
let n= 6
pattern(n) */

//___________________________________________________________

