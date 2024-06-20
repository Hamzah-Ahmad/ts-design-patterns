//  The Template Method pattern is a design pattern that lets you define the skeleton of an algorithm in an operation, deferring some steps to subclasses.
//  For example, you want to make a pizza and you want to make it with tomato sauce and cheese, but the toppings can be different.

// References: 
// https://www.youtube.com/watch?v=ZpTbpu1cT_g&list=PLj24vWjOEwCV5uTOlxb61sLlkXH40qfHq&index=1
// https://dev.to/triyanox/design-patterns-in-typescript-e68

abstract class Pizza {
  public makePizza() {
    this.prepareDough();
    this.addTomatoSauce();
    this.addCheese();
    this.addToppings();
    this.bakePizza();
  }

  protected prepareDough() {
    console.log("Preparing dough");
  }

  protected addTomatoSauce() {
    console.log("Adding tomato sauce");
  }

  protected addCheese() {
    console.log("Adding cheese");
  }

  protected abstract addToppings(): void;

  protected bakePizza() {
    console.log("Baking pizza");
  }
}

class PepperoniPizza extends Pizza {
  protected addToppings() {
    console.log("Adding pepperoni");
  }
}

class VegetarianPizza extends Pizza {
  protected addToppings() {
    console.log("Adding vegetables");
  }
}

const pepperoniPizza = new PepperoniPizza();
pepperoniPizza.makePizza();

const vegetarianPizza = new VegetarianPizza();
vegetarianPizza.makePizza();
