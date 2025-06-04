type GreetingProps = {
    name: string;
    codingLanguage?: string;
}

function Greeting({name, codingLanguage}: GreetingProps) {
    // Name and a coding language
    return ( 
        <h2>Hello my name is {name}, and I enjoy {codingLanguage}!</h2>
     );
}

export default Greeting;