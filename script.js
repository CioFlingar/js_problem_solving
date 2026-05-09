// Practice Problems

// Task-1: Write a function to convert temperature from Celsius to Fahrenheit.

// Solution of task-1:

// function celsiusToFahrenheit(celsius) {
//   fahrenheit = celsius * 1.8 + 32;
//   return fahrenheit;
// }

// console.log(
//   `${celsius} celsius is equal to ${celsiusToFahrenheit(10)} fahrenheit.`,
// );

// -------------------------------------------------------------------

// Task-2: You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5 | output: 2

// const numbers = [5, 5, 6, 11, 12, 98, 5];

// const userInput = parseInt(prompt("Type a valid positive number: "));
// let similarNums = [];

// for (num of numbers) {
//   if (num === userInput) {
//     similarNums.push(userInput);
//   }
// }

// console.log(`There is ${similarNums.length} total ${userInput}'s in the array.`);

// -------------------------------------------------------------------

// Task-3 Write a function to count the number of vowels in a string.

// const vowels = ["a", "e", "i", "o", "u"];

// const userInput = parseInt(prompt("What is your text? : "));
// wordList = [];

// for (word of user_input) {
//   if (word in vowels) {
//     wordList.push(word);
//   }
// }

// console.log(wordList.length);


//-----------------------------------------------------------------


// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming


function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const input = "I am learning Programming to become a programmer";
console.log(findLongestWord(input));
