abstract class Vehicle {
  private make: string;
  private model: string;
  private year: number;
  private rented: boolean;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }

  public getMake(): string {
    return this.make;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public isRented(): boolean {
    return this.rented;
  }

  public setRented(rented: boolean): void {
    this.rented = rented;
  }

  public abstract rentalRate(): number;

  public rent(): void {
    if (this.isRented()) {
      console.log(`This ${this.getMake()} ${this.getModel()} is already rented.`);
    } else {
      this.setRented(true);
      console.log(`You have rented this ${this.getMake()} ${this.getModel()}.`);
    }
  }

  public returnVehicle(): void {
    if (this.isRented()) {
      this.setRented(false);
      console.log(`Thank you for returning this ${this.getMake()} ${this.getModel()}.`);
    } else {
      console.log(`This ${this.getMake()} ${this.getModel()} was not rented.`);
    }
  }
}

class Car extends Vehicle {
  private numSeats: number;
  private numDoors: number;

  constructor(make: string, model: string, year: number, numSeats: number, numDoors: number) {
    super(make, model, year);
    this.numSeats = numSeats;
    this.numDoors = numDoors;
  }

  public rentalRate(): number {
    return 50;
  }

  public getNumSeats(): number {
    return this.numSeats;
  }

  public getNumDoors(): number {
    return this.numDoors;
  }
}

class Truck extends Vehicle {
  private cargoCapacity: number;

  constructor(make: string, model: string, year: number, cargoCapacity: number) {
    super(make, model, year);
    this.cargoCapacity = cargoCapacity;
  }

  public rentalRate(): number {
    return 100;
  }

  public getCargoCapacity(): number {
    return this.cargoCapacity;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(make: string, model: string, year: number, engineSize: number) {
    super(make, model, year);
    this.engineSize = engineSize;
  }

  public rentalRate(): number {
    return 30;
  }

  public getEngineSize(): number {
    return this.engineSize;
  }
}

// Example usage:

const car = new Car('Toyota', 'Corolla', 2021, 5, 4);
car.rent();
car.rent(); // Should display "This Toyota Corolla is already rented."
car.returnVehicle();

const truck = new Truck('Ford', 'F-150', 2022, 1000);
truck.rent();
console.log(truck.rentalRate()); // Should display 100.

const motorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 2020, 883);
console.log(motorcycle.getEngineSize()); // Should display 883.
