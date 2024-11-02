// task1

// let number = +prompt("enter number");

// if (number >= 100 && number <= 999) {
//     let a = (number - number % 100) / 100;      
//     let b =  (number % 100-number % 10) / 10;
//     let c = number % 10;                    

//     let sum = a + b + c;
//     let prod = a * b * c;
//     let aver = sum / 3;

//     console.log(sum);
//     console.log(prod);
//     console.log(aver);
// } else {
//     console.log("Invalid number");
// }

// task2
  
// let number = +prompt("enter number");

    // for (let i = 1; i <= number; i++) {
    //     if (number % i === 0) {
    //         console.log(i);
    //     }
    // }


// task3

// let number = +prompt("enter number");
// let count=0;

// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         count++;
//     }
// }
// console.log(count);


// task4

// for (let i = 0; i < 11; i++) {
//     console.log(i + ' x ' + i + ' = ' + i**2);
    
    
// }

// task5

// console.log("i");

// for (let i = 0; i < 11; i++) {
//     console.log(i); 
// }
// console.log("i^2");
// for (let i = 0; i < 11; i++) { 
//     console.log(i**2);  
// }
// console.log("i^3");
// for (let i = 0; i < 11; i++) {   
//     console.log(i**3);  
// }

// task6

// let sumTek = 0;
// let sumCut = 0;
// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
//         sumCut += i;
//     }
    
// }
// console.log(sumCut);

// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 1) {
//         sumTek += i;
//     }
    
// }
// console.log(sumTek);

// task7 - 8

// let arr = [4,2,7,9,3,12,46,32,19];
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//    if (max < arr[i]) {
//     max = arr[i];
//    }
    
// }
// console.log("MAX: " + max);

// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//      min = arr[i];
//     }
     
//  }
//  console.log("MIN: " + min);

// task7 - 8

// let arr = [4,2,7,9,3,12,46,32,19];
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//    if (max < arr[i]) {
//     max = arr[i];
//    }
    
// }
// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//      min = arr[i];
//     }
     
//  }
//  aver = (max + min) / 2;
//  console.log(aver);
 
// task8 - 9

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
// let count = 0;
// for (let i = 0; i < sampleNews.length; i++) {
//     if (sampleNews[i] === " ") {
//         count++;
//     }
    
// }
// console.log(count);

// EXSTRA

// for (let number = 2; number <= 100; number++) {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(number);
//     }
// }

// const fruits = ["alma", "banan", "qarpız" , "portağal", "ananas", "nar"];
// let max = fruits[0].length;
// for (let i = 0; i < fruits.length; i++) {
//     // console.log(fruits[i].length);
//     if (max < fruits[i].length) {
//         max = fruits[i].length;
//     }
// }
// console.log(max);

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
// let sum = 0;


// for (let i = 0; i < products.length; i++) {
//     sum += products[i].price; 
    
// }  

// let ortalama = sum / products.length;
//   console.log(sum);
//   console.log(ortalama);
  
  // task14
// let array = [12,34,6,13,46,98]
// let num = +prompt("Enter num")

// for (let i = 0; i < array.length; i++) {
//   if (num == array[i]) {
//     console.log(num);
    
//   }
  
// }

  // task15

//   const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
//   ];
//   let aver = [];
//   for (let i = 0; i < students.length; i++) {
//     let total = 0; 
//     for (let j = 0; j < students[i].scores.length; j++) {
//         total += students[i].scores[j]; 
//     }
//     let average = total / students[i].scores.length; 
//    console.log(average);
//    aver.push(average);
// }
// console.log(aver);

// max = aver[0];

// for (let i = 0; i < aver.length; i++) {
//   if (max < aver[i]) {
//     max = aver[i];
//   }
// }
// console.log(max);

// task16

let text = prompt("Enter text");
let txet = "";

for (let i = text.length-1; i >= 0; i--) {
  txet += text[i];
  
}
console.log(txet);

if (txet == text) {
  console.log("polidromdur");
  
}else{
  console.log("polid deyil");
  
}