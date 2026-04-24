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