// 1- For the Given array: [23,34,54,10,4,7] print the minimum number in an Array. Expected output: 4
// let arr = [23,34,54,10,4,7];
// let min = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log(min);

// 2- For the Given array: [23,34,54,10,4,7] print the Maximum number in an array. Expected output: 54
// let arr = [23,34,54,10,4,7];
// let max = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max);

// 3- For the Given array: [23,34,54,10,4,7] sum of all the numbers in an Array. Expected output: 132
// let arr = [23,34,54,10,4,7];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum);

// 4- For the Given array: [23,34,54,10,4,7] Average of all the numbers in an Array. Expected output: 22
// let arr = [23,34,54,10,4,7];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// let average = sum/arr.length;
// console.log(average);

// 5- For the Given array: [23,34,54,10,4,7] print values that are greater than the given number. Given number: 20, Expected output: 23,34,54
// let num = 20;
// let arr = [23,34,54,10,4,7];
// for(let i=0; i<arr.length; i++){
//     if(num < arr[i]){
//         console.log(arr[i]);
//     }
// }

// 6- For the Given array: [23,34,54,10,4,7] print all the even numbers in an Array. Expected output: 34,54,10,4
// let arr = [23,34,54,10,4,7]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
// }

// 7- For the Given array: [23,34,54,10,4,7] print all the odd numbers in an Array. Expected output: 23,7
// let arr = [23,34,54,10,4,7]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 !== 0){
//         console.log(arr[i]);
//     }
// }

// 8- For the Given array: [23,-34,-54,10,-4,7] print all the positive numbers in an array. Expected output: 23,10,7
// let arr = [23,-34,-54,10,-4,7];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > 0){
//         console.log(arr[i]);
//     }
// }

// 9- For the Given array: [23,34,54,10,4,7] search if the given number is there in an array or not. Given number: 34, Expected output: true Given number: 26, Expected output: false
// let arr = [23,34,54,10,4,7];
// let target = 34;
// let found = false;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] === target){
//         found = true;
//         break;
//     }
// }
// console.log(found);

// 10- For the Given array: [23,34,54,10,34,7,23,10,34] print the total number of times an element found in the array. Given number: 23, Expected output: 2 Given number: 34, Expected output: 3 Given number: 10, Expected output: 2 Given number: 54, Expected output: 1
// let arr = [23,34,54,10,34,7,23,10,34];
// let target = 34;
// let count = 0;
// for(let i = 0; i<arr.length; i++){
//     if(target === arr[i]){
//         count += 1;
//     }
// }
// console.log(count);

// 11- For the Given array: [23,34,54,10,4,7] print index of a given element in an Array. Given number: 23, Expected output: 0 Given number: 34, Expected output: 1 Given number: 10, Expected output: 3 Given number: 54, Expected output: 2
// let arr = [23,34,54,10,4,7];
// let target = 34;
// for(let i=0; i<arr.length; i++){
//     if(target === arr[i]){
//         console.log(i);
//     }
// }

// 12- For the Given array: [23,34,54,10,34,7,23,10,34] eliminate duplicates in a given array Expected output: 23,34,54,10,7
// let arr = [23,34,54,10,34,7,23,10,34];  // 23,34,54,10,7
// let duplicatesRemove = [...new Set(arr)]
// console.log(duplicatesRemove);

// let arr = [23,34,54,10,34,7,23,10,34];
// let newArray = [];
// for(let i=0; i<arr.length; i++){
//     let found = false;
//     for(let j=0; j<newArray.length; j++){
//         if(arr[i] === newArray[j]){
//             found = true;
//             break;
//         }
//     }
//     if(!found){
//         newArray.push(arr[i])
//     }
// }
// console.log(newArray);

// 13- a program to store an array into another array var ar = [23,34,54,10,4,7] var br = [] Expected output: br = [23,34,54,10,4,7]
// let arr = [23,34,54,10,4,7];
// let br = [...arr]
// console.log(br);

// 14- Sort an array in ascending order. Given array: [23,34,54,10,4,7] Expected output: 4,7,10,23,34,54
// let arr = [23,34,54,10,4,7];  // 4,7,10,23,34,54
// let sort = arr.sort((i,j)=> i-j)
// console.log(sort);

// selection sort
// let arr = [23,34,4,54,10,4,4,7];
// for(let i=0; i<arr.length; i++){
//     let small = arr[i+1];
//     let index = i+1;
//     for(let j=i+1; j<arr.length; j++){
//         if(small > arr[j]){
//             small = arr[j];
//             index = j;
//         }
//     }
//     if(arr[i] > arr[index]){
//         let temp = arr[i];
//         arr[i] = arr[index];
//         arr[index] = temp;
//     }
// }
// console.log(arr);

// Bubble sort
// let arr = [23,34,54,10,4,7];
// for(let i = 0; i<=(arr.length/2); i++){
//     for(let j = 0; j<arr.length; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

// Insertion sort
// let arr = [23, 34, 54, 10, 4, 7];
// for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i-1;
//     while(j >= 0 && current < arr[j]){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = current;   
// }
// console.log(arr);

// Merge sort
// let arr = [23, 34, 54, 10, 4, 7];
// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))

//     return merge(left, right);
// }
// function merge(left, right){
//     let p1 = 0;
//     let p2 = 0;
//     let newArray = [];

//     while(p1 < left.length && p2 < right.length){
//         if(left[p1] < right[p2]){
//             newArray.push(left[p1]);
//             p1+=1
//         }
//         else{
//             newArray.push(right[p2]);
//             p2+=1;
//         }
//     }
//     while(p1 < left.length){
//         newArray.push(left[p1]);
//         p1+=1
//     }
//     while(p2 < right.length){
//         newArray.push(right[p2])
//         p2+=1
//     }
//     return newArray;
// }
// console.log(mergeSort(arr));