// References:
// https://birdeatsbug.com/blog/object-oriented-programming-in-typescript
// https://dev.to/kevin_odongo35/object-oriented-programming-with-typescript-574o

// ======================================================================
// Classes
// ======================================================================
// A class is a blueprint used to create an instance of an object. It is made up of variables (called instance variables) and methods.
// Every object instantiated from a class will have all the properties of the class that instantiated it.

class Car {
  model: string;
  year: number;
  price: string;

  drive() {
    console.log("The Car has Started driving");
  }

  stop() {
    console.log("The car has stopped");
  }
}

// ======================================================================
// Constructor Functions
// ======================================================================
// A constructor function is a class function responsible for initializing a class’s instance variables.
// Constructors in TypeScript are defined using the constructor keyword. The constructor function takes all class’s instance variables as parameters, initializes them, and assigns their values in its body.

class A {
  variable: string;

  constructor(variable: string) {
    this.variable = variable;
  }
}
const object = new A("value");

// ======================================================================
// Inheritance
// ======================================================================
// Inheritance in object-oriented programming refers to a mechanism where a class (subclass) inherits properties from an existing class (superclass).

// The subclass can also extend functionality by adding new properties or methods.

// For example, consider the class below as the superclass:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`What's for dinner?`);
  }

  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}

// The Chef class inherits all the properties present in the Person, like the name and age instance variables and the eat and speak methods.

class Chef extends Person {
  occupation: string;

  constructor(name: string, age: number, occupation: string) {
    super(name, age);
    this.occupation = occupation;
  }

  speak(): void {
    console.log(`I am a ${this.occupation}`);
  }

  cook() {
    console.log(`I am cooking`);
  }
}

// ======================================================================
//   Overriding and Extending Inherited Properties
// ======================================================================
class AA {
  print() {
    console.log("I am class A");
  }
}

class BB extends AA {
  print() {
    console.log("I am class B");
  }
}

// ======================================================================
// Polymorphism
// ======================================================================
// Polymorphism in object-oriented programming refers to a situation where multiple classes inherit from a parent and override a particular functionality, i.e. the ability of a method or property to exist in different forms.

// When you override inherited methods or properties, that's polymorphism. For e.g. the name property and the print method exist in different forms in each class.

class AP {
  name: string = "Class A";

  print() {
    console.log("I am class A");
  }
}

class BP extends A {
  name: string = "Class B";

  print() {
    console.log("I am class B");
  }
}

// ======================================================================
// Abstraction
// ======================================================================
// Abstraction is an important concept in Object Oriented Programming (OOP) as it allows us to hide away implementation details and expose only what is necessary to the user.
// Abstraction means hiding lower-level details and exposing only the essential and relevant details to the users.
// The concept behind abstraction is that we are hiding the complexity of the implementation from inherited classes and we allow them to implement the functionality themselves.
// In TypeScript, we can create abstract classes and abstract methods to achieve abstraction.
// Characteristics of Abstract Classes:
// Cannot Instantiate Directly: Abstract classes are not complete by themselves and hence, you cannot create an instance of an abstract class directly.
// Parent Class Role: They are primarily used as a base class from which other classes may inherit.
// Partial Implementation: Abstract classes can provide implementations for some of their methods.
// Deferred Method Signatures: Methods that don’t have an implementation in an abstract class but are expected to be implemented in derived classes are defined as abstract methods.
// Enforced Implementation: Abstract classes can force derived classes to implement specific methods, ensuring a consistent API.

abstract class DocumentParser {
    // A concrete method within the abstract class
    parseCommonMetadata(): void {
      // common parsing logic
    }

  // An abstract method that has to be implemented by subclasses
    abstract parseDocument(): void;
  }

  class PDFParser extends DocumentParser {
    parseDocument(): void {
      // PDF specific parsing logic
    }
  }
  class WordParser extends DocumentParser {
    parseDocument(): void {
      // Word document specific parsing logic
    }
  }

// ======================================================================
// Encapsulation
// ======================================================================
// Encapsulation in object-oriented programming refers to restricting unauthorized access and mutation of specific properties of an object.
// In TypeScript, access modifiers are used to achieve encapsulation.
// By default, all class properties in a class are public. This default behavior can be overridden by prefixing the properties with access modifiers.

// There are three primary access modifiers in TypeScript:

// public: This is the default visibility of every class property. A public property is accessible outside the class.
// private: A property prefixed with the private keyword can’t be accessed anywhere outside the class and cannot be inherited by a subclass.
// protected: The protected access modifier is very similar to the private access modifier with one key difference. Properties marked with the protected keyword are visible and can be inherited by a subclass.
// In addition to the main three, TypeScript has two more access modifiers:
// readonly: Properties prefixed with readonly can’t be modified; their values can only be read. Since read-only properties cannot be modified, they must be set at the class declaration or inside a constructor function.
// static: Properties or methods prefixed with static can only be accessed directly on the class and not on an object instantiated from the class. They also can’t be inherited. Note that static properties and methods can't reference the This keyword unless the referenced property is static.. For example
class AStatic {
  static index: number = 1;
}

AStatic.index; // 1

// ======================================================================
//   Initializing Instance Variables with Access Modifiers
// ======================================================================
//   TypeScript provides a shorthand method of initializing instance variables in the constructor. The shorthand method involves declaring the variable once as a parameter in the constructor and prefixing the instance variable with an access modifier.

  class AccessModifierExample {
    constructor(public variable: string){}
  }

  const accessModObj = new AccessModifierExample('value')
//   This method is ideal for classes with a few instance variables as it can quickly get messy and hard to read with multiple instance variables.

// ======================================================================
//   Setters & Getters
// ======================================================================
// Prefixing the properties with specific access modifiers prevents them from being accessed outside the class, which makes it impossible to read or set their values outside the class. This issue is solved using getters and setters, which allow you to read and write inaccessible properties outside the class by implementing accessible methods inside the class.
// -- A setter is a method inside a class that sets the value of an instance variable.
// -- A getter is a method inside a class that returns the value of an instance variable.

class ASG {
  private _variable: string;

  constructor(variable: string) {
    this._variable = variable;
  }

  get variable(): string {
    return this._variable;
  }

  set variable(value: string) {
    if (value === "") throw new Error("Variable cannot be an empty string");
    this._variable = value;
  }
}

const SGObject = new ASG("string");

//setting the variable
SGObject.variable = "different string";

//getting the variable
console.log(SGObject.variable);
