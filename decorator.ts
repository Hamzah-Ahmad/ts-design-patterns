// The decorator design pattern is a structural pattern that allows a user to add new functionality to an exiswting object without altering its structure
// Reference: https://www.youtube.com/watch?v=WPOLDEk1LF0&list=PLzvRQMJ9HDiSk1pnrKewLklYfCdu9Qjhy&index=2

class Car {
  drive() {
    return "Driving";
  }
  reverse() {
    return "Reversing";
  }
}

class Toyota extends Car {
  car: Car;

  constructor(car: Car) {
    super();
    this.car = car;
  }

  reverse() {
    return "Reversing with a backup camera";
  }
}

const car = new Car();
console.log(car.drive());

const toyotaCar = new Toyota(new Car());

console.log(toyotaCar.reverse());
