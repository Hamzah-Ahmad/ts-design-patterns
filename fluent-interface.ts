// A fluent interface is a design pattern used in object-oriented programming to create a more readable and flowing interface for method chaining. It is characterized by the use of method chaining, where each method returns an object, usually the same object, allowing multiple method calls to be linked together in a single statement.

// References:
//  https://samuelkollat.hashnode.dev/beyond-basics-streamline-your-typescript-code-with-fluent-interface-design-pattern
//  https://www.youtube.com/watch?v=0dZnWUa5LDk&list=PLj24vWjOEwCV5uTOlxb61sLlkXH40qfHq&index=3

class Person {
  private firstName: string;
  private lastName: string;
  private age: number;

  setFirstName(firstName: string): Person {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): Person {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number): Person {
    this.age = age;
    return this;
  }

  getInfo(): string {
    return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
  }
}

const person = new Person().setFirstName("John").setLastName("Doe").setAge(30);

console.log(person.getInfo()); // Name: John Doe, Age: 30

// Another example

class QueryBuilder {
  query: string = "";

  select(col: string) {
    this.query += `SELECT ${col}`;
    return this;
  }

  where(col: string, comparison: string, col2: string) {
    this.query += ` WHERE ${col} ${comparison} ${col2};`;
    return this;
  }

  get() {
    return this.query;
  }
}

const qb = new QueryBuilder();
console.log(qb.select("id").where("id", "!=", "1").get());
