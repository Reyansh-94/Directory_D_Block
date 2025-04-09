// // Function Tutorial
// function process() {
//   for(let i=0; i<10; i++) {
//     console.log(i);
//   }
// }

// process();

// function isAdult() {
//   let age = 18;
//   if(age <= 18) {
//     console.log("Adult for voting");
//   }else{
//     console.log("Not adult for and not for voting");
//   }
// }

// isAdult();

// // Practice Qs.
// function printPoem() {
//   console.log("Twinkle-twinkle little star");
//   console.log("How, Wonder likes the sky");
// }

// printPoem();

// // Roll dice function
// function rollDice() {
//   console.log(Math.floor(Math.random()*6)+1);
// }
// rollDice();
// rollDice();
// rollDice();

// // Function with argument
// function infoFunc(name, age) {
//   console.log (`${name}'s age is ${age}`);
// };

// infoFunc("Preetam Singh", 20);
// infoFunc("Sony", 21);

// function sum(a, b) {
//   console.log("a+b =", a+b);
// }

// sum(9, 6);
// sum(3, 2);
// sum(89, 13);
// sum(94, 36);

// //Create a function that gives us the average of three numbers.
// function avg_func(a, b, c) {
//   console.log("Average :", (a+b+c)/avg_func.length);
// }

// avg_func(4, 5, 6);

// //Create the function that print the multiplication table of a number.
// function mulFun(n) {
//   for(let i=n; i<=n*10; i+=n) {
//      console.log(i);
//   }
// }

// mulFun(3);

// Return keyword:
// function sum(a, b) {
//   return a+b;
// }
// console.log(sum(sum(2, 3), sum(sum(9, 5), 5)));

// //Or
// function isAdult(age) {
//   if(age >= 18) {
//     return "Adult";
//   }else {
//     return "Not Adult";
//   }
// }

// console.log(isAdult(34));

// Practice Question
// Q1.
// function calSum(n){
//   let sum=0;
//   for(let i=1; i<=n; i++) {
//      sum+=i;
// }
//  return sum;
// }
// console.log(calSum(5));
// Q2.
// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//   let result = "";
//   for(let i=0; i<str.length; i++) {
//     result += str[i];
//   }
//   return result;
// }

// console.log(concat(str));

// Block Scope keyword
// 1.cons
// for(let i=0; i<=10; i++) {
//      console.log(i)
// }

// console.log(i); //Error i is a block scope keyword

// let age = 25;

// if(age >= 18) {
//    let str = "Adult";//str is block keyword.
// }

// console.log(str); //Error str block keyword

// Lexical Scope
// function outerFunc() {
//      let x = 5;
//      let y = 6;
//      function innerFunc() {
//           console.log(x);
//           console.log(y);
//      }
//      innerFunc();
// }

// outerFunc();

// //Or

// function outerFunc() {
//      function innerFunc() {
//           console.log(x);
//           console.log(y);
//           let a = 10; // Not declare inner function
//      }
//      let x = 5;
//      let y = 6;
//      console.log(a);  //Error Throw line

//      innerFunc();
// }

// outerFunc();

// Practice Question
// let greet = "hello"; // gloabal scope

// function changeGreet() {
//      let greet = "namaste"; //function Block
//      console.log(greet);

//      function innerGreet() {
//           console.log(greet); //lexical scope
//      }
//      innerGreet();
// }
// console.log(greet);
// changeGreet();

//Function Expression
// let name = "Preetam Singh";
// let sum = function(a, b) {
//      return a+b;
// }
// console.log(sum(4, 8));

// let hello = function(){
//      return "hello";
// }
// console.log(hello());

// hello = function() {
//      return "nameste";
// }


//$$ Higher Order Function:-
//1.
// function MultipleGreet(func, n) {
//   for (let i = 1; i <= n; i++) {
//     func();
//   }
// }
//   let greet = function () {
//     console.log("Hello");
  
// }

// // MultipleGreet(greet, 90);
// // or
// MultipleGreet(function() {
//      console.log("namsate");
// }, 104);

// 2.

// function oddevenFactory(request) {
//      if(request == "odd") {
//           return function(n) {
//                console.log(!(n%2==0));
//           }
//      }else if(request == "even") {
//           return function(n) {
//                console.log(n%2==0);
//           }
//      }else{
//           console.log("Wrong request");
//      }
// }

// let request = "odd";

// methods
// const calculator = {
//      num: 55,
//      add: function(a, b) {
//           return a+b;
//      },
//      sub: function(a, b) {
//           return a-b;
//      },
//      mul: function(a, b) {
//           return a*b;
//      }
// };

//or
// const calculator = {
//      add(a, b) {
//          return a+b;
//      },
//      sub(a, b) {
//            return a-b;
//       },
//       mul(a, b) {
//            return a*b;
//       }
//  };

// Assignment:-
// 1.
// let arr = [9, 4, 3, 4, 8, 14, 3, 2, 1, 6];
// let num = 5;
// function getElements(arr, num) {
//      for(let i=0; i<arr.length; i++) {
//           if(arr[i] > num) {
//                console.log("Elemnt larger than a element.", arr[i]);
//           }
//      }
// }

// getElements(arr, num);

// 2.
// let str = "abcdabcdefgggh";
// function getUnique1(str) {
//      let ans = "";
//      for(let i=0; i<str.length; i++) {
//           let currChar = str[i];
//           if(ans.indexOf(currChar) == -1) {
//                  ans += currChar;
//           }
//      }
//      return ans;
// }
// console.log(getUnique1(str));

// 3.
// let Country = ["Australia", "Germany", "United States of America"];

// function longest_country(Country) {
//      let ansInd = 0;
//      for(let i=0; i<Country.length; i++) {
//           let ansLen = Country[ansInd].length;
//           let currLen = Country[i].length;
//           if(currLen > ansLen) {
//                ansInd = i;
//           }
//      }
//      return Country[ansInd];
// }
//  console.log(longest_country(Country));

// 4.
// let str = "Preetam Singh";
// function countVowels(str) {
//      let count = 0;
//      for(let i=0; i<str.length; i++) {
//           if(
//                str.charAt(i) == "a" ||
//                str.charAt(i) == "e" ||
//                str.charAt(i) == "i" ||
//                str.charAt(i) == "o" ||
//                str.charAt(i) == "u" 
//           ) {
//                count++;
//           }
//    }
//    return count;
// } 

// 5.

let start = 100;
let end = 200;
function randomNum(start, end) {
        let diff = end-start;
        return Math.floor(Math.random()*diff)+start;
}
console.log(randomNum(start, end));