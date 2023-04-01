#TypeScript class hierarchy to model a vehicle rental system: 

1. Start by creating an abstract class called Vehicle that will serve as the base class
for all types of vehicles in the rental system.
2. Define instance variables in the Vehicle class to store common properties for all
vehicles, such as make, model, year, and rented.
3. Create a constructor in the Vehicle class that takes in these properties as
parameters and initializes them.
4. Define accessor methods (getters) for the make, model, year, and rented instance
variables in the Vehicle class.
5. Define a mutator method (setter) for the rented instance variable in the Vehicle
class.
6. Define an abstract method called rentalRate in the Vehicle class that will be
implemented by each subclass to provide the rental rate for that particular type
of vehicle.
7. Define two methods in the Vehicle class: rent() and return(). The rent() method
should check if the vehicle is already rented and provide a message to the user
accordingly. If the vehicle is available, it should set the rented instance variable to
true. The return() method should check if the vehicle has been rented and provide
a message to the user accordingly. If the vehicle has been rented, it should set
the rented instance variable to false.
8. Create subclasses of Vehicle for each type of vehicle in the rental system (e.g.
Car, Truck, Motorcycle). Each subclass should implement the rentalRate method
to provide the rental rate for that type of vehicle.
9. Define additional instance variables and methods in the subclasses as needed to
model the specific characteristics of each type of vehicle.
10. In the main program, create instances of each type of vehicle and test the rent()
and return() methods to make sure they work as expected.

Instructions:
● Do not use any front-end library for it, It has to be TS only. 
● Every point has 10 numbers so total marks for this assignment will be 100. 
● If your code found out to be copied from anywhere. You will immediately be terminated from the course and permanently blacklisted from every SMIT course forever. 
● Deadline for this assignment is Saturday, 1st April - 9:00 PM sharp. 
● Not submitting the assignment on time will lead to the termination from the course.
