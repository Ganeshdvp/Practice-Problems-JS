// 1- Write a function which can return the sum of two numbers.
// function add(a,b){
//     return a + b
// }
// var sum = add(45,67);
// console.log(sum);

// 2- Write a function which can return the greatest of the three numbers passed in arguments?
// function greatestNum(a,b,c){
//     return a > b ? (a>c ? a : c) : (b>c ? b : c)
// }
// var res = greatestNum(10,20,30);
// console.log(res);

// 3- Write a function which can print the given arguments in ascending order?
// function sortNums(a,b,c){
//     let first, second, third;

//     if(a<=b && a<=c){
//         first = a;

//         if(b <= c){
//             second = b;
//             third = c;
//         }
//         else{
//             second = c
//             third = b;
//         }
//     }
//     else if(a >= b && b <= c){
//         first = b;

//         if(a>= c){
//             second = c;
//             third = a;
//         }
//         else{
//             second = a;
//             third = c;
//         }
//     }
//     else{
//         first = c;

//         if(a <= b){
//             second = a;
//             third = b;
//         }
//         else{
//             second = b;
//             third = a;
//         }
//     }
//     return [first,second,third]

// }
// var res = sortNums(10,5,20);
// console.log(res);

// 4- Write a function which can return the factorial of a number.
// function fact(a){
//     if(a === 0) return 1;
//     return a * fact(a-1);
// }
// var factorial = fact(4);
// console.log(factorial);

// 5- Write a function which can to return the reverse of a given number.
// function rev(a){
//     let reverse = 0;

//     while(a > 0){
//         let digit = Math.floor(a%10);
//         reverse = reverse * 10 + digit;
//         a = Math.floor(a/10);
//     }
//     return reverse;
// }
// var reverse = rev(1234);
// console.log(reverse);

// 6- Write a function which can check a given number is prime number or not?
// function prime(num){
//     if(num<=1) return console.log("it is not prime");

//     for(let i=2; i<num; i++){
//         if(num%i === 0){
//             console.log("it is not prime");
//             return;
//         }
//     }
//     console.log("it is prime");
// }
// prime(7)

// 7- Write a function which can check a given number is palindrome or not?
// function palindrome(num){
//     let orignalNum = num;
//     let reverse =0;

//     while(num > 0){
//         let digit = Math.floor(num%10);
//         reverse = reverse * 10 + digit;

//         num = Math.floor(num/10);
//     }
//     if(orignalNum === reverse){
//         console.log("it is palidrame");
//     }
//     else{
//         console.log("it it not!");
//     }
// }
// palindrome(121);

// 8- Write a function to return the number of digits in the given number?
// function digits(num){
//     let count = 0;

//     while(num > 0){
//         let digit = Math.floor(num%10);
//         count ++;
//         num = Math.floor(num/10);
//     }
//     return count;
// }
// var res = digits(125);
// console.log(res);

// 9- Write a function that prints all even numbers between 1 and 20.?
// function even(){
//     let start = 1;
//     let end = 20;

//     for(let i = start; i <= end; i++){
//         if(i%2 === 0){
//             console.log(i);
//         }
//     }
// }
// even();

// 10- Write a function which can add two numbers?
// function add(a,b){
//     return a+b
// }
// const res = add(5,9);
// console.log(res);

// 11- Write a function which can display the greatest of the three numbers passed in arguments.?
// function greatest(a,b,c){
//     let greatest = a;

//     if(greatest < c) greatest = c;
//     if(greatest < b) greatest = b;

//     return greatest;
// }
// const res = greatest(500,15,200)
// console.log(res);

// 12- Write a function which can display the given arguments in ascending order?
// function sort(...args){
//     return [...args].sort((i,j)=> i-j)
// }
// const res = sort(10,5,20,4);
// console.log(res);

// 13- Write a function which can display the factorial of a number?
// function factorial(n){
//     if(n === 1) return 1;
//     return n * factorial(n-1)
// }
// const res = factorial(4);
// console.log(res);

// 14- Write a function which can to display the reverse of a given number?
// function rev(num){
//     let reverse = 0;

//     while(num > 0){
//         let digit = Math.floor(num%10);
//         reverse = reverse * 10 + digit;
//         num = Math.floor(num/10);
//     }
//     return reverse;
// }
// const res = rev(123);
// console.log(res);

