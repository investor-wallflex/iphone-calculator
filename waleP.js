let carName = "Volvo";
console.log(carName);

//let x = 50
//console.log(x);




let x = 5
let y = 10
let total = x + y
console.log(total)

//let x = 5
//let y = 10
//let total = x + y
//alert(total)

let firstName = "john", lastNAME = "Doe", age = 35
console.log(firstName, lastNAME, age)

//let x = 5, y = 10, z = x + y
//console.log(z)

//let x = 10, y = 5;
//alert(10 * 5)

//alert(10 / 2)

//let waleAge = 32, tundeAge = 28, idayatAge = 24;
//console.log(waleAge,tundeAge,idayatAge)


//alert(2 % 5)

//let waleAge = Number(window.prompt("enter waleAge"));
//let tundeAge = Number(window.prompt("enter tundeAge"))
//alert(waleAge + tundeAge)


let stock = [
    { brandNameOne: 'tecno', model: 2014, quantity: 48, amount: 400, },
    { brandNameTwo: 'hissense', model: 2015, quantity: 8, amount: 1400, },
    { brandNameThree: 'playstion4', model: 2016, quantity: 20, amount: 400, },
    { brandNameFour: 'lemon', model: 2017, quantity: 40, amount: 40, },
]
let stocks = stock.filter((availablestocks) => {
    return availablestocks.amount > 300 && availablestocks.model < 2017
})

let stocksTwo = stock.reduce((sum, total) => {
    return sum + total.amount
}, 0)
console.log(stocksTwo)


// Conditions
// if (15 > 10) {
//   console.log("Na 15 big pass");
// }

// if (15 > 10) {
//   console.log("15 is the gratest");
// } else {
//   console.log("Na Lie");
// }

// if (10 > 20) {
//   console.log("The first condition is correct");
// } else if (10 == 20) {
//   console.log("The second condition is correct");
// } else if (10 === 20) {
//   console.log("The Third condition is correct");
// } else {
//   console.log("This is an invalid Number");
// }

// let numOne = parseInt(prompt("Enter your first Value"));
// let numTwo = parseInt(prompt("Enter your second value"));
// let numThree = parseInt(prompt("Enter your second value"));
// let numFour = parseInt(prompt("Enter your second value"));

// if (numOne > numTwo) {
//   alert(`${numOne} 1 is the greatest number`);
// } else {
//   alert(`${numTwo} 2 is the greatest Number`);
// }

// if (
//   numOne === Number &&
//   numOne > numTwo &&
//   numOne > numThree &&
//   numOne > numFour
// ) {
//   alert(`${numOne} 1 is the greatest number`);
// } else if (numTwo > numOne) {
//   alert(`${numTwo} 2 is the greatest Number`);
// } else if (numOne === numTwo) {
//   alert("You have equal values");
// } else {
//   alert("Invalid value");
// }

// 1. Write a javascript program to tell a user the highest of four numbers

// 2. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// 3. Write a program to tell a student his Grade once the student enters his score: 75 - 100 should be Grade A, 60 - 74 = Grade B, 50 - 59 = Grade C, 40 - 49 = Grade D, 35 - 39 = Grade E 0 - 34 = Olodo 🥲 You failed

// 4. Write a Program that caculate the body mass index and categorise it the formular for the BMI weight is: Weight / (height * height)

//Loops
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let j = 300; j <= 500; j++) {
//   console.log(j);
// }

for (let k = 1; k <= 12; k++) {
    console.log(`2 x ${k} = ${2 * k}`);
}

// Function
