// DATATYPES string, number, boolean, undefined, null, any

let firstName: any = "Sean";

let lastName = "Johnson";

console.log(firstName + " is of type " + typeof firstName)
console.log(lastName + " is of type " + typeof lastName)



// ARRAYS

let array1: string[] = []
array1.push("Hello ")
array1.push("World!")
// array1.push(1)

console.log(array1)

let array2: readonly string[] = ["Hello "]
// array2.push("World")
console.log(array2)

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
console.log(numbers)
console.log(head)



// OBJECTS
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

console.log(car)

// OR Infer types 
const car2 = {
    type: "Toyota",
};

console.log(typeof car2.type)

// optional properties 
const car3: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
car3.mileage = 2000;

console.log(car3)



// ENUMS

//You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);


enum CardinalDirections1 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(CardinalDirections1.North);
// logs "West"
console.log(CardinalDirections1.West);


// you can define types before they are used
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car1: Car = {
    year: carYear,
    type: carType,
    model: carModel
};


// INTERFACES - Only for Objects (setting up the types)

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

// EXTENDING INTERFACES 
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string //adds new property
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};



// Union | OR - types can be treated as multiple things
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');



// FUNCTION RETURN TYPES

function getTime(): number { //this function returns a number
    return new Date().getTime();
}

function printHello(): void {  // VOID if function returns nothing
    console.log('Hello!');
}

// FUNCTION PARAMETERS 
function multiply(a: number, b: number) {
    return a * b;
}

function add(a: number, b: number, c?: number) { // OPTIONAL
    return a + b + (c || 0);
}

function pow(value: number, exponent: number = 10) { // DEFAULT PARAMETER
    return value ** exponent;
  }



// CASTING with (as) or <>  (DOES NOT WORK WITH TSX in REACT)

let x: unknown = 'hello';
console.log((x as string).length);

//Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
let y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length
//TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:
//console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
//The Force casting section below covers how to override this.

let z: unknown = 'hello';
console.log((<string>z).length);



// FORCE CASTING

let s = 233;
console.log(((s as unknown) as string).length); // x is not actually a number so this will return undefined