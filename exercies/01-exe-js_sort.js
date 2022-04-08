// ONLY USE THE .sort() METHOD FOR THIS EXERCISE UNLESS MENTIONED

//Exercise 1: Using the array (arrOfStrings), sort an array from shortest string to the longest.
// DO NOT mutate the original array
const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

const longestStr = (arr) => {
   //your code...
}

let longestStrings = longestStr(arrOfStrings)
console.log(longestStrings)

//ANSWER should be ['yo', 'cat', 'wolf', 'animal']

//Exercise 2: Using the same arr (arrOfStrings), sort its elements alphabetically.
// DU NOT mutate the original array

const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

const sortedStr = (arr) => {
   //your code...
}

let sortedStrings = sortedStr(arrOfStrings)
console.log(sortedStrings)

//ANSWER should be  ['animal', 'cat', 'wolf', 'yo']

// COMPLEX EXERCISE 3: Sort the  objects in the array by age in ascending order,
// if the age is the same sort them alphabetically in descending order
// Please do not mutate the original array

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 30 },
  { name: 'Bill', age: 19 }
];

const sortByAge = (arr) => {
   //your code...
}

let output = sortByAge(people)
console.log(output)
 
/* ANSWER should be
 [
  { name: 'Bill', age: 19 },
  { name: 'Allen', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Stuart', age: 30 },
];
*/

// Sort the following array of objects by title value: [source-w3resource](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-25.php)

const library = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
   {
     author: 'Suzanne Collins',
     title: 'Mockingjay: The Final Book of The Hunger Games',
     libraryID: 3245
   }
 ];
 
 function compareToSort(x, y) {
   //your code...
 }
 
 console.log(library.slice().sort(compareToSort));
 
 // [ { author: 'Suzanne Collins',
   //   title: 'Mockingjay: The Final Book of The Hunger Games',
   //   libraryID: 3245 },
   // { author: 'Bill Gates',
   //   title: 'The Road Ahead',
   //   libraryID: 1254 },
   // { author: 'Steve Jobs',
   //   title: 'Walter Isaacson',
   //   libraryID: 4264 } ]