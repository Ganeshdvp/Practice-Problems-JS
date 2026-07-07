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


// 15- Reduce the each element of the array by 25% and store in a separate array.
// let arr = [23, 34, 54, 10, 4, 7];
// let newArray = [];
// for(let i=0; i<arr.length; i++){
//     let findPercentage = Math.floor(arr[i] * 25 / 100);
//     let newEle = arr[i] - findPercentage;
//     newArray.push(newEle)
// }
// console.log(newArray);

// 16- Store only even numbers of a given array in another array;
// let arr = [23, 34, 54, 10, 4, 7];
// let evenArray = [];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         evenArray.push(arr[i])
//     }
// }
// console.log(evenArray);

// 17- create a duplicate array for a given array.
// let arr = [1,2,2,3,4,1,5,6,6] // [1,2,6]
// let duplicateArray = [];
// for(let i=0; i<arr.length; i++){
//     let count = 0;
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//             count++
//         }
//     }
//     if(count>0){
//         duplicateArray.push(arr[i])
//     }
// }
// console.log(duplicateArray);

// 18- Eliminate duplicates from a array?
// let arr = [1,2,2,3,4,1,5,6,6]; // [1,2,3,4,5,6]
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

// 19- print only the perfect squares in an array?
// let arr = [4, 7, 9, 10, 16, 20, 25, 30];  // [4,9,16,25]
// for(let i=0; i<arr.length; i++){
//     let root = Math.sqrt(arr[i]);
//     if(Number.isInteger(root)){
//          console.log(arr[i]);
//     }
// }

// 20- Print only the 2 digit numbers from an array?
// let arr = [1,20,30,2,50,100,22] // [20,30,50,22]
// for(let i=0; i<arr.length; i++){
//     let count=0;
//     let num = arr[i]
//     while(num > 0){
//         count++
//         num = Math.floor(num/10);
//     }
//     if(count === 2){
//         console.log(arr[i]);  
//     }
// }

