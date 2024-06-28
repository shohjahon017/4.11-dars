//1-masala

// const str = "salom maktabim";
// function findString(str) {
//   let sum = 0;
//   for (const iterator of str) {
//     if (iterator === "a") {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(findString(str));

//2-masala
// let arr = 1;
// function createMassiv(arr, n) {
//   let a = [];
//   for (let i = arr; i < n; i++) {
//     if (i % 2 == 0) {
//       a.push(i);
//     }
//   }
//   return a;
// }
// console.log(createMassiv(arr, 10));

//3-masala
// const str = " sa lom  dun yo  ";
// function removeGap(str) {
//   let res = str.replaceAll(" ", "");
//   return res;
// }
// console.log(removeGap(str));

//4-masala
// const str = "hello world";
// function deleteFirstElement(str) {
//   let res = str.slice(0, 0) + str.slice(1);
//   return res;
// }
// console.log(deleteFirstElement(str));

//5-masala
// function minElement(arr) {
//   let min = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[min]) {
//       min = i;
//     }
//   }
//   return min;
// }
// console.log(minElement([9, 5, 6, 7, 5]));

//6-masala
// function smallElement(str) {
//   return str.toLowerCase();
// }
// console.log(smallElement("SALOM DUNYO"));

//7-masala
// function summMassiv(arr) {
//   let sum = 0;
//   arr.forEach(function (value) {
//     sum += value;
//   });
//   return sum;
// }
// console.log(summMassiv([1, 56, 7, 8]));

//8-masala
// function countElement(str, element) {
//   let count = 0;
//   for (const iterator of str) {
//     if (iterator == element) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countElement("salom bolalar", "b"));

//9-masala
// function squareNumber(n) {
//   let res = [];
//   for (let i = 1; i < n; i++) {
//     res.push(i ** 2);
//   }
//   return res;
// }
// console.log(squareNumber(10));

//10-masala
// function deleteLastELement(str) {
//   return str.slice(0, str.length - 1);
// }
// console.log(deleteLastELement("salom"));

//11-masala
// function createMassiv(str) {
//   let res = [];
//   str.forEach(function (value) {
//     if (value > 0) {
//       res.push(value);
//     }
//   });
//   return res;
// }
// console.log(createMassiv([-1, 1, 5, -5]));

//12-masala
// function removeNumbers(str) {
//   let res = str.replaceAll(/[1-9]/g, "");
//   return res;
// }
// console.log(removeNumbers("sal5om 4dun9yo"));

// //13-masala
// function reverseElement(str) {
//   let res = str.split("");
//   res.reverse();
//   return res.join("");
// }
// console.log(reverseElement("hello hello hello"));

//14-masala
// function twiceMassiv(arr) {
//   let res = [];
//   arr.forEach(function (value) {
//     res.push(value * 2);
//   });
//   return res;
// }
// console.log(twiceMassiv([3, 5, 6, 8, 9]));

// //15-masala
// function changeFirstLast(str) {
//   let res = str.split("");
//   let first = res[0];
//   let last = res[res.length - 1];
//   res[0] = last;
//   res[res.length - 1] = first;
//   return res.join("");
// }
// console.log(changeFirstLast("hello"));

//16-masala
// function pairSum(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//       count += i;
//     }
//   }
//   return count;
// }
// console.log(pairSum(10));

//17-masala
// function CapitalizeLetter(str) {
//   let res = str.toUpperCase();
//   return res;
// }
// console.log(CapitalizeLetter("salom dunyo"));

//18-masala
// function sortElement(arr) {
//   let res = arr.sort();
//   return res;
// }
// console.log(sortElement(["A", 1, 25, 86, "B"]));

//19-masala
// function CapitalizeFirstLetter(str) {
//   let res = str.split(" ");
//   res = res.map(function (value) {
//     return value[0].toUpperCase() + value.slice(1);
//   });
//   return res.join(" ");
// }
// console.log(CapitalizeFirstLetter("hello world"));

//20-masala
// function removeOddNumbers(n) {
//   let a = [];
//   for (let i = 1; i < n; i++) {
//     if (i % 2 == 0) {
//       a.push(i);
//     }
//   }
//   return a;
// }
// console.log(removeOddNumbers(10));
