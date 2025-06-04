"use strict";
const newAuthor = {
    penName: "Bryan",
    numberOfBooks: 0,
    writeBook: function (title) {
        if (title.length < 10) {
            return false;
        }
        return true;
    }
};
console.log(newAuthor.writeBook("Typescript with Bryan"));
const addTwo = (anyNumber) => {
    return anyNumber + 2;
};
const sayHello = () => {
    return "Hello!";
};
const higherOrderFunction = (callback) => {
    return callback;
};
// higherOrderFunction(sayHello())
