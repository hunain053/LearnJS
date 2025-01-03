//Function is a block of code designed to perform a specific task.
//Function makes the code reusable. You can declare it once and use it many times.
//Function makes the program easier as each small task is divided into a function.
//Function increases readability.
//DRY-Don't Repeat Yourself
//Function name(ParameterIfAny){...}

function greet(){
    console.log("Hello World");
}

greet(); //To call/execute/run the function


//Function with parameters/local variables
function sayHello(name){
    // console.log("Hello " + name);
    console.log(`Hello ${name}`);
}

sayHello("Hunain");//("Hunain") argument for parameter

//return keyword
function add(a,b){
    return a+b;
}
add(2,3);//not showing output as we are not printing it
console.log(add(2,3)); //showing output
//you can also store the result/return in a variable
const result = add(10,10);
console.log(result);


//challenge

//create a function name(myFunction)
//This function will take 2 parameters
//Any number we pass as argument it will multiply that number.
//As argument pass your fav numbers.
//log the value.

function myFunction(num1,num2){
    return num1*num2;
}
const result1 = myFunction(10,5);
console.log(result1); 


//Function Expression
//To store a function in a variable
const greeting = function (user){
    console.log(`Hello ${user}`);
}
//To call the function
greeting("Haru");
//if we call the function/variable before declaring it it will give an error


//Function Declaration

sayHello1("Hunain");//here we are calling the function before declaring it.
function sayHello1(username){
    console.log(`Hello ${username}`);
}
//it will work because it is a function declaration


//Calllback Function

//when we provide function as an (argument) to another function that function is known as callback function.
//This is a function call and if you provide another function as an argument then it is known as callback function.
// showCallFunc(function(){})

function ShowCallFunc(fn){
    const value = 10;
    fn(value);
}

ShowCallFunc(function (value){
    console.log(value);
});

//another example

function greet2(name,cb){
    console.log(`Hello ${name}`);
    cb();
}

function cb(){
    console.log("I am callback function");
}
//here we are calling the callback function
greet2("HaruxD",cb);


//or you can do it like this

greet2("HaruxD",function cb(){
    console.log("I am callback function");
});


//Test
//create a function name(showcallfunc)
//pass "fn" as an parameter
//inside the function create a variable which holds value of 10
//pass that value to the callback function
//now create callback function & print that value which you pass as parameter to the callback function.


function showcallfunc(fn){
    const value = 10;
    fn(value);
}

showcallfunc(function (value){
    console.log(value);
});


