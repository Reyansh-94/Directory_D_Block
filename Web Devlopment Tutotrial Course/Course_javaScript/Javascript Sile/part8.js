// 1.forEach Function:-
// let arr = [1, 2, 3, 4, 5, "banti kumar singh rajput"];

// function print(el) {
//   console.log(el);
// }

// arr.forEach(print);

// or

// arr.forEach(function(el) {
//   console.log(el);
// })

// or array function
// arr.forEach((el) => {
//   console.log(el)
// });

// array function 

// Student = [{
//   name:"Preetam Singh", 
//   marks: 99.9
// }, {
//   name:"Sanjay Singh",
//   marks: 95.8
// }, {
//   name:"Shradha Khapara",
//   marks: 98.7
// }];

// arr.forEach((Student) => {
//   console.log(Student);
//   consol, e.log(Student.name);
//   console.log(Student.marks);
// })

// 2.map method
// let num = [1, 2, 3, 4, 5];
// let double = num.map(function(el) {
//   return el*2;
// })

// console.log(double);

// let gpa = Student.map((el) => {
//   return el.marks/10;
// });

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 2, 9, 10, 12, 11]

// let ans = nums.filter((el) => {
//   return el<8;
// })

// console.log(ans);

// Every Function 
// console.log([1, 2, 3, 4].every( (el) => (el%2 == 0)));
// console.log([2, 4, 6, 8].every( (el) => (el%2 == 0)));
// console.log([1, 2, 3, 4].every( (el) => (el%2 == 0)));
// console.log([1, 5, 3, 7].every( (el) => (el%2 != 0)));

// Reduce function 
// let nums = [1, 2, 3, 4]
// let finalVal = nums.reduce((res, el) => {
//    console.log(res);
//    return res+el;
// }
//  );
// console.log(finalVal);

// Finding maxing value
// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];

// let max = -1;

// for(let i=0; i<arr.length; i++) {
//   if(max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log("MAximum value is ", max);


// or
// let max = arr.reduce((max, el) => {
//   if(max < el) {
//     return el;
//   }else{
//     return max;
//   }
// });
// console.log(max);


// Practice Question:-
// 1.Check if all numbers in our array are multiple of 10 or not.

// let nums = [10, 20, 30, 40, 50, 60, 70];
// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);

// 2.
// function getMin(nums) {
//   let min = nums.reduce((min, el) => {
//     if(min < el) {
//       return min;
//     }else{
//       return el;
//     }
//   });
//   return min;
// }
// let nums = [10, 20, 30, 40, 50, 60];

// Default Parameters 
// Giving a  default value to the arguments
// function sum(a, b=2) {
//   return a+b;
// }
// console.log(sum(0))

// spread function:-
//  let arr = [1, 2, 4, 8, 3, 0, 4, 5, 7, 2];
// // console.log(Math.max(1, 2, 4, 8, 3, 0, 4, 5, 7, 2));

// console.log(Math.min(...arr)); //...arr -> Its method spread method.
// console.log(Math.max(...arr));
// arr.push(-2)
// console.log(Math.min(...arr));
// console.log(..."Preetam singh");

// Spread => With array Literals
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// console.log(newArr);

// let chars = [..."hello"];
// console.log(chars);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];


// let nums = [...odd, ...even];
// let num = [...even, ...odd];
// console.log(nums);
// console.log(num);


//Spread:-> With Object Array 

// const data = {
// email:"ironman@gmail.com",
// password: "abcd",
// };

// const dataCopy = {...data, id: 123, country: "India"};

// let arr = [1, 2, 3, 4, 5]; //val
// let obj1 = {...arr}; //obj -> key:val
// let obj2 = {..."hello"};


// Rest function:-
// function sum(...args) {
//   // arguments
//   for(let i=0; i<args.length; i++) {
//     console.log("you gave us: ", args[i]);
//   }
// }

// function min() {
//   console.log(arguments)
//   console.log(arguments.length);
//   // arguments.push(1); //Error
// }


// or
// function sum(...args) {
//   return args.reduce((sum, el) => sum+el);
// }
 
// console.log(sum(6, 8, 7, 8));

// Function method:-
// function min(msg, ...args) {
//   console.log(msg);
//   return args.reduce((min, el) => {
//     if(min > el) {
//       return el;
//     }else {
//       return min;
//     }
//   });
// }

// Destructing method:-
// names = ["Tony", "Shiva", "Himanshu", "peter", "Suhani", "Vishal", "Priya", "Raghav", "MAhendr"];

// let [winnerup, runnerup, ...others] = names; //Store this variable its idx of names values


// Destructuring with Objects
// Student = {
//   name: "Preetam Singh", 
//   Gradugation: "Btech Software Engineer", 
//   age: 20,
//   Subjects: ["math", "Eng", "sci", "social Studies", "Computer Awarness"],
//   username: 1234,
//   password : "abcd",
//   city: "pune"
// }


// const {username, city:place = "Mumbai",  name, password: secret, ...othres} = Student;

// console.log(othres);

// Assgnment Question 8.0:-
//Qu1.
// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, curr) => acc+curr, 0);
// console.log(sum);

// let avg = sum / nums.length;
// console.log(avg);


// 2.
// let numbers = [2, 4, 6, 8, -2, -4];
// console.log(numbers.map((number) => number+5));

// 3.
// let arr = ["Sonlika", "Mahindra", "Truck", "Jeep", "Thar", "Creata"];
// console.log(arr.map((str) => str.toUpperCase()));

// // 4.
// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((v) => v*2),
// ];

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

// console.log(doubleAndReturnArgs([2], 10, 4));


// 5.

const mergeObject = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObject({a: 1, b: 2}, {c: 3, d: 4}));