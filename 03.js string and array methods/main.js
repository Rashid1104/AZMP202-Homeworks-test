// function convert(text) {
//     return text.toUpperCase();
// }
// console.log(convert("hello"));



// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }
// console.log(findLongestWord("lorem ipsum artrete"));



// function reverseWords(sentence) {
//     const reversed = sentence.split(" ").reverse().join(' ');
//     return reversed;
// }
// console.log(reverseWords("hello nigga"));



// function coxtoaz(array) {
//     return array.sort((a, b) => a - b);
// }
// console.log(coxtoaz([12,56,96,47,65,15,20,5]));


// function replaceCharacter(str, oldChar, newChar) {
//     return str.toLowerCase().split(oldChar).join(newChar);
// }

// console.log(replaceCharacter("Salam", "a", "o"));

// task1

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// function shopping(array) { 
//     array.unshift('Meat')
//     array.pop();
//     array.push('Sugar')
//     const Index = array.indexOf('Tea');
//     if (Index !== -1) {
//         array[Index] = 'Green Tea';
//     }

//     return array;
    
// }
// console.log(shopping(['Milk', 'Coffee', 'Tea', 'Honey']));

// task2

// const countries = ['Albania', 'Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

// function country(array) {
//     array.splice(2,2,'Azerbaijan')
//     array.reverse();
//     return array
// }
// console.log(country(['Albania', 'Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']));

// task3

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// function FullStack(array1,array2) {
//    let fullstack = array1.concat(array2)  
//    return fullstack;
// }
// console.log(FullStack(['HTML', 'CSS', 'JS', 'React', 'Redux'],['Node','Express', 'MongoDB']));

// task4

// const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon]

// function Companies(array) {
//     let arr = array.slice(0, 3);
//     console.log("First 3 companies:", arr);

   
//     let arr1 = array.slice(-3);
//     console.log("Last 3 companies:", arr1);

//     const middleIndex = Math.floor(array.length / 2);
//     let arr2 = array.length % 2 === 0
//         ? array.slice(middleIndex - 1, middleIndex + 1) 
//         : array.slice(middleIndex, middleIndex + 1); 
//     console.log("Middle company or companies:", arr2);

//     array.sort();
//     console.log("Sorted companies:", array);

// let array3 = [];
//     for (let i = 0; i < array.length; i++) {     
//              array3.push(array[i].toUpperCase());              
//     }

//     for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'Google') {
//         array.push('Twitter')
//     }
//     }
//     const OneO = []; 

   
//     for (let i = 0; i < array.length; i++) {
//         const company = array[i];
//         let count = 0; 
//         for (let j = 0; j < company.length; j++) {
//             if (company[j].toLowerCase() === 'o') {
//                 count++;
//             }
//         }
//         if (count > 1) {
//             OneO.push(company);
//         }
//     }

//     return {
//         firstThree: arr,
//         lastThree: arr1,
//         middleCompanies: arr2,
//         sortedCompanies: array,
//         upperCase: array3,
//         addcompanies: array,
//         MoreWithOne0:  OneO,
//     };
// }

// console.log(Companies(['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']));

// task5

// function TwoArr(arr1,arr2) {
//     let str = "";
//     let con = arr1.concat(arr2).join("*")
//     str = con
//     return str
// }
// console.log(TwoArr([1,2],[3,4]));

