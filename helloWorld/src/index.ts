/*
//console.log("Hello World");
let age: number = 24;
//age='a'
if (age<50)
  age += 10
*/

/*

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;
//level = 1;
//level = "a";

function render(document){
  console.log(document);
}
*/

//let numbers = [1,2,3];
//let numbers: number[] = [];
//numbers[0] = 1;
//numbers[1] = 'a';


// let numbers: number[] = [];
// numbers.forEach(n => n.)

// let user: [number, string, boolean] = [1, "Ranga", true];
// user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size { Small=1, Medium , Large };
// let mySize:Size = Size.Medium;
// console.log(mySize);

/*
function calculateTax(income: number, taxYear = 2022): number{
  //let n;
  if(taxYear < 2022)
    return income * 1.2;
  return income* 1.3
}
calculateTax(10_000);
*/

/*
type Employee = {
  readonly id: number,
  name: string,
  retire:(date: Date) => void
}

let employee: Employee = { 
  id: 1, 
  name:'Ranga',
  retire: (date: Date) => {
    console.log(date);
  }
};
//employee.name = 'Ranga';
//employee.id = 2;
*/

/*
function kgToLbs(weight: number | string): number{
  //weight.
  if (typeof weight == 'number'){
    return weight * 2.2;
  }
  else{
    return parseInt(weight) * 2.2;
  }
}
kgToLbs(10);
kgToLbs('10kg')
*/

//let weight: number & string;

/*
type Draggable = {
  drag: () => void;
}

type Resizeable = {
  resize: () => void;
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
};
*/


// type Quantity = 50 | 100;

// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';

/*
function greet(name: string | null | undefined){
  if(name)
    console.log(name.toUpperCase());
  else
    console.log("Hi");
}

greet(undefined);
*/

type Customer = {
  birthday?: Date;
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday : new Date() }
};

let customer = getCustomer(1);
//if (customer !== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear());

let log: any = null;
log?.('a');