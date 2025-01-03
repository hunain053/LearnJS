//Method is a function inside an object.

function greet(){
    return `Hello, my name is ${person.name} & i am ${person.age} years old.`;
}//create a function

//create an object
const person = {
    name:"Hunain",
    age:20,
    greet, //passing a reference of the function 
}
//use the greet object 
console.log(person.greet());


//example 2
//methods inside an object
const person1 ={
    name:"Hunain",
    age:21,
    greet:function(){
        return `Hello, my name is ${person1.name} & i am ${person1.age} years old.`;
    },
};

console.log(person1.greet());