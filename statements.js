// 1- Write a program to check a number is divisible by 7 or not.
// let num = 49;
// if(num % 7 === 0){
//     console.log("it is divisible by 7");
// }
// else{
//     console.log("it is not divisible by 7");
// }

// 2- Write a program to check a number is factor of 84 or not.
// let num = 7;

// if(84 % num === 0){
//     console.log("it is factorial of 84");
// }
// else{
//     console.log("it is not factorial of 84");
// }

// 3- Write a program to check a number is factor of 96 or not.
// let num = 2;

// if(num > 96){
//     console.log("input not valid!");
// }
// else if(96 % num === 0){
//     console.log("it is factorial of 96");
// }
// else{
//     console.log("it is not factorial of 96");
// }

// 4- Write a program to check a number is multiple of 3 or not.
// let num = 4;
// if(num % 3 === 0){
//     console.log("it is multiple by 3");
// }
// else{
//     console.log("it is not multiple by 3");
// }

// 5- Write a program to check a number is positive or not.
// let num = -8;
// if(num > 0){
//     console.log("it is positive number");
// }
// else{
//     console.log("it is not positive number");
// }

// 6- Write a program to check a number is having 4 at units place (984).
// let num = 984;
// let unit = Math.floor(num%10);
// if(unit === 4){
//     console.log("it is unit of 4");
// }
// else{
//     console.log("it is not unit of 4");
// }

// 7- Write a program to check a number is 3 digited number or not.
// let num = 111;
// let sum = 0;

// while(num > 0){
//     let digit = Math.floor(num%10);
//     sum = sum + 1;
//     num = Math.floor(num/10);
// }

// if(sum === 3){
//     console.log("it is 3-digited number!");
// }
// else{
//     console.log("it is not 3-digited number!");
// }

// 8- Write a program to print even or odd for a given number
// let num = 9;
// if(num % 2 === 0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }

// 9- Write a program to print the greatest number in given two numbers
// let num1 = 24;
// let num2 = 34;
// if(num1 > num2){
//     console.log(num1);
// }
// else{
//     console.log(num2);
// }

// 10- Write a program to print the least number in given two numbers
// let num1 = 24;
// let num2 = 34;
// if(num1 > num2){
//     console.log(num2);
// }
// else{
//     console.log(num1);
// }

// 11- Write a program to print the given two numbers in ascending order
// let num1 = 12;
// let num2 = 4;
// if(num1 < num2){
//     console.log(num1, num2);
// }
// else{
//     console.log(num2, num1);
// }

// 12- Write a program to print the given two numbers in descending order
// let num1 = 12;
// let num2 = 4;
// if(num1 > num2){
//     console.log(num1, num2);
// }
// else{
//     console.log(num2, num1);
// }

// 13- Write a program to print the greatest number in given three numbers
// let num1 = 200;
// let num2 = 84;
// let num3 = -6000;

// if(num1> num2){
//     if(num1> num3){
//         console.log(num1);
//     }
//     else{
//         console.log(num3);
//     }
// }
// else if(num2 > num1){
//     if(num2 > num3){
//         console.log(num2);
//     }
//     else{
//         console.log(num3);
//     }
// }
// else{
//     console.log(num3);
// }

// 14- Write a program to print the least number in given three numbers
// let num1 = 200;
// let num2 = 84;
// let num3 = -6000;

// if(num1 < num2 && num1 < num3){
//     console.log(num1);
// }
// else if(num2 < num1 && num2 < num3){
//     console.log(num2);
// }
// else{
//     console.log(num3);
// }

// 15- Write a program to print the given three numbers in ascending order
// let num1 = 20;
// let num2 = 10;
// let num3 = 30;

// if(num1 < num2 && num2 < num3){
//     console.log(num1, num2, num3);
// }
// else if(num2 < num1 && num1 < num3){
//     console.log(num2, num1, num3);
// }
// else{
//     console.log(num3, num2, num1);
// }

// 16- Write a program to print the given three numbers in descending order
// let num1 = 20;
// let num2 = 10;
// let num3 = 30;

// if(num1 > num2 && num2 > num3){
//     console.log(num1, num2, num3);
// }
// else if(num1 > num3 && num3 > num2){
//     console.log(num1, num3, num2);
// }
// else if(num2 > num1 && num1 > num3){
//     console.log(num2, num1, num3);
// }
// else if(num2 > num3 && num3 > num1){
//     console.log(num2, num3, num1);
// }
// else if(num3 > num1 && num1 > num2){
//     console.log(num3, num1, num2);
// }
// else{
//     console.log(num3, num2, num1);
// }

// 17-  Write a program to take marks of three subjects and print the grade of student
// let subject1 = 40;
// let subject2 = 60;
// let subject3 = 80;
// let totalMarks = Math.floor((subject1 + subject2 + subject3) / 3);

// if(totalMarks >= 80) console.log("A+ grade");
// else if(totalMarks >= 60) console.log("A grade");
// else if(totalMarks >= 40) console.log("B grade");
// else console.log("C grade");

// 18- Character Is Vowel or Consonant
// let str = "k";
// if(str === "a" || str === "e" || str === "i" || str === "o" || str === "u"){
//     console.log(`${str} is vowel`);
// }
// else{
//     console.log(`${str} is consonant`);
// }

// 19- A Character Is an Alphabet or Not
// let str = "u";
// if((str >= "a" && str <= "z") || (str >= "A" && str <= "Z")){
//     console.log("it is alphabet");
// }
// else{
//     console.log("it is not");
// }