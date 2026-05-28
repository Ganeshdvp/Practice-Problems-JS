// 1- Write a program to print 1 to 10 numbers using a while loop
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i += 1;
// }

// 2- Write a program to print 10 to 1 numbers using a while loop
// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i -= 1;
// }

// 3- Write a program to print 5 to 15 numbers using a while loop
// let i = 5;
// while(i <= 15){
//     console.log(i);
//     i += 1;
// }

// 4- Write a program to print 15 to 10 numbers using a while loop
// let i = 15;
// while(i >= 10){
//     console.log(i);
//     i -= 1;
// }

// 5- Write a program to print 1 to 10 even numbers using a while loop
// let i = 1;
// while (i <= 10){
//     if(i%2 === 0){
//         console.log(i);
//     }
//     i +=1;
// }

// 6- Write a program to print 1 to 10 odd numbers using a while loop
// let i = 1;
// while(i<=10){
//     if(i%2 !== 0){
//         console.log(i);
//     }
//     i +=1;
// }

// 7- Write a program to print first ten multiples of 4 using a while loop (multiples of 4 are 4,8,12,16,20,.....)
// let i = 1;
// while(i <= 10){
//     console.log(4 * i);
//     i += 1;
// }

// 8- Write a program to print multiplication table of 6 using while loop
// let i = 1;
// while( i <= 10 ){
//     console.log("6 * ",i, "=", 6*i);
//     i += 1;
// }

// 9- Print the squares of all numbers from 1 to 10.
// let i = 1;
// while(i <= 10){
//     console.log(i * i);
//     i += 1;
// }

// 10- Print the cubes of all numbers from 1 to 10.
// let i = 1;
// while(i <= 10){
//     console.log(i ** i);
//     i += 1;
// }

// 11- Write a program to print factors of 24 using while loop (factors of 24 are 1,2,3,4,6,8,12,24)
// let i = 1;
// while( i <= 24){
//     if(24%i === 0){
//         console.log(i);
//     }
//     i++;
// }

// 12- Write a program to print 1 to 10 numbers using a for loop?
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 13- Write a program to print 10 to 1 numbers using a for loop?
// let i = 10;
// for(i; i >= 1; i--){
//     console.log(i);
// }

// 14- Write a program to print all numbers from 1 to a given number
// let num = 20;
// for(let i = 1; i <= num; i++){
//     console.log(i);
// }

// 15- Write a program to print 1 to 10 even numbers using a for loop?
// for(let i = 1; i<=10; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// 16- Write a program to print 1 to 10 odd numbers using a for loop
// for(let i = 1; i<=10; i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }

// 17- Write a program to print first 10 multiples of 3 using a for loop
// for(let i = 1; i<=10; i++){
//     console.log(i * 3);
// }

// 18- Write a program to print multiplication table of 6 using a for loop
// for(let i = 1; i<=10; i++){
//     console.log("6 * ", i, "=", 6*i);
// }

// 19- Write a program to print all the factors of a given number
// let n = 24;
// for(let i = 1; i <= n; i++){
//     if(n % i === 0){
//         console.log(i);
//     }
// }

// 20- a program to read 5 numbers and print the maximum and minimum number?
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 40;
// let num5 = 50;
// let min = Math.min(num1,num2,num3,num4,num5);
// let max = Math.max(num1,num2,num3,num4,num5)
// console.log(min, max);

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 40;
// let num5 = 50;
// let min = num1;
// let max = num1;

// if(max < num2) max = num2;
// if(min > num2) min = num2;

// if(max < num3) max = num3;
// if(min > num3) min = num3;

// if(max < num4) max = num4;
// if(min > num4) min = num4;

// if(max < num5) max = num5;
// if(min > num5) min = num5;

// console.log(min, max);

// let nums = [10,20,30,40,50];
// let min = nums[0];
// let max = nums[0];
// let i=1;
// while( i < nums.length){
//     if(nums[i] > max){
//         max = nums[i]
//     }
//     if(nums[i] < min){
//         min = nums[i]
//     }
//     i+=1;
// }

// console.log(min, max);

// 21- a program to read 5 numbers and print only the even numbers
// let nums = [1,2,3,4,5];
// let i = 0;
// while( i < nums.length){
//     if( i % 2 === 0){
//         console.log(i);
//     }
//     i += 1;
// }

// 22- Print all the digits of a given number?
// let num = 12345;
// while(num > 0){
//     let digit = Math.floor(num%10);
//     console.log(digit);
//     num = Math.floor(num/10);
// }

// 23- Write a program to print only even digits of a given number The output should be 4,2,6 Ex. Let us take 154256?
// let num = 154256;
// while(num > 0){
//     let digit = Math.floor(num%10);
//     if(digit % 2 === 0){
//         console.log(digit);
//     }
//     num = Math.floor(num/10);
// }

