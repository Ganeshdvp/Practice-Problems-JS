// Basics Problems

// 1- Write a program to print the following output for the given values a=10,b=20 Output expected is: 10+20=30 10-20=-10 10*20=200 10/20=0 10%20=10

// let a = 10;
// let b= 20;
// function operations(a,b,operator){
//     return a + operator + b + "=" + eval(a + operator + b); 
// }
// console.log(operations(a,b,"+"));
// console.log(operations(a,b,"-"));
// console.log(operations(a,b,"*"));
// console.log(operations(a,b,"/"));
// console.log(operations(a,b,"%"));


// 2- Write a program to print the following for a given value a=3; Output expected: 3*1=3 3*2=6 3*3=9 3*4=12 3*5=15 3*6=18

//let a = 3;
// for(let i=1; i<=10; i++){
//     console.log(a + "*" + i + "=" + (a*i))
// }

// function mutliply(b){
//     if(b > 10) return 0;  // base case

//     console.log(3 + "*" + b + "=" + (3*b));
//     return mutliply(b+1);   // recrusive call
// }
// console.log(mutliply(1));


// 3- Given a variable var x = 23. Increment its value by 1.

// var x = 23;
// function inc (x){
//     return ++x;
// };
// console.log(inc(x));


// 4- Print the sum of 12 and 23 using the addition operator.
// console.log(12 + 23);

// 5- Print the difference of 52 and 36 using the subtraction operator.
// console.log(52 - 36);

// 6- Print the product of 23 and 56 using the multiplication operator.
// console.log(23 * 56);

// 7- Divide 36 by 5 and print the output by using the division operator.
// console.log(36/ 5);

// 8- Divide 67 by 4 and print the quotient.
// console.log(67/4);

// 9- Divide 48 by 7 and print the remainder.
// console.log(48%7);

// 10- Print the value of 2 raised to the power of 6.
// console.log(2**6);

//11- Given var x = “Edupoly” and var y = “Training”. Print “Edupoly Training” in the console.
// var x = "Edupoly";
// var y = "Training";
// console.log(x + ' ' + y);

//12- Find the perimeter of a square having each side 4cm.
// var a = 4;  // perimeter of square => P=4a
// console.log(4*a);

//13- Find the perimeter of a rectangle of length 50cm and breadth 35cm.
// var l = 50;
// var b = 35;
// console.log(2*l + 2*b);

// 14- Find the circumference of a circle of radius 20cm. (Take π = 3.14)
// var r = 20;
// console.log((2 * 3.14 * r).toFixed(3));

// 15- Find the area of a square having each side 12cm.
// var a = 12;
// console.log(a*a);

// 16- Find the area of a rectangle of length 25cm and breadth 16cm.
// var l = 25;
// var b = 16;
// console.log(l*b);

// 17- Find the area of a circle of radius 3.75cm.
// var r = 3.75;
// console.log(3.14 * (r*r));

// 18- Given the marks of 3 subjects as 67,48 and 74. Print the average marks of the 3 subjects.
// var a = 67;
// var b = 48;
// var c = 74;
// let avg = (a+b+c)/3
// console.log(avg);

// 19- Given the cost of a product as ₹538.56, add 18% GST to it and print the total cost.
// var p = 538.56;
// var discount = 18;
// var discountResult = (p * discount)/100;
// console.log((discountResult + p).toFixed(3));

// 20- Given a variable var x = 48. Decrement its value by 1.
// var x = 48;
// function dec(x){
//     return --x;
// }
// console.log(dec(x))

// 21- Write a script to swap two numbers
// var a = 10;
// var b = 20;
// var temp = a;  // temp variable
// a=b;
// b=temp
// console.log(a,b)

// 22- Write a script to swap two numbers without using 3rd variable (please use *,%,/ not + and -)
// var a = 10;
// var b = 20;
// a = a + b;  // 20+10 = 30
// b = a - b; // 30 - 20 = 10
// a = a - b;  // 30 - 10 = 20
// console.log(a,b)

// var a = 10;
// var b = 20;
// [a,b] = [b,a]
// console.log(a,b)

// var a = 10;
// var b = 20;
// a = a ^ b  // 30
// b = a ^ b  // 10
// a = a ^ b  // 30-10 = 20
// console.log(a,b)

// 23- Write a program to print the reminder of a division
// var a = 100;
// var b = 2;
// console.log(a%b)

