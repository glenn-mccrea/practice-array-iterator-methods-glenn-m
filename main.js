/* Instructions
Complete each of the following tasks by writing code to manipulate the provided
arrays. Your solution should only use the array methods covered in the lesson:
push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(),
concat(), slice(), splice(), sort(), and reverse(). Submit the final version of
the arrays as specified after each task.
Instructions
Task 1: Using forEach()
    1. Create an array of five of your favorite cities.
    2. Use forEach( ) to log each city name to the console in uppercase.
    3. Submit the output format by adding comments to the code.
Task 2: Transforming with map()
    1. Create an array called numbers with the numbers 1-5.
    2. Use map( ) to create an array where each number is squared. Call this array
    squares.
    3. Log the new array.
    4. Submit the output by adding comments to the code.
Task 3: Filtering with filter()
    1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and
    100.
    2. Use filter ( ) to create a new array containing only the scores greater than or
    equal to 80. Call this array highScores.
    3. Log the new array.
    4. Submit the output by adding comments to the code.
Task 4: Finding with find() and findIndex()
    1. Create an array called favoriteFood that contains a list of your favorite
    dishes. Try to add 5 or 6 elements.
    2. Use find() to locate the first food with more than 4 letters.
    3. Use findIndex( ) to find the index of that fruit */

//task1
let cities = ["Chattanooga", "Nashville", "Atlanta", "St. Louis", "Chicago"];

cities.forEach((city) => console.log(`AWESOME: ${city.toUpperCase()}`));
//Output:

/* AWESOME: CHATTANOOGA;
AWESOME: NASHVILLE;
AWESOME: ATLANTA;
AWESOME: ST.LOUIS;
AWESOME: CHICAGO; */

//task 2
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((num) => num * num);
console.log(squares);
//Output:

/* [1, 4, 9, 16, 25] */

//task 3
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter((score) => score >= 80);
console.log(highScores);
//Output:

/* [85, 90, 100] */

//task 4
let favoriteFood = [
  "Burgers",
  "Ribs",
  "Steak",
  "Apples",
  "Raisins",
  "Peanutbutter",
];
let favorite = favoriteFood.find((word) => word === "Apples");
let favoriteIndex = favoriteFood.indexOf((word) => word === "Apples");
console.log(`${favorite}, index: ${favoriteIndex}`);
