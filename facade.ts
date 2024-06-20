// The Façade design pattern falls under the structural design pattern category. Its main purpose is to provide a simplified interface to a complex subsystem.
//  The Facade class provides a simple interface to the complex logic of one or
//  several subsystems. The Facade delegates the client requests to the
//  appropriate objects within the subsystem. The Facade is also responsible for
//  managing their lifecycle. All of this shields the client from the undesired
//  complexity of the subsystem.

// Reference: https://medium.com/@alessandro.traversi/a-deep-dive-into-the-fa%C3%A7ade-design-pattern-with-typescript-84151a867bb7

// Define interfaces
interface LightSystem {
  turnOn(): void;
  turnOff(): void;
}

interface SecuritySystem {
  arm(): void;
  disarm(): void;
}

// Implement subsystems
class MyLightSystem implements LightSystem {
  turnOn() {
    console.log("Lights turned on");
  }

  turnOff() {
    console.log("Lights turned off");
  }
}

class MySecuritySystem implements SecuritySystem {
  arm() {
    console.log("Security system armed");
  }

  disarm() {
    console.log("Security system disarmed");
  }
}

class HomeAutomationFacade {
  constructor(
    private lightSystem: LightSystem,
    private securitySystem: SecuritySystem
  ) {}

  goodMorning() {
    // Turn on the lights and disarm the security system
    this.lightSystem.turnOn();
    this.securitySystem.disarm();
  }

  goodNight() {
    // Turn off the lights and arm the security system
    this.lightSystem.turnOff();
    this.securitySystem.arm();
  }
}

const myLightSystem = new MyLightSystem();
const mySecuritySystem = new MySecuritySystem();

const myHomeAutomation = new HomeAutomationFacade(
  myLightSystem,
  mySecuritySystem
);

myHomeAutomation.goodMorning(); // Outputs: Lights turned on; Security system disarmed
myHomeAutomation.goodNight(); // Outputs: Lights turned off; Security system armed