// 24- Write a program to print the simple interest rate of given P T R values
// var p = 100;
// var t = 200;
// var r = 20;
// console.log((p*t*r)/100);

// 25- Write a program to print the max of given two numbers using ternary operator
// var a = 100;
// var b = 200;
// const max = a>b ? a : b;
// console.log(max)

// 26- Write a program to print the max of given three numbers using ternary operator
// var a = 100;
// var b = 200;
// var c = 50;
// const max = (a>b ? a : b ) > c ? (a>b ? a : b) : c
// console.log(max);

// 27- Find the area of a square for given length of a side
// var l = 12;
// var area = l*l;
// console.log(area);

// 28- Find the area of a rectangle for given length and breadth
// var l = 25;
// var b = 16;
// var area = l*b;
// console.log(area)

// 29- Find the area of a triangle for given base and height
// var base = 10;
// var height = 8;
// var area = 0.5 * base* height;
// console.log(area)

// 30- Check a given number is even or not using ternary operator
// var a = 12;
// const num = a%2 === 0 ? "even" : "odd";
// console.log(num)

// 31- Check a given number is odd or not using ternary operator
// var a = 9;
// const num = a%2 === 0 ? "even" : "odd";
// console.log(num)

// 32- Check a given number is positive or not using ternary operator
// var a = -2;
// const num = a>=0 ? "positive" : "negative"
// console.log(num)

// 33- Check a given number is multiple of 4 or not using ternary operator
// var a = 16;
// const num = a%4 === 0 ? "divisible" : "not divisible";
// console.log(num);

// 34- Print the (a+b)^2 for given a and b values
// var a = 10;
// var b = 20;
// const res = (a+b)*(a+b);
// console.log(res);

// 35- Print the (a+b)^3 for given a and b values
// var a = 10;
// var b = 20;
// const res = (a+b)**3;
// console.log(res);

// 36- Print the (a+b+c)^2 for given a,b and c values
// var a = 10;
// var b = 20;
// var c = 30;
// const res = (a+b+c)**2;
// console.log(res);

// 37- Ramesh’s basic salary is input through the keyboard. His dearness allowance is 40% of basic salary, and house rent allowance is 20% of basic salary. Write a program to calculate his gross salary.
// var basicSalary = 20000;
// var dearnessAllowance = (basicSalary * 40) / 100;
// var houseRent = (basicSalary * 20) / 100;
// var grossSalary = basicSalary + dearnessAllowance + houseRent;
// console.log(grossSalary)

// 38- The distance between two cities (in km.) is input through the keyboard. Write a program to convert and print this distance in meters, feet, inches and centimeters.
// var cityOne = 20;
// var cityTwo = 10;
// var meters = (cityOne - cityTwo) * 1000;  // 1km = 1000m
// var feet = meters * 3.28084;    // 1meter = 3.28084feet
// var inches = (feet * 12).toFixed(2);   // 1feet = 12inches
// var centimeters = meters * 1000;    // 1meter = 1000cm
// console.log(meters, feet, inches, centimeters);

// 39- If the marks obtained by a student in five different subjects are input through the keyboard, find out the aggregate marks and percentage marks obtained by the student. Assume that the maximum marks that can be obtained by a student in each subject is 100.
// var subjectOne = 20;
// var subjectTwo = 30;
// var subjectThree = 40;
// var subjectFour = 50;
// var subjectFive = 60;
// // aggregate = sum of all marks
// var aggregate = subjectOne + subjectTwo + subjectThree + subjectFour + subjectFive;
// // percentage = total marks/ max.marks * 100
// var percentage = (aggregate / 500 ) * 100;
// console.log(percentage + '%', aggregate);

// 40- Temperature of a city in Fahrenheit degrees is input through the keyboard. Write a program to convert this temperature into Centigrade degrees.
// var fahrenheit = 98.6;
// var centigrade = (5/9) * (fahrenheit - 32);
// console.log(centigrade)

// 41- The length & breadth of a rectangle and radius of a circle are input through the keyboard. Write a program to calculate the area & perimeter of the rectangle, and the area & circumference of the circle.
// var l = 20;
// var b = 30;
// var r = 5;
// var area = l*b;
// var perimeter = 2 * (l+b);
// var areaCircle = 3.14 * r**2;
// var circumference = (2 * 3.14 * r).toFixed(2);
// console.log(area, perimeter, areaCircle, circumference);

