//JSON - JavaScript Object Notation
//JSON is a format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page.
//JSON is a lightweight data interchange format.
//JSON is language independent *
//JSON is "self-describing" and easy to understand


// {
//     "name": "John",
//     "age": 30,
//     "email": "john@example.com",
//     "address": {
//     "city": "New York",
//     "state": "NY"}

// }


//JSON.stringify()
//The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

//create a object
const person = {
    name: "John",
    age: 30,
    email: "john@example.com",
    address: {
    city: "New York",
    state: "NY"}

}
console.log(person);//print the object

console.log(JSON.stringify(person));//converts object to JSON string 
//or
const jsonString = JSON.stringify(person);
console.log(jsonString);

//JSON.parse()
//The JSON.parse() method parses a JSON string into the object or value it represents.
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
