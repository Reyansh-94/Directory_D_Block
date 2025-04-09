// Array System
// let arr = ["Preetam", "Shradha", "Rajat", "amam", 23, 24, 34, 56];
// console.log(arr);
// document.writeln(arr);

// Print the Index of index value in given array and print the length its index array.

// let Index_of_index = arr[0][0];
// let Index_of_length = arr[0].length;
// console.length(Index_of_index);
// console.log(Index_of_length);

// Array are Mutable:-
// let arr = ["aman", "rajat", "shradha"];
// console.log(arr);

// // Change the of index
// arr[0] = "Hariom";
// arr[2] = "Shradha Khapra";
// arr[10] = "Banti kumar";

// Array push, pop, shift, unshift;
// let cars = ["bmw", "mahindra", "Fortunare", "Suzuki", "Toyata"];

// cars.push("Creata"); //push from end method 

// cars.pop(); //pop from end method

// let shift = cars.shift();  //shift from start method(delete) 

// let unshift = cars.unshift("Creata"); //unshift from start method(add)


// let arr = ['january', 'july', 'march', 'august'];

// arr.shift();
// arr.shift();

// arr.unshift('june');
// arr.unshift('july');

// console.log('change it and final arr:', arr);

// // indexOf and includes methods:-
// let primary = ["red", "yellow", "blue"];

// // console.log('Given start of an array:', arr);
// let arr = primary.indexOf("yellow");
// let arr1 = primary.indexOf("green");

// let blu = primary.includes("red"); 
// let blu1 = primary.includes("Orange"); 

// Concat && reverse method:-

// let primary = ['red', 'blue', 'yellow', 'green'];
// let secoundry = ['ethial', 'Orange', 'pink', 'brown'];

// let conc = primary.concat(secoundry);
// let cont = secoundry.concat(primary);


// let rev = primary.reverse();


// // slice method
// let cars = ['bmw', 'usv', 'techno', 'lenovo'];
// let slice = cars.slice(1, 4);
// let slice1 = cars.slice(-3);

// Splice method:-
// let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];
// // colors.splice(4);
// colors
// (6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']

// colors.splice(4);
// (2) ['pink', 'white']

// colors.splice(0, 1);
// ['red']

// colors.splice(0, 1, 'black', 'grey');
// ['yellow']

// colors
// (4) ['black', 'grey', 'blue', 'orange']

// sort method:-
// let marks = [45, 34, 23, 100, 40, 20];

// practice Question::-
// let start = ['january', 'july', 'march', 'august'];

// start.splice(0, 2, 'july', 'june');
// (2) ['january', 'july']

// start
// (4) ['july', 'june', 'march', 'august']

// let sub = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
// sub.reverse().indexOf('javascript');



// // array Reference:
// let arr = ['a', 'b', 'c'];

// (3) ['a', 'b', 'c']
// let arrCopy = arr;
// undefined
// arr == arrCopy
// true
// arr === arrCopy;
// true
// arr = arrCopy;
// (3) ['a', 'b', 'c']
// push.arrCopy('d');
// VM2871:1 Uncaught ReferenceError: push is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM2871:1
// arrCopy.push('d');
// 4
// arr
// (4) ['a', 'b', 'c', 'd']
// arrCopy = ['a', 'c', 'k', 't', 'u', 'r');
// VM3059:1 Uncaught SyntaxError: Unexpected token ')'
// arrCopy
// (4) ['a', 'b', 'c', 'd']
// let arrCopy = ['a', 'c', 'k', 't', 'u', 'r'];
// undefined
// arrCopy === arr
// false
// arr.push('H');
// 5
// arrCopy;
// (6) ['a', 'c', 'k', 't', 'u', 'r'];

// Constanta Arrays:-
// onst arrayw = ['a', 'b', 'c', 'f', 't', 's'];
// undefined
// arrayw.pop();
// 's'
// arrayw.push('T');
// 6
// arrayw
// (6) ['a', 'b', 'c', 'f', 't', 'T']
// arrayw = ['R', 'D', 'T', 'P', "Q'];
// VM3666:1 Uncaught SyntaxError: Invalid or unexpected token

// Nested Array:-
// let nested = [[2, 3], [4, 5], [6, 5], [9, 3], [6, 2]];
// undefined
// arr[0][2]
// VM3844:1 Uncaught ReferenceError: arr is not defined
//     at <anonymous>:1:1
// nested[0][2]
// undefined
// nested[0][1]
// 3
// nested[5][4];
// VM3940:1 Uncaught TypeError: Cannot read properties of undefined (reading '4')
//     at <anonymous>:1:10
// nested[4][1]
// 2


// // Practice Qu:-
// let tic_toe = [
//               ["x", null, "O"],
//               [null, "x", null],
//               ["O", null, "x"] 
// ]


// (3) [Array(3), Array(3), Array(3)]0: (3) ['x', null, 'O']1: (3) [null, 'x', null]2: (3) ['O', null, 'x']length: 3[[Prototype]]: Array(0)
// tic_toe[0][1].push("O");
// VM4091:1 Uncaught TypeError: Cannot read properties of null (reading 'push')
//     at <anonymous>:1:15
// (anonymous) @ VM4091:1
// tic_toe[0][1] = "O";
// 'O'
// tic_toe;
// (3) [Array(3), Array(3), Array(3)]0: (3) ['x', 'O', 'O']1: (3) [null, 'x', null]2: (3) ['O', null, 'x']length: 3[[Prototype]]: Array(0)

// Assignment:-
// 1.
let arr = [7, 9, 0, -2];
// let n = 3; 
// let positive = arr.slice(0, n);
// console.log("First positives elements of an array ", positive);

// 2.
let n = 3;

let last_num = arr.slice(-n);
console.log(last_num);

// 3.
let str = prompt("Enter a string");

if(length == 0) {
  console.log("string is empty.");
}else{
  console.log("String is not empty.");
}

// 4.
let str5 = "ApnaCoLlEgE";
let idx = 3;

if (str5[idx] == str5[idx].toLowerCase()) {
  console.log("Characer is lower case.");
}else{
  console.log("Character is not lowercase.");
}

// 5.
let str7 = prompt("please enter a string.");

console.log(`Original string = ${str7}`);
console.log(`string without spaces = ${str7.trim()}`);

// 6.
let str8 = ["hello", "a", 23, 64, 99, -6];
let item = 64;

if(arr.indexOf(item) != -1) {
  console.log("Element exists in array.");
}else {
  console.log("Element doesn't exist in array.");
}