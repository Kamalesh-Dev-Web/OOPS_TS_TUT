console.log("hELLO WORLD");

// Basic class

class Car {
  public model: string;
  public color: string;
  public isElectric: boolean;

  constructor(model: string, color: string, isElectric: boolean) {
    this.model = model;
    this.color = color;
    this.isElectric = isElectric;
  }

  public drive(): void {
    const engineIsStarted: boolean = this.startEngine();
  }

  private startEngine(): boolean {
    return true;
  }
}

// ABSTRACT
abstract class Character {
  public name: string;
  public health: number;
  public speed: number;

  constructor(name: string, health: number, speed: number) {
    this.name = name;
    this.speed = speed;
    this.health = health;
  }

  public abstract calculatePower(): number;

  public abstract characterName(): string;
}

class Goblin extends Character {
  constructor(name: string, health: number, speed: number) {
    super(name, health, speed);
  }

  public calculatePower(): number {
    return this.health * this.speed;
  }

  public characterName(): string {
    return this.name;
  }
}

class Wizard extends Goblin {
  constructor(name: string, health: number, speed: number) {
    super(name, health, speed);
  }
}

const Wizzy = new Wizard("wizzy", 100, 25);

console.log(Wizzy.calculatePower());
