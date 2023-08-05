//Stack Program

let stack=[];
let currentSize=stack.length;
let max=4;

function push(newVal){
    if(currentSize>=max){
        console.log(`Stak is full! you can not add ${newVal}`)
    }
    stack[currentSize]=newVal;
    currentSize++
}

//console.log(stack)

push(45);
push(52);
push(85);
push(23)
push(78)
push(67)
console.log(stack)