
// const names: string[] = [];
// names.push("Dylan");

// const names: readonly string[] = ["Dylan"];
// names.push("Jack");


// let ourTuple: [number, boolean, string];

// ourTuple = [5, false, 'Coding God was here'];


// type Car = { 
//   type: string, 
//   model: string, 
//   year?: number, 
// }

// type Car = { [index: string]: unknown }

// const car: Car  = {
//   type: "Toyota",
//   model: "Corolla",
// };

// console.log(car)



// enum CardinalDirections {
//   North = 'North',
//   East = 'East',
//   South = 'South',
//   West = 'West'
// }

enum CardinalDirections {
  North=200,
  East,
  South,
  West
}

console.log(CardinalDirections.West);


type str = string;
const hello: str = 'test';
console.log('test');


interface Rectangle {
  height: number,
  width: number
  scale?: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

console.log(rectangle.scale)


const var_: string | number | boolean = "1";



function printHello(): void {
  console.log('Hello!');
}

function getTime(): number {
  return new Date().getTime();
}

let x: unknown = 4;
console.log((x as string).length); 



interface Person<T> {
  name: string,
  address: T,
}

interface Address2 {
  t?: string
}

interface Address extends Address2 {
  street: string,
  city: string,
  state: string,
  postalCode: string
}

const person: Person<Address> = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Davao",
    state: "Davao",
    postalCode: "8000"
  }
}


