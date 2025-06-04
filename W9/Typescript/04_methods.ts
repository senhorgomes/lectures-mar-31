interface Author {
    penName: string;
    numberOfBooks: number;
    writeBook: (title: string) => boolean;
}

const newAuthor: Author = {
    penName: "Bryan",
    numberOfBooks: 0,
    writeBook: function(title:string){
        if(title.length < 10){
            return false;
        }
        return true;
    }
}

console.log(newAuthor.writeBook("Typescript with Bryan"));
const addTwo = (anyNumber: number):number => {
    return anyNumber + 2;
}

const sayHello = ():string => {
    return "Hello!";
}


const higherOrderFunction = (callback:number) => {
    return callback;
}

// higherOrderFunction(sayHello())