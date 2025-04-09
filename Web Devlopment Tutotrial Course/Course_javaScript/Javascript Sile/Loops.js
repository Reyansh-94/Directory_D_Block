// // For Loops 
// for(let i = 1; i<=10; i+3) {
//   console.log(i);
// }

// // Reverse Integer Print
// for(let i = 20; i>=1; i=i-4) {
//   console.log(i);
// }

// // Practice Qs- Odd number:
// for(let i=1; i<=15; i=i+2) {
//   console.log(i);
// }

// for(let i=15; i>=1; i=i-2) {
//   console.log(i);
// }

// Even number:-
// for(let i=0; i<=10; i=i+2) {
//   console.log(i);
// }

// Input Value print
// n = prompt("Enter the number:");
// n = parseInt(n); //Convert String into integr

// for(let i=n; i<=n*10; i=i+n) {
//   console.log(i);
// }


// // Nested loops
// for(let i=1; i<=3; i++) {
//   for(let j=1; j<=3; j++) {
//     console.log(j)
//   }
// }

// while Loop
// let i=14;

// while(i>=1) {
//   console.log(i);
//   i--;
// }

// Guess favorite movie
// favMovie = "avatar";
// guess = prompt("Guess my favorite movie");
// while((guess != favMovie) && (guess != "quit")) {
//   guess = prompt("Please try again! wrong guess you.");
// }

// if(guess == favMovie) {
//   console.log("Congurulate!");
// }else {
//   console.log("Quite you.");
// }

// let i = 1;
// while(i<=5) {
//   if(i == 3) {
//     break;
//   }
// console.log(i);
// i++;
// }

// console.log("break the loop to reach the condition ", i);

// Loops with arrys:

// let fruits = ["apple", "mango", "Orange", "litchi", "orange", "pineapple"];

// for(let i=0; i<fruits.length; i++) {
//   console.log(i, fruits[i]);
// }
// for(let i = fruits.length-1; i>=0; i--) {
//   console.log(i, fruits[i]);
// }

// Nested forvloop:
// let heroes = [["Sunny", "karan", "Arjun", "Shyam"], ["Shiva", "mathur", "Vivekanad", "Fasul"]];
// for(let i=0; i<heroes.length; i++) {
//   console.log(`heroes List #${i+1}`)
//   for(let j=0; j<heroes[i].length; j++) {
//     console.log(heroes[i][j])
//   }
// }
// or
// let marks = [["Ashok", 95.45], ["Banti", 84], ["Preetam Singh", 95.67], ["Vishal", 98.45], ["Sony", 78]];

// for(let i=0; i<marks.length; i++) {
//   console.log(`List #${i+1}`)
  
//   for(let j=0; j<marks[i].length; j++) {
//     console.log(`${j} == ${(marks[i][j])}`);
//   }
// }

