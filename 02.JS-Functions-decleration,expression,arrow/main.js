// ? task1

// Example 1

// function Pow(num1,num2) {
//     return num1 ** num2;
    
// }
// console.log(Pow(12,2));

// Example 2

// function Power(num1,num2) {
//     return Math.pow(num1,num2);
// }
// console.log(Power(11,3));

// arrow functions

// const PowerNums = (num1,num2) =>{
//     // return num1 ** num2;
//     return Math.pow(num1,num2);
// }
// console.log(PowerNums(3,4));

// task2

// function Move(array,firstIndex,lastIndex) {
//     let elementToMove = array[firstIndex];
    
//     for (let i = firstIndex; i < array.length - 1; i++) {
//         array[i] = array[i + 1];
//     }
      
//     array.length = array.length - 1;   
//     if (lastIndex <= array.length) {
//          for (let j = array.length; j > lastIndex; j--) {
//             array[j] = array[j - 1]; 
//         }
//         array[lastIndex] = elementToMove; 
//     } else {
//         array.push(elementToMove);
//     }

// return array;
    
// }

// console.log(Move([12,1,524,463,46,58,76],0,3));


// task3

// function Uniqie(array) {
//     const Arr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== Arr[Arr.length - 1]) {
//             Arr.push(array[i]);
//          }
        
//     }
//     return Arr;
// }
// console.log(Uniqie([12,12,3,4,5,6,76,4,4,6]));


// arrow function

// const Uni = (array) => {
//     const Arr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== Arr[Arr.length - 1]) {
//            Arr.push(array[i]);
//         }
        
//     }
//     return Arr;
// }
// console.log(Uni([12,12,3,4,5,6,76,4,4,6]));

// task4

// function sentenceCapitalization(sentence) {
//     let capitalizedSentence = ""; 
//     let isPrime = true; 

//     for (let i = 0; i < sentence.length; i++) {
//         const char = sentence[i];     
//         if (char === ' ') {
//             capitalizedSentence += char; 
//             isPrime = true; 
//         } else {
//             if (isPrime) {
//                 capitalizedSentence += char.toUpperCase();
//                 isPrime = false; 
//             } else {
//                 capitalizedSentence += char; 
//             }
//         }
//     }

//     return capitalizedSentence; 
// }


// console.log(sentenceCapitalization("a short sentence")); 

// task5

// function concatArray(array1,array2) {
//     let ConcatArr = [];
//     for (let i = 0; i < array1.length; i++) {
//         ConcatArr.push(array1[i]);
        
//     }
//     for (let j = 0; j < array2.length; j++) {
            
//             ConcatArr.push(array2[j]);
//         }
//     return ConcatArr;
// }
// console.log(concatArray([1,2,3,4,5],[6,7,8,9,10]));


// Arrow function

// const concat = (array1,array2) => {
//     let ConcatArr = [];
//     for (let i = 0; i < array1.length; i++) {
//         ConcatArr.push(array1[i]);
        
//     }
//     for (let j = 0; j < array2.length; j++) {
            
//             ConcatArr.push(array2[j]);
//         }
//     return ConcatArr;
// }
// console.log(concat([1,2,3,4,5],[6,7,8,9,10]));

// task6

// function countWords(sentence) {
//     let count = 0;
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] !== " ") {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countWords("hello  my friend"));


// arrow function

// const countTexts = (sentence) => {
//     let count = 0;
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] !== " ") {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countTexts("hello  my friend"));

// task7

function Medium(array) {
    let mid =0;
    if (array.length % 2 === 0) {  
  for (let i = 0; i < array.length; i++) {
    if (i == (array.length / 2) - 1) {
      if (array.length % 2 === 0 ) {
        mid = (array[i] + array[i+1]) / 2 
      }
    }
  } 
}else{
    for (let i = 0; i < array.length; i++) {
        if (i == ((array.length-1) / 2)) {
            mid = (array[i-1] + array[i] + array[i+1]) / 3;      
        }
    }
}
    return mid
}
 console.log(Medium([12,13,17,5,12,13,11,2,16]));
 
// task8

// function Repeat(array) {
//     let arr = [];
//     let seen = []; 
//     for (let i = 0; i < array.length; i++) {
//         let found = false; 
//         for (let j = 0; j < seen.length; j++) {
//             if (array[i] === seen[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (found) {
//             let alreadyInResult = false;
//             for (let k = 0; k < arr.length; k++) {
//                 if (array[i] === arr[k]) {
//                     alreadyInResult = true;
//                     break;
//                 }
//             }
//             if (!alreadyInResult) {
//                 arr.push(array[i]);
//             }
//         } else {
//             seen.push(array[i]);
//         }
//     }
//     return arr;
// }
// console.log(Repeat([1,2,3,1,2,3]));

// task9

// function Sum(Text,char) {
//     let count = 0;
//     let sum = 1;
//     for (let i = 0; i < Text.length; i++) {
//         if (Text[i] !== " ") {
//             count++;
//         }
        
        
//     }
// sum = count + 1;
// return sum;
// }
// console.log(Sum("Hello",'a'));

// task10

// function UpperCase(array) {
// const arr = [];

// for (let i = 0; i < array.length; i++) {
//     let code = ''; 
//     for (let j = 0; j < 3; j++) {
//         if (array[i][j]) { 
//             code += array[i][j].toUpperCase(); 
//         }
//     }
//    arr.push(code); 
// }
// return arr
// }
// console.log(UpperCase(["Finland", "Denmark", "Sweden", "Norway", "Iceland"]));

// task11

// function UpperLower(str) {
//     let result = ''; 
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase(); 
//         } else {
//             result += char.toUpperCase(); 
//         }
//     }

//     return result; 
// }
// console.log(UpperLower("AceIsAlive"));

// task12

// function Equal(array1,array2) {
//    isPrime = true;
//    if (array1.length !== array2.length) {
//     return false;
//    }
//     for (let i = 0; i < array1.length; i++) {
//               if (array1[i] === array2[i]) {
//                 isPrime
//               }else{
//                 isPrime = false;
// break;                 
//         }
        
//     }
//     return isPrime;
// }
// console.log(Equal([1,2,3,4,5],[1,2,3,4,5]));