// 15- Write a function which can check a given number is armstrong number or not?
// function armstrong(num){
//     let temp = num;
//     let temp2 = num;
//     let count = 0;
//     let sum = 0;

//     while(temp > 0){
//         count++;
//         temp = Math.floor(temp/10);
//     }

//      while(temp2 > 0){
//         let digit = Math.floor(temp2%10);
//         sum = sum + (digit ** count);
//         temp2 = Math.floor(temp2/10);
//     }
//     if(sum === num){
//         console.log("it is");
//     }
//     else{
//         console.log("it it not");
//     }
// }
// armstrong(153);

// 16- Write a function which can return the factorial of a number to another variable?
// function factorial(n){
//     let fact = 1;

//     for(let i = n; i>=1; i--){
//         fact = fact * i
//     }

//     return fact;
// }
// const res = factorial(4);
// console.log(res);

// 17- Write a function that returns an array of all even numbers between 1 and 20?
// function even(num){
//     let arr = [];
//     for(let i=2; i<=20; i++){
//         if(i%2 === 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// const res = even(1234);
// console.log(res);

// 18- Cube of any number using the function?
// function cube(num){
//     return Math.pow(num,3)
// }
// const res = cube(4);
// console.log(res);

// 19- Find diameter, circumference and area of a circle using functions?
// let radius = 5;
// function diameter(r){
//     return 2 * r
// }
// function circumference(r){
//     return 2 * Math.PI * r
// }
// function area(r){
//     return Math.PI * r * r
// }
// console.log(diameter(radius));
// console.log(circumference(radius));
// console.log(area(radius));

// 20- Maximum and minimum between two numbers using functions.?
// function numbers(a,b){
//     let max = a > b ? a : b;
//     let min = a < b ? a : b;

//     console.log("Maximum =", max);
//     console.log("Minimum =", min);
// }
// numbers(10,20)

// 21- Check whether a number is even or odd using functions?
// function check(num){
//     if(num === 0) return console.log("it is zero");
//     if(num % 2 === 0){
//         console.log("it is even");
//     }
//     else{
//         console.log("it is odd");
//     }
// }
// check(0);

// 22- Check whether a number is prime, Armstrong or perfect number using functions?
// let num = 10;
// function prime(num){
//     if(num <= 1) return console.log("it is not prime");

//     for(let i=2; i<num; i++){
//         if(num%i === 0){
//             console.log("it it not prime");
//             return;
//         }
//     }
//     console.log("it is prime");
// }
// function armstrong(num){
//     if(num < 10) return console.log("it it armstrong");
//     let orignalNum = num;
//     let temp = num;
//     let count = 0;
//     let sum = 0;
//     while(temp > 0){
//         count++;
//         temp = Math.floor(temp/10);
//     }
//     temp = num;
//     while(temp > 0){
//         let digit = Math.floor(temp%10);
//         sum += (digit ** count);
//         temp = Math.floor(temp/10);
//     }
//     if(orignalNum === sum){
//         console.log("it is armstorng");
//     }
//     else{
//         console.log("it is not armstorng");
//     }
// }
// function perfectNum(num){
//     if(num < 0 ) return console.log("it it not perfect");
//     let sum = 0;

//     for(let i=1; i<=Math.floor(num/2); i++){
//         if(num%i === 0){
//             sum += i;
//         }
//     }
//     if(sum === num){
//         console.log("it is perfect")
//     }
//     else{
//         console.log("it it not perfect");
//     }
// }
// prime(num);
// armstrong(num);
// perfectNum(num);

// 23- Find all prime numbers between the given interval using functions?
// function isPrime(num){
//     if(num <= 1) return false;

//     for(let i = 2; i<num; i++){
//         if(num%i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// function printPrimes(start,end){
//     for(let i=start; i<=end; i++){
//         if(isPrime(i)){
//             console.log(i);
//         }
//     }
// }
// printPrimes(10,50);

// 24- check whether a given number is strong number or not?
// function factorial(num){
//     let fact = 1;
//     for(let i=1; i<=num; i++){
//         fact *= i
//     }
//     return fact;
// }
// function sum(num){
//     let originalNum = num;
//     let sum = 0;
//     while(num > 0){
//         let digit = Math.floor(num%10);
//         let fact = factorial(digit);
//         sum += fact;
//         num = Math.floor(num/10);
//     }
//     if(sum === originalNum){
//         console.log("it is strong number");
//     }
//     else{
//         console.log("it is not strong number");
//     }
// }
// sum(145);

