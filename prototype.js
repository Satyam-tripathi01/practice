let User = {
  getFullName: function () {
    return this.firstName + " " + this.lastname;
  }
};

let student = {
  firstName: "Satyam",
  lastname: "Tripathi",
  
};

student.__proto__ = User;

console.log(student.getFullName());
