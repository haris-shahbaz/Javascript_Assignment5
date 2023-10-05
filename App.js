// Chapter 26 to 30



// Question no 1 and 2
// var getnum = prompt("Enter Any Number");
// var roundoff = Math.round(getnum);
// alert(roundoff);
// var roundoff = Math.floor(getnum);
// alert(roundoff);
// var roundoff = Math.ceil(getnum);
// alert(roundoff);


// Question no 3
// function absoluteValue(number) {
// if (number < 0) {
//     return -number;
//   } else {
//     return number;
//   }
// }
// const number1 = -10;
// const number2 = 6;
// console.log(`The absolute value of ${number1} is ${absoluteValue(number1)}`);
// console.log(`The absolute value of ${number2} is ${absoluteValue(number2)}`);
  

// Question no 4
// var dice = Math.random() * 6;
// var floor = Math.floor(dice) + 1;
// console.log(floor);


// Question no 5
// var toss = Math.random() * 2;
// var floor = Math.floor(toss) + 1;
// if (floor < 2) {
//     console.log ("Number 1 is Tails");
// } else {
//     console.log ("Number 2 is Heads");
// }


// Question no 6
// var dice = Math.random() * 100;
// var floor = Math.floor(dice) + 1;
// console.log("The random number between 1 and 100 is : " + floor);


// Question no 7
// var weight = prompt("Enter your weight");
// var parse = parseInt(weight);
// console.log (parse);


// Question no 8
// var random = Math.random() * 10;
// var floor = Math.floor(random) + 1;
// var number = prompt("Enter a number between 1 to 10");
// if (number === floor) {
//     alert("Congratulations")
// } else {
//     alert("Try again!")
// }



// Chapter 31 to 34



// Question no 1
// var date = new Date ();
// console.log (date);


// Question no 2
// var month = new Date();
// var getmonth = month.getMonth();
// var array = [
//       "Janvary",
//       "Febrary",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "Octuber",
//       "November",
//       "December"
//     ];
// console.log(array[getmonth]);


// Question no 3
// var day = new Date();
// var getday = day.getDay();
// var array = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"];
// var slice = array[getday].slice(0, 3);
// console.log(slice);


// Question no 4
// var day = new Date();
// var getday = day.getDay();
// var array = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"];
// if (array[getday] === "Saturday" || array[getday] === "Sunday") {
//     alert("It's a fun day");
// } else {
//     alert("It's not a fun day");
// }


// Question no 5
// var date = new Date();
// var getdate = date.getDate();
// if (getdate <= 15) {
//     console.log(getdate + " : First fifteen days of the month");
// } else {
//     console.log(getdate + " : last fifteen days of the month");
// }


// Question no 6
// var currentDate = new Date();
// var getMinutes = currentDate.getTime();
// var minutesSinceMidnight = getMinutes / 60000;
// console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);


// Question no 7
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// Question no 8
// var date = new Date("thu Dec 31, 2020");
// console.log(date);


// Question no 9
// var ramadan = new Date("June 18, 2015");
// var currentDate = new Date();
// var subtraction = currentDate - ramadan;
// var calculate = Math.floor(subtraction / (1000 * 60 * 60 * 24));
// console.log(calculate);


// Question no 10
//  var date = new Date("Sat Dec 05, 2015 22:50:16 GMT+0500 (PKT)");
//  var startOfYear = new Date("January 01, 2015 00:00:00");
//  var subtraction = date - startOfYear;
//  var getseconds = subtraction / 1000;
//  console.log(getseconds);


// Question no 11
// var current = new Date();
// var currenthour = current.getHours();
// var oneHourEarlier = currenthour - 1;
// console.log(oneHourEarlier);


// Question no 12
// var currentDate = new Date();
// var year100YearsAgo = currentDate.getFullYear() - 100;
// currentDate.setFullYear(year100YearsAgo); 
// alert(currentDate);


// Question no 13
// var age = prompt("Enter your age");
// var currentDate = new Date().getFullYear();
// var birthYear = currentDate - age;
// alert("Your birthday year is :" + birthYear)


// Question no 14
// console.log("Customer Name : Haris");
// var month = new Date();
// var getmonth = month.getMonth();
// var array = [
//       "Janvary",
//       "Febrary",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "Octuber",
//       "November",
//       "December"
//     ];
// console.log("Month : " + array[getmonth]);
// var units = 410;
// console.log("Number of units : " + units);
// var chargePerUnit = 16;
// console.log("Charge per unit : " + chargePerUnit);
// var amountPayable = 6560;
// console.log("Net Amount Payable (within Due Date) : " + amountPayable);
// var latePayment = 350;
// console.log("Late Payment Surcharge : " + latePayment);
// var grossAmount = 6910;
// console.log("Gross Amount Payable (after Due Date) : " + grossAmount);
