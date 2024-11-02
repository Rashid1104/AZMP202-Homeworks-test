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
