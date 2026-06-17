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
function prime(num){
    
}
prime(9)