// 21- Print only multiples of 5 from an array?
// let arr = [23, 25, 30, 17, 45, 52, 100, 9];  // [25,30,45,100]
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 5 === 0){
//         console.log(arr[i]);
//     }
// }

// 22- Print only multiples of 2 AND 3 from an array?
// let arr = [23, 25, 30, 17, 45, 52, 100, 9];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0 && arr[i] % 3 === 0){
//         console.log(arr[i]);
//     }
// }

// 23- Print only multiples of 3 OR 5 from an array?
// let arr = [23, 25, 30, 17, 45, 52, 100, 9];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 3 === 0 || arr[i] % 5 === 0){
//         console.log(arr[i]);
//     }
// }

// 24- Increment 5% for all the salaries in a given array?
// let salaries = [20000, 35000, 50000, 75000];  // [21000, 36750, 52500, 78750]
// let newArray = [];
// for(let i=0; i<salaries.length; i++){
//     let findIncrement = Math.floor(salaries[i] * 5 / 100);
//     let finalAmount = salaries[i] + findIncrement;
//     newArray.push(finalAmount);
// }
// console.log(newArray);

// 25- For every basic salary present in the array, add 40% HRA, 92% DA, 10% Tax and display the final output?
// let salaries = [20000, 35000, 50000, 75000];  // [44400, 77700, 111000, 166500]
// let newArray = [];
// for(let i=0; i<salaries.length; i++){
//     let hrf = Math.floor(salaries[i] * 40 / 100);
//     let da = Math.floor(salaries[i] * 92 / 100);
//     let tax = Math.floor(salaries[i] * 10 / 100);
//     let finalAmount = hrf + da - tax;
//     newArray.push(salaries[i] + finalAmount);
// }
// console.log(newArray);

// 26- For every salary, deduct 10% tax for salaries less than 50000 and deduct 12% tax for salaries more than 50000?
// let salaries = [20000, 35000, 50000, 75000];
// let newArray = [];
// for(let i=0; i<salaries.length; i++){
//     if(salaries[i] > 50000){
//         let tax = Math.floor(salaries[i] * 12 / 100);
//         let finalAmount = salaries[i] - tax;
//         newArray.push(finalAmount);
//     }
//     else{
//         let tax = Math.floor(salaries[i] * 10 / 100);
//         let finalAmount = salaries[i] - tax;
//         newArray.push(finalAmount);
//     }
// }
// console.log(newArray);

// 27- Print only those odd numbers in a given array which are divisible by 3?
// let arr = [23, 25, 30, 17, 45, 52, 100, 9, 21, 18, 15];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 !== 0 && arr[i] % 3 === 0){
//         console.log(arr[i]);   
//     }
// }

// 28- Insert first 10 odd numbers in an empty array(for and while).
// let arr = [];
// for(let i=1; i<=10; i++){
//     if(i%2 !== 0){
//         arr.push(i)
//     }
// }
// console.log(arr);

// let arr = [];
// let i=1;
// while(i<=10){
//     if(i%2 !== 0){
//         arr.push(i);
//     }
//     i++;
// }
// console.log(arr);


// 29- Print the elements present in the second half of the array?
// let arr = [10, 20, 30, 40, 50, 60];
// let mid = Math.floor(arr.length/2);
// for(let i=mid; i<arr.length; i++){
//     console.log(arr[i]);
// }

// 30- Print the greatest of all 2-digit numbers present in an array?
// let arr = [5, 23, 108, 67, 9, 45, 101];
// let greatest = 0;
// for(let i=0; i<arr.length; i++){
//     let num = arr[i];
//     let count = 0;
//     while(num > 0){
//         count++
//         num = Math.floor(num/10);
//     }
//     if(count === 2 && greatest < arr[i]){
//         greatest = arr[i]
//     }
// }
// console.log(greatest);

// 31- Write a program to remove elements from an array which are not in the ascending order Ex: Original array: [12,34,11,56,37,98,23,67,109,45] Output : [12,34,56,98,109]?
// let arr = [12,34,11,56,37,98,23,67,109,45];  // [12,34,56,98,109]
// let p = 0;
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > arr[p]){
//         arr[p+1] = arr[i];
//         p++;
//     }
// }
// arr.length = p+1;
// console.log(arr);


// 32- Write script to merge array as the values of ar in the first and values of br next. Expected output: [19,12,23,4,15,26,37,18,79,10];
// var ar = [19,12,23,4,15];
// var br = [26,37,18,79,10];
// var newArray = [...ar, ...br];
// console.log(newArray);

// 33- Write script to merge array as the values of ar in the first and values of br next? Expected output: [26,37,18,79,10,19,12,23,4,15];
// var ar = [19,12,23,4,15];
// var br = [26,37,18,79,10];
// var newArray = [...br, ...ar];
// console.log(newArray);


// 34- Expected output: [1,2,3,4,5,6,7,8,9];
// var ar = [1,2,3,7,8,9];
// var br = [4,5,6];
// let sortedArray = [];
// let i = 0;
// let j = 0;

// while( j<br.length && i<ar.length){
//     if(ar[i] < br[j]){
//         sortedArray.push(ar[i]);
//         i++;
//     }
//     else{
//         sortedArray.push(br[j]);
//         j++;
//     }
// }
// while(i < ar.length){
//     sortedArray.push(ar[i]);
//     i++;
// }
// while(j < br.length){
//     sortedArray.push(ar[j]);
//     j++;
// }
// console.log(sortedArray);


// 35- insert An Element Desired or Specific Position In An Array?
// let arr = [1,2,4,5,6]  // 6 insert at 2nd position :- [1,2,3,4,5,6]
// let target = 3;
// let position = 2;
// for(let i=arr.length; i>position; i--){
//     arr[i] = arr[i-1]
// }
// arr[position] = target
// console.log(arr);


// 36- Remove Duplicates Items In An Array?
// let arr = [1,1,2,3,4,4,5,5,5];
// let k = 0;
// for(let i = 0; i<arr.length; i++){
//     let count = 0;
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//             count++;
//             break;
//         }
//     }
//     if(count <= 0){
//         arr[k] = arr[i];
//         k++;
//     }
// }
// arr.length = k
// console.log(arr);

// 37- Delete Element From Array At Desired Or Specific Position?
// let arr = [1,2,3,4,5,6]
// let position = 3;

// for(let i=position; i<arr.length; i++){
//     arr[i] = arr[i+1]
// }
// arr.length = arr.length-1
// console.log(arr);