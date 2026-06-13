// 1- *****
//    *****
//    *****
//    *****
//    *****

// for(let i=0; i<5; i++){
//     let row = ""
//     for(let j=1; j<5; j++){
//         row += "*"
//     }
//     console.log(row);
// }

// 2- 12345
//    12345
//    12345
//    12345
//    12345

// for(let i=1; i<=5; i++){
//     let row = ""
//     for(let j = 1; j<=5; j++){
//         row += j
//     }
//     console.log(row);
// }

// 3- 11111
//    22222
//    33333
//    44444
//    55555

// for(let i=1; i<=5; i++){
//     let row = "";
//     for(let j=1; j<=5; j++){
//         row += i
//     }
//     console.log(row);
// }

// 4- *
//    **
//    ***
//    ****
//    *****

// for(let i=0; i<5; i++){
//     let row = ""
//     for(let j = 1; j<= i+1; j++){
//         row += "*"
//     }
//     console.log(row);
// }

// 5- 1
//    22
//    333
//    4444
//    55555

// for(let i=1; i<=5; i++){
//     let row = ""
//     for(let j=1; j<=i; j++){
//         row += i
//     }
//     console.log(row);
// }

// 6- 1
//    12
//    123
//    1234
//    12345

// for(let i=1; i<=5; i++){
//     let row = "";
//     for(let j=1; j<=i; j++){
//         row += j
//     }
//     console.log(row);
// }

// 7- 55555
//    4444
//    333
//    22
//    1

// for(let i=5; i>=1; i--){
//     let row = "";
//     for(let j=1; j<=i; j++){
//         row += i
//     }
//     console.log(row);
// }

// 8- 12345
//    1234
//    123
//    12
//    1

// for(let i=5; i>=1; i--){
//     let row = "";
//     for(let j=1; j<=i; j++){
//         row += j
//     }
//     console.log(row);
// }

// 9- 5
//    44
//    333
//    2222
//    11111

// for(let i=5; i>=1; i--){
//     let row = "";
//     for(let j=i; j<=5; j++){
//         row += i;
//     }
//     console.log(row);
// }

// 10- 5
//     54
//     543
//     5432
//     54321

// for(let i=0; i<5; i++){
//     let row = ""
//     for(let j=5; j>=(5-i); j--){
//         row += j
//     }
//     console.log(row);
// }

// 11- *****
//     ****
//     ***
//     **
//     *

// for(let i=0; i<5; i++){
//     let row = "";
//     for(let j=0; j<(5-i); j++){
//         row += "*"
//     }
//     console.log(row);
// }

// 12- 1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5

// for(let i=1; i<=5; i++){
//     let row = ""
//     for(let j = 1; j<=(5-i); j++){
//         row += " "
//     }
//     for(let k=1; k<=i; k++){
//         row += i + " "
//     }

//     console.log(row);
// }

// 13- 1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5

// for(let i=1; i<=5; i++){
//     let row = "";
//     for(let j = 1; j<=(5-i); j++){
//         row += " "
//     }
//     for(let k=1; k<=i; k++){
//         row += k + " "
//     }
//     console.log(row);
// }

// 14- 1
//    2 3
//   4 5 6
//  7 8 9 10
//11 12 13 14 15

// let count = 1;
// for(let i=1; i<=5; i++){
//     let row = "";
//     for(let j = 1; j<= (5-i); j++){
//         row += " "
//     }
//     for(let k=1; k<=i; k++){
//         row += count + " ";
//         count++;
//     }
//     console.log(row);
// }

// 15- *
//    * *
//   * * *
//  * * * *
// * * * * *

// for(let i=1; i<=5; i++){
//     let row ="";
//     for(let j=1; j<=(5-i); j++){
//         row += " "
//     }
//     for(let k=1; k<=i; k++){
//         row += "*" + " "
//     }
//     console.log(row);
// }


// 16-   1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1
//  1 5 10 10 5 1
// 1 6 15 20 15 6 1

// for(let i=0; i<7; i++){
//     let row = "";
//     let num = 1;
//     for(let j=1; j<=(7-i-1); j++){
//         row += " "
//     }
//     for(let k=0; k<=i; k++){
//         row += num + " ";
//         num = Math.floor(num * (i-k) / (k+1))
//     }
//     console.log(row);
// }

// 17- 1 2 3 4 5 6 7 8 9 8 7 6 5 4 3 2 1
//      1 2 3 4 5 6 7 8 7 6 5 4 3 2 1
//       1 2 3 4 5 6 7 6 5 4 3 2 1
//        1 2 3 4 5 6 5 4 3 2 1
//         1 2 3 4 5 4 3 2 1
//          1 2 3 4 3 2 1
//           1 2 3 2 1
//            1 2 1
//              1

// for(let i = 1; i <= 9; i++){
//     let row = "";
//     for(let s = 9; s>=(9-i); s--){
//         row += " "
//     }
//     for(let j = 1; j<=(10-i); j++){
//         row += j + " "; 
//     }
//     for(let k = (10-i-1); k>=1; k--){
//         row += k + " "
//     }
//     console.log(row);
// }