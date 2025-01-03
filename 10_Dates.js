// const currentDate = new Date()
// console.log(currentDate)

//year,month,day,hours,minutes,seconds,milliseconds

const date = new Date();

const year = date.getFullYear();
// In JavaScript, months are zero-based, meaning January is represented as 0 and December as 11.
// The getMonth() method returns the month as a zero-based value, which is why the output is one less than the actual month.
// To get the correct output, you can use the getMonth() method with the +1 to get the correct month.
const month = date.getMonth()+1; 
// The getDay() method returns the day of the week as a zero-based value, where Sunday is 0 and Saturday is 6.
// This is not the same as the day of the month, which is what you might expect.
// To get the correct output, you can use the getDate() method to get the day of the month.
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(`year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);
console.log(`MilliSeconds: ${milliseconds}`);


//Date to string representation in diff formats

// const date = new Date();

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());

date.setDate(date.getDate() + 1);// to add 1 day to the current date
console.log(date);
date.setDate(date.getDate() - 1);// to previous 1 day to the current date
console.log(date);