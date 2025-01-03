// Scope in js refers to the current context of code, which determines the accessibility of variables to javascript.

//There are two types of scopes in js.
//Global and Local variables

//Global scope variables are those declared outside of a block.

// let textmsg = "hi";
// console.log(textmsg); // Output: hi

//Local scope variables are those declared inside of a block. can be accessed only inside a block.

{
    let textmsg1="hello";
}//this variable will no longer will accessible outside of the block.
// console.log(textmsg1); // Output: ReferenceError: textmsg1 is not defined


//example of local variable

function showmsg(){
    let textmsg2="local var";//local variable 
    console.log(textmsg2);
}
showmsg();

// console.log(textmsg2);// it will throw an error because we can't use local variable (used in function) outside of an function.

//example of using global variable outside a function
let textmsg3 = "global var"; //global variable

function showmsg2(){
    console.log(textmsg3); //global variable can be accessed inside a function
}
showmsg2();

//another example
for(let i=0;i<5;i++){
    console.log(i); // i var is currently local variable
}

console.log(i);//Accessing as global variable, this variable will no longer will accessible outside of the block.

//example of using global variable outside a function

// The function has full access to the outer/global variable. It can modify it as well.
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer/global variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

// The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

let userName1 = 'John';

function showMessage() {
  let userName1 = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName1; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName1 ); // John, unchanged, the function did not access the outer variable