// 25- Print all strong numbers between the given interval using functions?
// function factorial(num){
//     let fact = 1;
//     for(let i=1; i<=num; i++){
//         fact *= i
//     }
//     return fact;
// }
// function sum(start,end){
//     for(let i=start; i<=end; i++){
//         let sum = 0;
//         let num = i;
//         while(num > 0){
//             let digit = Math.floor(num%10);
//             let fact = factorial(digit);
//             sum += fact;
//             num = Math.floor(num/10);
//         }
//         if(sum === i){
//             console.log(i);
//         }
//     }

// }
// sum(1,146);

// 26- Armstrong numbers between the given interval using functions?
// function countNums(num){
//     let count = 0;
//     while(num > 0){
//         count++;
//         num = Math.floor(num / 10);
//     }
//     return count;
// }
// function armstorng(start,end){
//     for(let i = start; i<= end; i++){
//         let count = countNums(i);
//         let num = i;
//         let sum = 0;
//         while(num > 0){
//             let digit = Math.floor(num%10);
//             sum += (digit ** count);
//             num = Math.floor(num/10);
//         }
//         if(sum === i){
//             console.log(i);
//         }

//     }
// }
// armstorng(1,1000);

// 27- Print all perfect numbers between the given interval using functions?
// function perfectNums(start,end){
//     for(let i=start; i<=end; i++){
//         let sum = 0;
//         for(let j=1; j<i; j++){
//             if(i%j === 0){
//                 sum += j;
//             }
//         }
//         if(sum === i){
//             console.log(i);
//         }
//     }
// }
// perfectNums(1,100);

// 28- Find the power of any number using recursion?
// function powerFn(num,power){
//     if(power === 0) return 1;
//     return num * powerFn(num, power-1)
// }
// console.log(powerFn(4,2));

// 29- Print all natural numbers between 1 to n using recursion?
// function naturalNums(start, end){
//     if(start === end) return console.log(end);
//     console.log(start);
//     return naturalNums(start+1,end)
// }
// naturalNums(1,10);

// 30- Print all even or odd numbers in a given range using recursion?
// function even(start,end){
//     if(start > end){
//         return;
//     }
//     if(start%2 === 0){
//         console.log(start);
//     }
//     return even(start+1, end);
// }
// even(1,10);

// 31- Sum of all natural numbers between 1 to n using recursion?
// function naturalNums(start,end){
//     if(start === end) return end;
//     return start + naturalNums(start+1, end);
// }
// console.log(naturalNums(1,10));

// 32- Find the sum of all even or odd numbers in a given range using recursion?
// function evenSum(start,end){
//     if(start > end) return 0;
//     return start + evenSum(start+2,end)
// }
// console.log(evenSum(2,10));

// 33- Find reverse of any number using recursion.
// function rev(num, reverse = 0){
//     if(num === 0) return reverse;
//     reverse = reverse * 10 + (num%10);
//     return rev(Math.floor(num/10), reverse);
// }
// console.log(rev(123));

// 34- Check whether a number is a palindrome or not using recursion?
// let originalNum = 121;
// function palindrome(num, rev = 0) {
//   if (num === 0) return rev;
//   rev = rev * 10 + (num % 10);
//   return palindrome(Math.floor(num / 10), rev);
// }
// const res = palindrome(originalNum);
// if (originalNum === res) {
//   console.log("it is palindrome");
// } else {
//   console.log("it is not palindrome");
// }


// 35- Find the sum of digits of a given number using recursion.
// function sum(num){
//     if(num === 0) return 0;
//     return num%10 + sum(Math.floor(num/10));
// }
// console.log(sum(1234));


// 36- Find factorial of any number using recursion?
// function factorial(num){
//     if(num === 1) return 1;
//     return num * factorial(num-1);
// }
// console.log(factorial(4));


// 37- Generate nth Fibonacci term using recursion?
// function fibo(num){
//     if(num === 0) return 0;
//     if(num === 1) return 1;
//     return fibo(num-1) + fibo(num-2);
// }
// console.log(fibo(10));


// 38- Find gcd (HCF) of two numbers using recursion?