// 24- Write a program to print only odd digits of a given number Ex. Let us take 1542763 The output should be 1,5,7,3?
// let num = 1542763;
// while(num > 0){
//     let digit = Math.floor(num%10);
//     if(digit % 2 !== 0){
//         console.log(digit);
//     }
//     num = Math.floor(num/10);
// }

// 25- Write a program to print the number at 10’s place?
// let num = 12345;
// let count = 0;
// while(count <= 2){
//     let digit = Math.floor(num%10);
//     count +=1;
//     if(count === 2){
//         console.log(digit);
//     }
//     num = Math.floor(num/10);
// }

// let num = 12345;
// let tensDigit = Math.floor(num/10) % 10;
// console.log(tensDigit);

// 26- Write a program to print the number at 100’s place?
// let num = 12345;
// let count = 0;
// while(count <= 3){
//     let digit = Math.floor(num%10);
//     count +=1;
//     if(count === 3){
//         console.log(digit);
//     }
//     num = Math.floor(num/10);
// }

// let num = 12345;
// let hundrendDigit = Math.floor(num/100) % 10;
// console.log(hundrendDigit);

// 27- Write a program to print the number at 1000’s place?
// let num = 12345;
// let count = 0;
// while(count <= 4){
//     let digit = Math.floor(num%10);
//     count +=1;
//     if(count === 4){
//         console.log(digit);
//     }
//     num = Math.floor(num/10);
// }

// let num = 12345;
// let thousandDigit = Math.floor(num/1000) % 10;
// console.log(thousandDigit);

// 28- Write a program to print the number at 10000’s place?
// let num = 12345;
// let count = 0;
// while(count <= 5){
//     let digit = Math.floor(num%10);
//     count +=1;
//     if(count === 5){
//         console.log(digit);
//     }
//     num = Math.floor(num/10);
// }

// let num = 12345;
// let tenThousandDigit = Math.floor(num/10000) % 10;
// console.log(tenThousandDigit);

// 29- Write a program to find the LCM of given two numbers?
// let num1 = 12;
// let num2 = 18;
// let arr1 = [];
// let arr2 = [];
// let arr3 = [];

// for(let i=1; i<=num1; i++){
//     if(num1%i === 0){
//         arr1.push(i);
//     }
// }
// for(let i=1; i<=num2; i++){
//     if(num2%i === 0){
//         arr2.push(i);
//     }
// }
// for(let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i] === arr2[j]){
//             arr3.push(arr1[i])
//         }
//     }
// }
// let gcd = arr3[arr3.length - 1];
// let lcm = num1 * num2 / gcd;
// console.log(lcm);

// let num1 = 12;
// let num2 = 18;
// let arr1 = [];
// let arr2 = [];
// let gcd = 1;

// for(let i=1; i<=num1; i++){
//     if(num1%i === 0){
//         arr1.push(i);
//     }
// }
// for(let i=1; i<=num2; i++){
//     if(num2%i === 0){
//         arr2.push(i);
//     }
// }
// for(let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i] === arr2[j]){
//             gcd = arr1[i]
//         }
//     }
// }
// let lcm = num1 * num2 / gcd;
// console.log(lcm);

// let a = 12;
// let b = 18;

// while (b !== 0) {   // Euclidean Algorithm
//     let temp = b;
//     b = a % b;
//     a = temp;
// }

// let gcd = a;
// let lcm = (12 * 18) / gcd;
// console.log(lcm);

// 30- Write a program to convert an octal number to a decimal?
// let octalNumber = 123;
// let decimal = 0;
// let power = 0;

// while(octalNumber !== 0){
//     let digit = Math.floor(octalNumber%10);
//     decimal = decimal + digit * (8 ** power);
//     power +=1;
//     octalNumber = Math.floor(octalNumber/10);
// }
// console.log(decimal);

// 31- Write a program to print the sum of 1 to 10 ( initialisation of sum variable with 0 )
// let sum = 0;
// for(let i=1; i<=10; i++){
//     sum += i
// }
// console.log(sum);

// let n = 10;
// let sum = n * (n+1)/2;
// console.log(sum);

// 32- Write a program to print the average of 1 to 10?
// let sum = 0;
// for(let i=1; i<=10; i++){
//     sum += i
// }
// let avg = sum/10;
// console.log(avg);

// 33- Write a program to print the sum of the numbers between the given two numbers?
// let num1 = 10;
// let num2 = 20;
// let sum = 0;

// for(let i=num1; i<=num2; i++){
//     sum +=i
// }
// console.log(sum);

// 34- Write a program to print the sum of even numbers between the given two numbers?
// let num1 = 1;
// let num2 = 20;
// let sum = 0;

// for(let i = num1; i<=num2; i++){
//     if(i%2 === 0){
//         sum += i
//     }
// }
// console.log(sum);

// 35- Write a program to print the sum of odd numbers between the given two numbers?
// let num1 = 1;
// let num2 = 20;
// let sum = 0;

