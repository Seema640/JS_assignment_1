let cars1 = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  
  console.log(cars1);
  
  let cars2 = Array("Saab", "Volvo", "BMW");
  console.log(cars2);
  
  // [04] Arrays can store variety of objects
  let name = "Ram";
  let birthDate = new Date("April 04, 1995");
  let hobbies = ["Programming", "Watching Movies"];
  let otherInfo = {
      job: "Software Engineer",
      salary: 50000
  };
  
  let personInfo = [name, birthDate, hobbies, otherInfo];
  console.log(personInfo);
  
  // Accessing
  let ramHobbies = personInfo[2];
  console.log(ramHobbies);
  
  // Getting size
  console.log(personInfo.length);
  
  // New in Es6
  let numbers = [4, 9, 16, 25, 29];
  let just_greater_than_18 = numbers.find(function (value, index, array) {
      return value > 18;
  });
  console.log(just_greater_than_18);
  
  let index_of_value_just_greater_than_18 = numbers.findIndex(function (value, index, array) {
      return value > 18;
  });
  console.log(index_of_value_just_greater_than_18);
  
  console.log(numbers.findIndex((x) => x === 16));
  
  
  // Other methods
  let myArray = ["Hello", 45, true];
  
  // Accessing value inside an Array
  myArray[1]; // = 45
  
  // Arrays are mutable and of variable length. We can push data into it.
  myArray.push("World");
  myArray.length; // = 4
  
  // Add/Modify at specific index
  myArray[3] = "Hello";
  
  // Add and remove element from front or back end of an array
  myArray.unshift(3); // Add as the first element
 /* let someVar = myArray.shift(); // Remove first element and return it
  
  myArray.push(3); // Add as the last element
  let someVar = myArray.pop(); // Remove last element and return it
  
  // Join all elements of an array with semicolon
  let myArray0 = [32,false,"js",12,56,90];
  myArray0.join(";") // = "32;false;js;12;56;90"
  
  // Get subarray of elements from index 1 (include) to 4 (exclude)
  myArray0.slice(1,4); // = [false,"js",12]
  
  // Remove 4 elements starting from index 2, and insert there strings
  // "hi","wr" and "ld"; return removed subarray
  myArray0.splice(2,4,"hi","wr","ld"); // = ["js",12,56,90]
  // myArray0 === [32,false,"hi","wr","ld"]/*"use strict";

let dateObj = new Date();

console.log(dateObj);
console.log(dateObj.getFullYear());
console.log(dateObj.toString());
console.log(dateObj.toTimeString());

console.log("--------");

let date1 = new Date('December 17, 1995 03:24:00');
console.log(date1);

let date2 = new Date('1995-12-17T03:24:00');
console.log(date2);

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0

console.log(Date.now()); // A Number representing the milliseconds elapsed since the UNIX epoch."use strict";
let let1 = "Hello World";
let stringObj = String("Hello World");

console.log(let1);
console.log(stringObj);
console.log(stringObj.length);
console.log(stringObj.toUpperCase());
console.log(stringObj.toLowerCase());
console.log(stringObj.valueOf());

let let1 = false;
console.log(typeof let1);

let boolObj = Boolean(false);
console.log(typeof boolObj);

console.log(let1);
console.log(boolObj);
console.log(boolObj.toString());

console.log(boolObj.valueOf());


"use strict";

let i = Number(67.463098);

console.log(i);
console.log(i.toPrecision(3));
console.log(i.toString());

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);*/