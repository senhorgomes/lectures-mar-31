let myString: string = "Hello world!";
// Static typing
myString = "Typescript";

let randomValue: number | string = 1000;

randomValue = "1000";

console.log(randomValue);


const longFormArrayOfNumbers: Array<number | string> = [1,2,3,4];
const shortFormArrayOfNumbers: number[] = [5,6,7,8];


longFormArrayOfNumbers.push("hello");


