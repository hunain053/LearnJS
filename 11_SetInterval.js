// SetInterval is used to execute a function/block of code repeatedly after a specified interval of time.

// setInterval(function(){
//     console.log("Hello World");
// },1000); //it will print hello world after every 1 second
// clearInterval(id); //to stop the execution of the function/block of code

setTimeout(function(){
    console.log("Hello World");
},3000);//it will print hello world after 3 second

//example stop the interval after 10 seconds

const intervalId = setInterval(function(){
    console.log("Hello World");
},1000);//it will print hello world after every 1 second

//To stop the interval after 10 seconds
setTimeout(function(){
    clearInterval(intervalId);
},10000);

