// Functions => We can assign the return value, and the parameters

//**
// Inputs
// name:string, codingLanguage: string
// return: string
//  */

const introduction = (name: string, codingLanguage:string):string => {
    return `Hello, my name is ${name}, and I am learning ${codingLanguage}`;
}

const bryansIntro = introduction("Bryan", "Typescript");

console.log(bryansIntro);