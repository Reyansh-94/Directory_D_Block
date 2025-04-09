// String Function
// let name = "Tony Stark";
// let role = "ironman";
// let char = 'a';
// let num = '23';
// let empty = " ";
// console.log(name);
// console.log(role);
// console.log(char);
// console.log(num);
// console.log(empty);

// console.log("She is a good 'girl.'"); //correct type string
// console.log('She is a good "girl."');  //Correct type string

// // String Indices
// let str = "Tony Stark";
// console.log(str[0]);
// console.log(str[3]);
// console.log(str[2]);
// console.log(str[5]);


// console.log(str[0] = "R");
// console.log(str[1] = "a");
// console.log(str[2] = "j");
// console.log(str[3] = "k");
// console.log(str[4] = "u");
// console.log(str[5] = "m");
// console.log(str[6] = "a");
// console.log(str[7] = "R");
// console.log(str)


// // Practice Question:
// // 1.
// let name1 = "Banti Kumar";
// let len = name1.length;
// console.log(len)

// // 2.
// first_ch = name1[0];
// console.log(first_ch);

// // 3.
// last_ch = name1[name1.length-1];
// console.log(last_ch);
// document.writeln(last_ch, "\n");
// document.writeln("\n")
// // 4.
// let f1 = "apnacollege";
// let s1 = 123;
// document.writeln(f1+s1);

// // 5.
// let emp = " ";
// console.log(emp.length);

// Two number addition
// let a = 5;
// let b = 9;

// document.writeln("a and b both sub equal to ", a+b)


// Use of templete lieteral method:
// console.log(`a and b is equal to ${a+b}`)


//Arithmetic operators
// a = 30;
// b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// console.log(a%b);


// Assignment opr
// b = a
// console.log("Change the value of a and store in b that is now equal ato value: ", b)

// // compares values, not type 
// console.log("123" == 123)
// console.log("1" == 1)
// console.log(0 == ' ')
// console.log(0 == false)
// console.log(null == undefined)

// // Caompares type & value
// console.log("123" === 123)
// console.log("1" === 1)
// console.log(0 === ' ')
// console.log(0 === false)
// console.log(null === undefined)


// console.log('a' < 'A')
// console.log('b' > 'b')
// console.log('b' < 'C')
// console.log('B' < 'c')
// console.log('*' < '/')
// console.log('%' < '^')
// console.log('@' < '#')
// console.log('!' < '=')
// console.log('(' < ')')
// console.log('+' < '-')


// Practice Qu

// let color = "red";

// if (color === "red") {
//   console.log(`Stop! Highlight color ${color}`);
//   document.writeln(`Stop! Highlight color ${color}`);
// } 

// if (color === "yellow") {
//   console.log(`Slow down! Highlight color ${color}`);
//   document.writeln(`Slow down! Highlight color ${color}`);

// } 

// if (color === "green") {
//   console.log(`Go! Highlight color ${color}`);
//   document.writeln(`Go! Highlight color ${color}`);

// } 

// Conditional statement:
// let marks = 75;

// if (marks >= 90) {
//   document.writeln("A+");
// }else if(marks >= 60) {
//   document.writeln("A");
// }else if(marks >= 33) {
//   document.writeln("B")
// }
// else {
//   document.writeln("F")
// }

// document.write("\n")

// let month = "january";

// if (month === "january") {
//   document.writeln("Winter is here...");
// }
// if (month === "april") {
//   document.writeln("Summer is here...");
// }
// Practice Qu:-

// let size = 'XL';

// if (size === 'XL') {
//   console.log(`If size is ${size}, price is Rs.250`);
// }else if (size === 'L') {
//   console.log(`If size is ${size}, price is Rs.200`);
// }else if (size === 'M') {
//   console.log(`If size is ${size}, price is Rs.100`);
// }else if (size === 'S') {
//   console.log(`If size is ${size}, price is Rs.50`);
// }else {
//   console.log("You confirm no size, please confirm the size of popcorn.")
// }

// Nested statement
// let marks = 98;

// if (marks >= 33) {
//   console.log("Pass");
//   if (marks >= 90) {
//     console.log("Grade : O");
//   }else {
//     console.log("Grade : A");
//   }
// }
// else {
//   console.log("Better luck for next time!");
// }

// Logical Expression:-
// console.log(true && true);
// console.log(true || false);
// console.log(!true && true);

// Practice qu:-
// 1.
// let str = "apple";

// if ((str[0] === 'a') && (str.length>3)) {
//   console.log("Good")
// }else {
//   console.log("not")
// }

// // 2.
// let num = 12;
// if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
//      console.log("safe");
// }else {
//   console.log("unsafe");
// }

// Truthly and falsy value:-

// if (true) {
//   console.log("It has true value.");
// }else {
//   console.log("It has false value.")
// }

// if (NaN){
//   console.log("It has not empty value.");
// }else {
//   console.log("It has empty value.")
// } 

// switch Statement:-
// let color = "green";

// switch(color) {
//   case "red":
//     console.log("Stop");
//   break; 
  
//   case "red":
//     console.log("Stop");
//   break; 

//   case "yellow":
//     console.log("Slow down");
//   break; 

//   case "green":
//     console.log("Go");
//   break; 

//   default:
//     console.log("Broken light to signal"); 
// }

// Practice Qu
 
// let day = 1;

// switch(day) {
//   case 1:
//     day = "Sunday, Fun day";
//     break;

//     case 2:
//     day = "Monday";
//     break;

//     case 3:
//     day = "Tuesday";
//     break;

//     case 4:
//     day = "Wednesday";
//     break;

//     case 5:
//     day = "Thursday";
//     break;

//     case 6:
//     day = "Friday";
//     break;

//     case 7:
//     day = "Saturday";
//     break;

//     default:
//       day = "Choose correct day...";
// }

// console.log(`Your day is ${day}`);

// alerts, prompts, console method:-
// alert("Something Error...");

// console.log("This is simple log.");
// console.error("This is an error msg.");
// console.warn("This is a warn msg.");
 
// let Fname = prompt("Enter your Fname.");
// let Lname = prompt("Enter your last name.");

// alert(`Welcome ${Fname} ${Lname} !`);

// Assignment:-
// // 1.
// let num = 200;
// if (num%10 == 0) {
//   console.log("Good");
// }else {
//   console.log("Bad");
// }

// // 2.
// let name = prompt("Enter your name...");
// let age = prompt("Enter your age...");
// alert(`${name} is ${age} years old.`);

// // 3.
// let month_in_Quarter = 1;

// switch(month_in_Quarter) {
//   case 1:
//     console.log('January, February, March');
//     break;
//   case 2:
//     console.log('April, May, June');
//     break;
//   case 3:
//     console.log('July, August, September');
//     break;
//   case 4:
//     console.log('October, November, December');
//   default:
//       console.log("Choose correct Quarters.")
// }

// // 4.
// let str = "Appleallow";

// if ((str[0] === ("A" || "a")) && str.length > 5) {
//   console.log(str,"is a Golden String");
// }else{
//   console.log(str, "is not a Golden String");
// }

// // 5.
let a = 5;
let b = 6; 
let c = 9;

// if(a > b && a > c) {
//   console.log("Greater value a is ==", a);
// }else if(b > a && b > c) {
//   console.log("Greater value b is ==", b);
// }else {
//   console.log("Greater value c is ==", c);
// }

// 5.

if(a > b) {
  if(a > c) {
     console.log(a, " is largest.");
  }else{
    console.log(c, " is largest.");
  }
}else{
  if(b > c) {
    console.log(b, " is largest.");
  }else{
    console.log(c, " is largest.");
  }
}
 
