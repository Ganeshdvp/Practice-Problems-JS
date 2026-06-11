// 1- Create a Simple Calculator using a switch case.?
// let a = 10;
// let b = 20;
// let operator = "+";

// switch(operator){
//     case "+" : {
//         console.log(a + b);
//         break;
//     }
//     case "-" : {
//         console.log(a - b);
//         break;
//     }
//     case "*" : {
//         console.log(a * b);
//         break;
//     }
//     case "/" : {
//         console.log(a / b);
//         break;
//     }
//     default:{
//         console.log("Invalid operator?");
//     }
// }

// 2- Find A Grade Of Given Marks or (Find a Grade of Given Marks Using Switch Case)?
// let marks = 0;

// switch(true){
//     case marks > 90 :
//         console.log("A Grade");
//         break;
//     case marks > 70 :
//         console.log("B Grade");
//         break;
//     case marks > 50 :
//         console.log("C Grade");
//         break;
//     default:
//         console.log("E Grade");
// }

// 3- Find Radius, Circumference and Volume of Cylinder?
// let daimeter = 10;
// let height = 10;
// let radius = daimeter / 2;
// let circumference = 2 * Math.PI * radius;
// let volumeOfCyclinder = Math.PI * (radius*radius) * height

// console.log("Radius:", radius);
// console.log("Circumference:", circumference);
// console.log("Volume:", volumeOfCyclinder);

// 4- Remove All Vowels From A String?
// let str = "hello";  // hll
// let vowels = ["a","e","i","o","u"];
// let newStr = ""

// for(let i=0; i<str.length; i++){
//     if(!vowels.includes(str[i])){
//         newStr = newStr + str[i]
//     }
// }
// console.log(newStr);

// 5- Print day of week name using switch case.
// let day = 5;

// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("MOn");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid Day");
// }

// 6- Print total number of days in a month using switch case.?
// let month = "Feb";

// switch (month) {
//   case "Jan":
//     console.log("31 days");
//     break;
//   case "Feb":
//     console.log("28 or 29 days");
//     break;
//   case "Mar":
//     console.log("31 days");
//     break;
//   case "Apr":
//     console.log("30 days");
//     break;
//   case "May":
//     console.log("31 days");
//     break;
//   case "Jun":
//     console.log("30 days");
//     break;
//   case "Jul":
//     console.log("31 days");
//     break;
//   case "Aug":
//     console.log("31 days");
//     break;
//   case "Sep":
//     console.log("30 days");
//     break;
//   case "Oct":
//     console.log("31 days");
//     break;
//   case "Nov":
//     console.log("30 days");
//     break;
//   case "Dec":
//     console.log("31 days");
//     break;
//   default:
//     console.log("Invalid Month name!");
// }

// 7- Check whether an alphabet is a vowel or consonant using a switch case.?
// let alphabet = "o";
// let vowels = ["a", "e", "i", "o", "u"];

// switch (true) {
//   case vowels.includes(alphabet):
//     console.log("it is vowel");
//     break;
//   default:
//     console.log("it is consonent");
// }

// 8- Find the maximum between two numbers using the switch case?
// let a = 10;
// let b = 20;

// switch (true) {
//   case a > b:
//     console.log(a);
//     break;
//   case b > a:
//     console.log(b);
//     break;
//   default:
//     console.log("not valid!");
// }

// 9- Check whether a number is even or odd using a switch case.?
// let num = 2;
// switch(true){
//     case num % 2 === 0 :
//         console.log("it is even number!");
//         break;
//     case num % 2 !== 0 :
//         console.log("it is odd number!");
//         break;
//     default:
//         console.log("not valid!");
// }

// 10- Check whether a number is positive, negative or zero using a switch case.?
// let num = 0;
// switch(true){
//     case num > 0 :
//         console.log("positive");
//         break;
//     case num < 0 :
//         console.log("negative");
//         break;
//     case num === 0 :
//         console.log("zero");
//         break;
//     default:
//         console.log("not valid!");
// }

// 11- Find roots of a quadratic equation using switch case.?
// let a = 1;
// let b = -5;
// let c = 6;

// let d = b * b - 4 * a * c;

// switch (true) {
//   case d > 0:
//     let root1 = (-b + Math.sqrt(d)) / (2 * a);
//     let root2 = (-b - Math.sqrt(d)) / (2 * a);
//     console.log("two roots!");
//     console.log("Root 1 =", root1);
//     console.log("Root 2 =", root2);
//     break;
//   case d === 0:
//     let root = -b / (2 * a);
//     console.log("one roots!");
//     console.log("Root =", root);
//     break;
//   case d < 0:
//     let realPart = -b / (2 * a);
//     let imaginaryPart = Math.sqrt(-d) / (2 * a);
//     console.log("complex roots!");
//     console.log(`${realPart} + ${imaginaryPart}i`);
//     console.log(`${realPart} - ${imaginaryPart}i`);
//     break;
//   default:
//     console.log("not valid!");
// }