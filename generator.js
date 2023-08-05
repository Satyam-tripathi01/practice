function * SimpleGenerator(){
    console.log('Function Called ')
    yield 10;
    yield 'first step completed';
    yield 40;
    yield 60;
}

let SG = SimpleGenerator()
console.log(SG.next())
console.log(SG.next())
console.log(SG.next())
console.log(SG.next())
console.log(SG.next())