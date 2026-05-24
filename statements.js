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

// 20- Leap year
// let year = 2002;
// if(year % 400 !== 0){
//     console.log("it is not leap year");
// }
// else if(year % 100 === 0){
//     console.log("it is leap year");
// }
// else{
//     console.log("it is not leap year");
// }

// 21- Write a program to check whether a date is valid or not?
// let day = 25;
// let month = 3;
// let year = 2024;

// let date = new Date(year, month-1, day);

// if(date.getFullYear() === year && date.getMonth() === month-1 && date.getDate() === day){
//     console.log("it is valid date");
// }
// else{
//     console.log("it is not valid date");
// }

// 22- Voting Eligibility Checker
// let voterAge = 19;
// if(voterAge >= 18){
//     console.log("u r eligible");
// }
// else{
//     console.log("u r not eligible");
// }

// 23- Check whether a number is negative, positive or zero.
// let num = 20;
// if(num === 0){
//     console.log("it is zero");
// }
// else if(num > 0){
//     console.log("it is positive number");
// }
// else{
//     console.log("it is negative number");
// }

// 24- Check whether a number is divisible by 5 and 11 or not.
// let num = 55;
// if(num % 5 === 0 && num % 11 === 0){
//     console.log("it is divisible");
// }
// else{
//     console.log("it is not divisible");
// }

// 25- Input any alphabet and check whether it is vowel or consonant.
// let letter = "b";
// if(["a","e","i","o","u"].includes(letter)){
//     console.log("it is vowel!");
// }
// else{
//      console.log("it is consonant!");
// }

// 26- Input any character and check whether it is the alphabet, digit or special character.
// let character = "#";
// if(character >= 0 || character <=0){
//     console.log("it is an digit!");
// }
// else if((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")){
//     console.log("it is an alphabet!");
// }
// else{
//     console.log("it is special character!");
// }

// 27- Check whether a character is an uppercase or lowercase alphabet.
// let character = "A";
// if(character.toUpperCase() === character){
//     console.log("Upper case!");
// }
// else{
//     console.log("Lower case!");
// }

// 28- Input week number and print weekday?
// let week = 5;
// if(week === 1){
//     console.log("monday");
// }
// else if(week === 2){
//     console.log("tuesday");
// }
// else if(week === 3){
//     console.log("wednesday");
// }
// else if(week === 4){
//     console.log("thursday");
// }
// else if(week === 5){
//     console.log("friday");
// }
// else if(week === 6){
//     console.log("saturday");
// }
// else if(week === 7) {
//     console.log("sunday");
// }
// else{
//     console.log("Invalid week number");
// }

// 29- Input month number and print number of days in that month.
// let month = 2;
// if(month < 1 || month > 12){
//      console.log("Invalid month");
// }
// if([1,3,5,7,8,10,12].includes(month)){
//     console.log("31 days");
// }
// else if(month === 2){
//     console.log("28 or 29 days");
// }
// else{
//     console.log("30 days");
// }

// 30- Count the total number of notes in a given amount.
// let amount = 2890;
// let count = 0;

// count += Math.floor(amount / 500);
// amount = amount % 500;
// count += Math.floor(amount / 200);
// amount = amount % 200;
// count += Math.floor(amount / 100);
// amount = amount % 100;
// count += Math.floor(amount / 50);
// amount = amount % 50;
// count += Math.floor(amount / 10);
// amount = amount % 10;
// count += Math.floor(amount / 5);
// amount %= 5;
// count += Math.floor(amount / 2);
// amount %= 2;
// count += amount;

// console.log("Total Notes:", count);

// 31- Input angles of a triangle and check whether the triangle is valid or not.
// let angle1 = 60;
// let angle2 = 60;
// let angle3 = 60;

// if(angle1 > 0 && angle2 > 0 && angle3 > 0 && angle1 + angle2 + angle3 === 180){
//     console.log("it is valid triangle!");
// }
// else{
//     console.log("it is not valid triangle!");
// }

// 32- Check whether the triangle is an equilateral, isosceles or scalene triangle.
// let angle1 = 60;
// let angle2 = 60;
// let angle3 = 60;

// if(angle1 + angle2 + angle3 !== 180){
//     console.log("Not a valid triangle");
// }
// else if((angle1 === angle2 && angle2 === angle3)){
//     console.log("it is equilateral triangle!");
// }
// else if((angle1 === angle2 && angle2 !== angle3) || (angle2 === angle3 && angle3 !== angle1) || (angle3 === angle1 && angle1 !==angle2)){
//     console.log("it is Isosceles triangle!");
// }
// else{
//     console.log("it is Scalene triangle!");
// }