// for(let i = num1; i<=num2; i+=2){
//     sum += i
// }
// console.log(sum);

// 36- Write a program to print the product of the numbers between 1 to 10 ( initialisation of product variable with 1 )?
// let product = 1;
// for(let i=1; i<=10; i++){
//     product *= i
// }
// console.log(product);

// 37- Write a program to find the product of all odd numbers between 1 and 10.?
// let product = 1;
// for(let i=1; i<=10; i++){
//     if(i%2 !== 0){
//         product *= i
//     }
// }
// console.log(product);

// 38- Write a program to print the nth power of a given number. n can be any positive number. (n=3 r =4 then answer must be 3*3*3*3 )?
// let n = 3;
// let r = 4;
// console.log(n**r);

// let n = 3;
// let r = 4;
// let power = 1;
// for(let i=1; i<=r; i++){
//     power *= n
// }
// console.log(power);

// 39- Write a program to print factorial of a given number?
// let n = 10;
// let product = 1;
// for(let i=1; i<=n; i++){
//     product *= i
// }
// console.log(product);

// 40- Write a program to print the nCr of given ‘n’ and ‘r’
// let n = 4;
// let r = 3;

// let nFactorial = 1;
// let rFactorial = 1;
// let nrFactorial = 1;

// for(let i=1; i<=n; i++){
//     nFactorial *= i;
// }
// for(let i=1; i<=r; i++){
//     rFactorial *= i;
// }
// for(let i=1; i<=(n-r); i++){
//     nrFactorial *= i;
// }

// let combination = nFactorial/(rFactorial*nrFactorial);
// console.log(combination);

// 41- Write a program to print the number of factors of 24 using while loop (number of factors for 24 is 8)?
// let n = 24;
// let factorsCount = 0;
// let i = 1;
// while(i<=n){
//     if(n%i === 0){
//         factorsCount += 1;
//     }
//     i++;
// }
// console.log(factorsCount);

// 42- Write a program to print the count of factors of a given number using for loop?
// let n = 56;
// let factorsCount = 0;

// for(let i = 1; i<=n; i++){
//     if(n%i === 0){
//         factorsCount += 1;
//     }
// }
// console.log(factorsCount);

// 43- Write a program to check a given number is a prime number or not?
// let n = 9;
// let count = 0;
// for(let i=1; i<=n; i++){
//     if(n%i === 0){
//         count +=1;
//     }
// }
// if(count===2){
//     console.log(n, "is prime number!");
// }
// else{
//     console.log(n, "is not prime number!");
// }

// 44- print Number of Digits in given number.
// let num = 10101111;
// let count = 0;

// while(num > 0){
//     let digit = Math.floor(num%10);
//     count+=1;
//     num = Math.floor(num/10);
// }
// console.log(count);

// 45- Write a program to count the number of ‘1’s in a given number?
// let num = 10110101;
// let count = 0;

// while(num > 0){
//     let digit = Math.floor(num%10);
//     if(digit === 1){
//         count+=1;
//     }
//     num = Math.floor(num/10);
// }
// console.log(count);

// 46- Write a program to eliminate all 0’s from a given number.
// let num = 1011010;
// let modifyNum = 0;
// let place = 1;

// while(num > 0){
//     let digit = Math.floor(num%10);
//     if(digit !== 0){
//         modifyNum = modifyNum + digit * place;
//         place *= 10;
//     }
//     num = Math.floor(num / 10);
// }
// console.log(modifyNum);

// 47- Write a program to print all the digits that are less than 5 in a given number?
// let num = 1236789;
// let modifyNum = 0;
// let place = 1;

// while(num > 0){
//     let digit = Math.floor(num%10);
//     if(digit < 5){
//         modifyNum = modifyNum + digit * place;
//         place *=10;
//     }
//     num = Math.floor(num / 10);
// }
// console.log(modifyNum);

// 48- Print the greatest digit of a given number(n=1237456 then greatest digit is 7)?
// let num = 1237456;
// let max = 0;

// while (num > 0){
//     let digit = Math.floor(num%10);
//     if(max < digit){
//         max = digit;
//     }
//     num = Math.floor(num / 10);
// }
// console.log(max);

// 49- sum of all digits of a given number Ex: let us take 19345 is the given number The output should be 22 (1+9+3+4+5)=22
// let num = 19345;
// let sum = 0;

// while(num > 0){
//     let digit = Math.floor(num%10);
//     sum +=digit;
//     num = Math.floor(num / 10);
// }
// console.log(sum);

// 50- a program to print reverse of digits of a number?
// let num = 12345;
// let reverseNum = 0;
// let place = 1;

// while (num > 0){
//     let digit = Math.floor(num%10);
//     reverseNum = reverseNum * 10 + digit;
//     place *= 10;
//     num = Math.floor(num / 10);
// }
// console.log(reverseNum);
