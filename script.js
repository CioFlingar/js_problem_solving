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

/*
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
*/
//---------------------------------------------------------------------

// Task-5:
// Generate a random number between 10 to 20.
/*
function getRandomNumber() {
  return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

console.log(getRandomNumber());
*/

//---------------------------------------------------------------------

// Task -6:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

/*
function findLowest(arr) {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    return lowest;
}

const heights2 = [167, 190, 120, 165, 137];
console.log(findLowest(heights2)); // Output: 120
*/

//---------------------------------------------------------------------

// Task -7:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

/*
function smallestName(friends) {
  let smallest = friends[0];
  for (let i = 1; i < friends.length; i++) {
    if (friends[i].length < smallest.length) {
      smallest = friends[i];
    }
  }
  return smallest;
}

const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
console.log(smallestName(friends)); // Output: ron
*/

//---------------------------------------------------------------------

// Task-8:
// Your task is to calculate the total budget required to buy electronics:
//  laptop = 35000 tk
//  tablet = 15000 tk
//  mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets,
// and mobile and returns the total money required.

/*
function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity,
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalLaptopCost = laptopQuantity * laptopPrice;
  const totalTabletCost = tabletQuantity * tabletPrice;
  const totalMobileCost = mobileQuantity * mobilePrice;

  const totalBudget = totalLaptopCost + totalTabletCost + totalMobileCost;
  return totalBudget;
}

console.log(calculateElectronicsBudget(1, 2, 1)); // Output: 85000
*/

//---------------------------------------------------------------------

// Task-9:
// You are given an array of phone objects, each containing information about the model, brand, and price.
// Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and
// returns the average price of phone.
// Input
//  const phones = [
//  { model: "PhoneA", brand: "Iphone", price: 95000 },
//  { model: "PhoneB", brand: "Samsung", price: 40000 },
//  { model: "PhoneC", brand: "Oppo", price: 26000 },
//  { model: "PhoneD", brand: "Nokia", price: 35000 },
//  { model: "PhoneE", brand: "Iphone", price: 105000 },
//  { model: "PhoneF", brand: "HTC", price: 48000 },
//  ];

/*
function findAveragePhonePrice(phones) {
  if (phones.length === 0) return 0;

  let totalPrice = 0;
  for (const phone of phones) {
    totalPrice += phone.price;
  }

  const average = totalPrice / phones.length;
  return average;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(findAveragePhonePrice(phones).toFixed(2)); // Output: 58166.67

*/

//---------------------------------------------------------------------

// Task -10: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then
// adding the result to the starting salary. Now calculate is the total salary has to be provided by the company
// in a month.
// const employees = [
//  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//  ];

function calculateTotalMonthlySalary(employees) {
  let totalCompanyMonthlySalary = 0;

  for (const employee of employees) {
    const currentAnnualSalary =
      employee.starting + employee.experience * employee.increment;

    const monthlySalary = currentAnnualSalary / 12;

    totalCompanyMonthlySalary += monthlySalary;
  }

  return totalCompanyMonthlySalary;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const totalMonthlyExpense = calculateTotalMonthlySalary(employees);
console.log(totalMonthlyExpense.toFixed(2)); // Output: 12416.67
