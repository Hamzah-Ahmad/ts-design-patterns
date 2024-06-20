// Observer is a behavioral design pattern that allows some objects to notify other objects about changes in their state.
// The Observer pattern provides a way to subscribe and unsubscribe to and from these events for any object that implements a subscriber interface.

//  The Subject (may also be known as Observable) owns some important state and notifies observers when the state changes.
// Observers react to the updates issued by the Subject they had been attached to.

// References:
// https://refactoring.guru/design-patterns/observer/typescript/example
// https://www.youtube.com/watch?v=GioexP_s5Yc

interface ISubject {
  registerObserver(o: IObserver): void;
  removeObserver(o: IObserver): void;
  notifyObservers(): void;
}

interface IObserver {
  update(temperature: number): void;
}

class WeatherStation implements ISubject {
  private observers: IObserver[] = [];
  private temperature: number;

  registerObserver(o: IObserver) {
    this.observers.push(o);
  }

  removeObserver(o: IObserver) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number) {
    console.log("WeatherStation: new temperature measurement: " + temp);
    this.temperature = temp;
    this.notifyObservers();
  }
}

class TemperatureDisplay implements IObserver {
  update(temperature: number) {
    console.log(
      `TemperatureDisplay: Temperature updated to ${temperature} I need to update my display`
    );
  }
}

class Fan implements IObserver {
  update(temperature: number) {
    if (temperature > 25) {
      console.log("Fan: Its hot here, turning myself on...");
    } else {
      console.log("Fan: Its nice and cool, turning myself off...");
    }
  }
}

// Instantiating the Subject
let weatherStation = new WeatherStation();

// Instantiating observers
let tempDisplay = new TemperatureDisplay();
let fan = new Fan();

// Subject registering Observers
weatherStation.registerObserver(tempDisplay);
weatherStation.registerObserver(fan);

//Notifying observers of event.
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);




///////////////////////////////////////////////Notes///////////////////////////////////////////////////////////////////////

// Note: A common thing seen in many examples is to take in the subject itself as the argument rather than a value. For e.eg

//  update(subject: Subject): void {
// console.log(`${this.name}, the product you want is back in stock.`);
//  }

// The notifyObservors would change like so:
// notifyObservers(): void {
//     for (let observer of this.observers) {
//         observer.update(this);
//     }
// }




// Note: One other way to attach observors is to delegate this task to the observor,as done in the constructor below.

// constructor(weatherStation: ISubject) {
//     this.subject = weatherStation;
//     weatherStation.registerObserver(this);
// }

//if we had used the constructor commented out in the observors, then the instantiation of observors would change to:
// let tempDisplay = new TemperatureDisplay(weatherStation);
// And the line weatherStation.registerObserver(tempDisplay); would not be needed.
// Same for the fan observor.
// The method being used in the code above was found more used, and seems more it seems more intuitive to allow the Subject to register observers.
