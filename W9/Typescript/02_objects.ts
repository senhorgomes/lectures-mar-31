// interface

interface Pet {
    name: string;
    age: number;
}

interface User {
    // How do we handle an id that will sometimes exist?
    // The id key may not always exist, but if it does, it needs to be a number
    id?: number;
    username: string;
    password: string;
    pet: Pet;
}

const aRandomUser: User = {
    username: "senhorgomes",
    password: "qwerty",
    pet: {
        name: "Airbud",
        age: 3
    }
}

const arrayOfUsers: User[] = [];

