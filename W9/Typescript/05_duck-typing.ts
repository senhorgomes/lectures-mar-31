// If it quacks like a duck
// Walks like a duck
// Then its a duck

interface PotentialUser {
  username: string;
  password: string;
}

const newUser: PotentialUser = {
  username: "senhorgomes",
  password: "password"
}

// const brandNewUser: PotentialUser = {
//   username: "senhorgomes",
// }

const secondUser = {
  username: "bryan",
  password: "password",
  favMovie: "Blade Runner",
  favLanguage: "Javascript"
}

// register function that checks if a user has a password

const register = (user: PotentialUser):boolean => {
  // checks to see if the information is valid, send a query to our database
  return true;
}

register(secondUser);