// 42- Two numbers are input through the keyboard into two locations C and D. Write a program to interchange the contents of C and D.
// var c = 20;
// var d = 40;
// [c,d] = [d,c]
// console.log(c,d)

// 43- If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits. (Hint: Use the modulus operator ‘%’)\
// var num = 12345;
// var sum = 0;
// while(num > 0){
//     sum+= num % 10;
//     num = Math.floor(num / 10);
// }
// console.log(sum);

// var num = 12345;
// function sumDigits(num){
//     if(num === 0) return 0;
//     return (num % 10) + sumDigits(Math.floor(num / 10));
// }
// const res = sumDigits(num);
// console.log(res)

// 44- If a five-digit number is input through the keyboard, write a program to reverse the number.
// var num = 12345;
// var reverse = 0;
// while(num>0){
//     var digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(reverse);

// var num = 12345;
// function reverseFn(num, rev=0){
//     if(num === 0) return rev;
//     return reverseFn(Math.floor(num / 10), rev * 10 + (num % 10));
// }
// const res = reverseFn(num);
// console.log(res);

// 45- If a four-digit number is input through the keyboard, write a program to obtain the sum of the first and last digit of this number.
// var num = 12345 // 1+5 = 6   ----> it will work only for four digits
// var sum = 0;
// var firstDigit = Math.floor(num / 10000);
// var lastDigit = num % 10;
// sum = firstDigit + lastDigit;
// console.log(sum);

// var num = 123456789;
// var sum = 0;
// var lastDigit = num % 10;
// while(num >= 10){
//     num = Math.floor(num / 10);
// }
// var firstDigit = num;
// sum = firstDigit + lastDigit;
// console.log(sum);

// var num = 12345;
// var lastDigit = num % 10;
// var sum = 0;
// function getSum(num){
//     if(num <= 10) return num;
//     return getSum(Math.floor(num / 10))
// }
// var firstDigit = getSum(num);
// sum = firstDigit + lastDigit;
// console.log(sum);

// 46- In a town, the percentage of men is 52. The percentage of total literacy is 48. If total percentage of literate men is 35 of the total population, write a program to find the total number 48 Let Us C of illiterate men and
// function C(totalPopulation, totalMenPercentage, totalLiteracyMen, totalLiteracy, ){
//     let illiterateMen = totalMenPercentage - totalLiteracyMen  // 52 - 35 = 17%
//     let illiterateWomen = (100 - totalMenPercentage) - (totalLiteracy - totalLiteracyMen);
//     let illiterateMenRes = Math.floor((illiterateMen/100) * totalPopulation);
//     let illiterateWomenRes = Math.floor((illiterateWomen/100) * totalPopulation);

//     return [illiterateMenRes, illiterateWomenRes]

// }
// const res = C(80000, 52, 35, 48);
// console.log(res[0]);
// console.log(res[1]);

// 47- A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
// let input = 100;
// let temp = 0;
// let fifthy = 0;
// let tens = 0;
// let ones = 0;

// for(let i=1; i<=temp+1; i++){
//     if(i*100 <= input){
//         temp = i;
//     }
// }
// for(let i=1; i<=fifthy+1; i++){
//     if((temp*100) + (i*50) <= input){
//         fifthy = i;
//     }
// }
// for(let i=1; i<=tens+1; i++){
//     if((temp*100) + (fifthy*50) + (i*10) <= input){
//         tens = i;
//     }
// }
// for(let i=1; i<=ones+1; i++){
//     if((temp*100) + (fifthy*50) + (tens*10) + (i*1) <= input){
//         ones = i;
//     }
// }
// console.log("100's are : " , temp);
// console.log("50's are : " , fifthy);
// console.log("10's are : " , tens);
// console.log("1's are : " , ones);

// let input = 880;          --------> Optimized one
// let hundreds = Math.floor(input/100);
// input = input % 100;
// let fifthy = Math.floor(input/50);
// input = input % 50;
// let tens = Math.floor(input/10);
// input = input % 10;

// console.log("100's are : " , hundreds);
// console.log("50's are : " , fifthy);
// console.log("10's are : " , tens);

// 48- If the total selling price of 15 items and the total profit earned on them is input through the keyboard, write a program to find the cost price of one item.
// let sellingPrice = 15000;
// let totalProfits = 3000;
// let totalCostPrice = Math.floor(sellingPrice - totalProfits);
// let priceOfEachItem = Math.floor(totalCostPrice / 15);
// console.log("each product price is :", priceOfEachItem);


