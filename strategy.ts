// The Strategy Pattern is a design pattern that enables you to switch out algorithms or strategies without altering the code that uses them. Essentially, it involves defining a family of algorithms, encapsulating each one, and making them interchangeable. This brings flexibility and promotes cleaner, more decoupled code by segregating the behavior (algorithm/strategy) from the context (class) that uses it.

// Explanation Reference: https://blog.bitsrc.io/a-beautiful-design-pattern-strategy-pattern-62afe44886fc
// Code reference: https://refactoring.guru/design-patterns/strategy/typescript/example

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public runSortingFunction(): void {
    console.log(
      "Context: Sorting data using the strategy (Context object is not aware of the implementation details of the strategy)"
    );
    const result = this.strategy.runSortAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));
  }
}

/**
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The Context uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
interface Strategy {
  runSortAlgorithm(data: string[]): string[];
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class ConcreteStrategyA implements Strategy {
  public runSortAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ConcreteStrategyB implements Strategy {
  public runSortAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

const context = new Context(new ConcreteStrategyA());
console.log("Client: Strategy is set to normal sorting.");
context.runSortingFunction();

console.log("");

console.log("Client: Strategy is set to reverse sorting.");
context.setStrategy(new ConcreteStrategyB());
context.runSortingFunction();
