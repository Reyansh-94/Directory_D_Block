//Use of 'this' keyword

// const Student = {
//  name : "preetam singh",
//  age : 20,
//  math : 95,
//  eng : 97,
//  phy : 94,

//  getAvg() {
//   console.log(this);
//   let avg = (this.math+this.eng+this.phy) / 3;
//   console.log(`${this.name} got avg marks = ${avg}`);
//  }
// }

//  function getAvg() {
//   console.log(this);
//  }

// const std = {
//   name: "Preetam Singh",
//   age: 21,
// getFunc() {
// console.log(`${this.name} is ${this.age} years old.`);
//   }
// }

// std.getFunc();

// try-catch function
// console.log("hello");
// console.log("hello");
// try {
//   console.log(a);
// }catch(arr){
//   console.log("Error a is not defined/")
//   console.log(arr);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

// Arrow Function
// const sum = (a, b) => {
//   console.log(a+b);
// };
// sum(4, 7);

// const cube = (n) => {
//   return n*n*n;
// };
// console.log(cube(4));

// const pow = (a, b) => {
//   return a ** b;
// };
// console.log(pow(6, 2));

// const hello = () => {
//   console.log("Hello World");
// }
// hello();

// Implicit return function arrow:-

// const sum = (a, b) => (a+b);
// console.log(sum(8, 4));

// const cube = (n) => (n*n*n);
// console.log(cube(8));

// const pow = (a, b) => (a ** b);
// console.log(pow(4, 3));

// const hello = () => ("Hello World");
// console.log(hello());

// setTimeout function
// console.log("hello World");
// setTimeout(() => {
//   console.log("Preetam Singh");
// }, 2000);

// console.log("Hi");
// console.log("Nice");

// SetInterval function
// console.log("Hello world.");
// let id = setInterval(() => {
//   console.log("preetam Singh");
// }, 2000);// console.log(id);
// clearInterval(id);

// "this" with array fuction:-
// const Student = {
//    name: "aman",
//    marks: 95,
//    prop: this, //global scope
//    getNAME: function() {
//     console.log(this);
//     return this.name
//    },
//    getMarks: () => {
//     console.log(this); //parent's scope -> window
//     return this.marks;
//    },

//    getInfo1: function() {
//     setTimeout( () => {
//       console.log(this); //student
//     }, 2000);
//    },
//    getInfo2: function() {
//     setTimeout(function() {
//        console.log(this); // windo
//     }, 2000);

//    }
// };

// Question papers
//1/,
// const arr = (a, b) => a**b
// console.log(arr(5, 2));

// 2.l
// let id = setInterval(() => {
//   console.log("Hello");
//   }, 2000);

// setTimeout(() => {
//   clearInterval(id);
// }, 10000);

// assignment
//  1.
// const arrayAverage = {
//   name: "Vishal",
//   a1: 96,
//   a2: 67,
//   a3: 98,

//   getAvg() {
//     console.log(`${this.name}'s average is ${(this.a1+this.a2+this.a3)/3}`);
//   }
// }
// arrayAverage.getAvg();
//or
// const arrayAverage = (arr) => {
//   let total = 0;
//   for(let number of arr) {
//     total += number;
//   }
//   return total / arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrayAverage(arr));

// 2.
// const isEven = (n) => {
//   if(n % 2 == 0){
//     console.log(n, "is even number.");
//   }else{
//     console.log(n, "is odd number");
//   }
// }

// isEven(18);
//or
// let num = 3;
// const isEven = (num) => num % 2 == 0;
// console.log(isEven);

// 3.
// const object = {
//   message: 'Hello, World',
//   logMessage() {
//     console.log(this.message);
//   }
// };
// console.log(setTimeout(object.logMessage, 1000));

// 4.
// let length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };
// object.method(callback, 1, 2);

// Exercize
// this keyword:-
// const Student = {
//   name: "Preetam singh",
//   age: 67,
//   math: 90,
//   sci: 87,
//   getAvg() {
//     console.log(this);

//     let avg = (this.math+this.sci+this.eng);
//     console.log(`${this.name} got marks ${avg}`);
//   }
// }
// function getAvg() {//window Object.
// console.log(this);
// }

// Arrow Functions
// const fuc = (arg1, arg2....) => {function definition}

// 2.
// const sum = (a, b) => {
//   console.log("Sum is", a+b);
// }
// sum(8, 9);

// const cube = (n) => {
//   console.log("Cube is", n*n*n);
// }
// cube(8);

// const pow = (a, b) => {
//   return a ** b;
// }
// console.log("Pow is ", pow(9, 2));

// const hello = () => {
//   console.log("hello world");
// };

// 3.Set TimeOut
// setTimeout(function timeout)

// console.log("hi there!");

// setTimeout( () => {
//   console.log("Preetam singh")
// }, 4000);
// console.log("Welcome to Preetam Singh");

// Set SetInterval
// setinterval(function, timeout)  //Symbol
// let id = setInterval ( () => {
//   console.log("Apna College");
// }, 2000);

// console.log(id);

// let id2 = setInterval ( () => {
//   console.log("Preetam Singh");
// }, 2000);

// console.log(id2);
// clearInterval(id); //Stop the Execution
// clearInterval(id2); //Stop the Execution

// this with arrow function:-
// const Student = {
//   name: "Preetam Singh",
//   marks: 95,
//   prop: this, //global Fuction
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },

//   getMarks: () => {
//     console.log(this); //present's scope -> window
//     return this.marks;
//   },
//   getInfo1: function () {
//     setTimeout(() => {
//       console.log(this); //student
//     }, 2000);
//   },

//   getInfo2: function () {
//     setTimeout(function () {
//       console.log(this); //Window
//     }, 2000);
//   },
// };


// Excercise:-
// 1.
const square = n => n*n;
console.log(square(9));

// 2.
id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("Clear interval ran");
}, 10000);