// for of loop
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruit of fruits) {
//   console.log(fruit) 
// }

// for(char of "apnacollege") {
//   console.log(char);
// }

// Neated for of loop:-
// let heroes = [["ironman", "spiderman", "thor"], ["spderman", "wonder", "woman", "flash"]];

// for(list of heroes) {
//   console.log(list);
//   for(hero of list) {
//     console.log(hero);
//   }
// }

// Todo App
// let todo = [];

// let req = prompt("Please enter your request");

// while(true) {
//     if(req == "quit") {
//       console.log("Quitting App");
//       break;
//     }
    
//     if(req == "list") {
//       console.log("--------------");
//       for(let i = 0; i<todo.length; i++) {
//         console.log(i+1, todo[i]);
//       }
//       console.log("--------------");
//     }else if(req == "add") {
//       let task = prompt("Please enter the task you want to add.");
//       todo.push(task);
//       console.log("task added");
//     }else if(req == "delete") {
//       let idx = prompt("You delete the task please enter the idx");
//       todo.splice(idx, 1);
//       console.log("Task Deleted");
//     }
//     else {
//       console.log("Wrong Enter please correct task enter.");
//     }
//     req = prompt("please enter your request.");
// }


// Assignment 
// Qs1.
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log("before deleted", arr);
// let number = 2;
// for(let i = 0; i<arr.length; i++) {
//   if(arr[i] == number) {
//     let num = arr.splice(i, 1);
//     console.log("Deleted Item: ", num);
//   } 
// }
// console.log("delete element after arr: ", arr);


// Qs2:
// let number = 287152;
// let count = 0;
// let copy = number;

// while(copy > 0) {
//   count++;
//   copy=Math.floor(copy/10);
// }
// console.log(count);


// Qs3.
// let num = "287152";
// let sum = " ";
// for(let i=0; i<num.length; i++) {
//   sum += num[i];
// }

// console.log("sum of digits", sum);
// console.log("length of digits", sum.length);

// Qu4.
// let n = prompt("Enter the number.");
// let fact = 1;
// for(let i = 1; i<=n; i++) {
//      fact *= i;
// }

// console.log(`facttorial of ${n} is ${fact}`);

// Qs5.
// let arr = [4, 3, 9, 2, 23, 64, 23, 8, 1, 45];
// let largest = 0;

// for(let i = 0; i<=arr.length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
// }

// console.log("largest value is", largest);

// Const KeyWord:-
// const post = {
//   Username : "Preetam Singh",
//   content : "This is my firstPost",
//   likes : 150,
//   reposts : 5,
//   tag : ["@delta", "@apnaCollege"]
// }
 
// //get Value
// console.log(post["Username"]);
// console.log(post["content"]);
// console.log(post["likes"]);
// console.log(post["reposts"]);
// console.log(post["tag"][0]);

// // OR(Both syntax are same)
// console.log(post.Username);
// console.log(post.content);
// console.log(post.likes);
// console.log(post.reposts);
// console.log(post.tag[1]);

// number and keys converted into string
// const obj = {
//   1:"a",
//   2:"b",
//   null:"c",
//   undefined:"d",
//   true:"e"
// }
// Add/Update Value
// const student = {
//   name: "preetam",
//   age: 23,
//   marks: 94.4,
//   city:"Dehli"
// };

// //change value its key pairs Delhi to Mumbai or marks 94.4 to "A";
// student["city"] = "Mumbai";

// //Add key Value pair.
// student["gender"] = "Male";

// student["marks"] = "A";

// delete student["4"];


// console.log("Final Answer: ", student);

// //Objects of objects
// const stdInfo = {
//   aman:{
//     grade:"A+",
//     city:"Delhi"
//   },
//   sharadha:{
//     grade:"A",
//     city:"Pune"
//   },
//   karan:{
//     grade:"O",
//     city:"Mumbai"
//   }
// };
// grade
// : 
// "A+"
// [[Prototype]]
// : 
// Object
// karan
// : 
// city
// : 
// "Mumbai"
// grade
// : 
// "O"
// [[Prototype]]
// : 
// Object
// sharadha
// : 
// city
// : 
// "Pune"
// grade
// : 
// "A"
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object
             
// undefined
// stdInfo.aman
// {grade: 'A+', city: 'Delhi'}
// stdInfo.karan.grade
// 'O'
// stdInfo.sharadha["grade"] = "$a";
// '$a'
// stdInfo
// {aman: {…}, sharadha: {…}, karan: {…}}
// stdInfo["1"];
// undefined
// stdInfo["aman"]
// {grade: 'A+', city: 'Delhi'}
// ﻿

//Math Obj:-
// console.log("Pi value", Math.PI);
// console.log("E value", Math.E);
// console.log("abs value", Math.abs(5)); //return absolute a value
// console.log("power value", Math.pow(3, 2));
// console.log("floor value", Math.floor(98.9));
// console.log("negative Floor value", Math.floor(-5.5)) //Nearest smallest Integer Value
// console.log("ceil value", Math.ceil(98.78));
// console.log("random value", Math.random()); //print between 0 and 1 only


// Random Integers:
// let num = Math.random();

// console.log(num*10);
// console.log(Math.floor((Math.random()*10)+1));

// Practice Qs
// 1.
// console.log("Print random number between 1 and 100", Math.floor((Math.random()*100)+1));
// console.log("Print random number between 1 and 5", Math.floor((Math.random()*5)+1));
// console.log("Print random number between 20 and 25", Math.floor((Math.random()*5)+20));


// Guessing number project
// const max = prompt("Enter the max number");
// const random = Math.floor((Math.random()*max)+1);
// console.log("Random number", random);

// let guess = prompt("Enter your guessing number.");

// while(true) {
//   if(guess == "quit") {
//     console.log("You Quiting...");
//     break;
//   }
//   if(guess == random) {
//     console.log("Congulate! your guessing is right.");
//     console.log("Guessing number", guess);
//     break;
//   }else if(guess < random) {
//     guess = prompt("Your guessing number is too low, guessing again.");
//   }else{
//     guess = prompt("Your guessing number is too high, guessing again.");
//   }
// }

// assignment
// 1.
const random = Math.floor((Math.random()*6)+1);
console.log("Print random number between 1 and 6:-", random);

// Q2.
const car = {
  name:"Hyundai Creata", 
  model:2023-24,
  color:"grey-black"
};

console.log("Name of car is ", car["name"]);

// Q3.
let Person = {
  name: "Preetam Singh",
  age: 20,
  city: "Lucknow"
}

console.log("Data a perso", Person);

Person["city"] = "New York";

Person["Country"] = "United States";

console.log("Data Person after editing: ", Person);

