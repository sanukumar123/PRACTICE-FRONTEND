//Ek object banate h
const student = {
  fullName : "Sanu Kumar",
  marks: 93,
  printMarks : function() {
    console.log("Marks is :", this.marks);
  }
}

const employee = {
  calcTax() {
      console.log("Tax rate is 10%");
  },
}
const e1 = {
  salary : 5000,
  calcTax() {
    console.log("Tax rate is 20%");
  }
}

e1.__proto__ = employee;


class ToyotaCar {
  start() {
    console.log("start");
  }

  stop() {
    console.log("Stop");
  }
}

let fortuner = new ToyotaCar();