function User(){
    let a =10
    return function Student(){
        return function Teacher(){
            return a

        }
    }
}
let Student=User()
let Teacher=Student()
console.log(Teacher())
