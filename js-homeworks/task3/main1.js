// task3

// let k1 = +prompt("enter k1");
// let k2 = +prompt("enter k2");
// let h = +prompt("enter h");


// if (k1 ** 2 + k2 ** 2 === h ** 2) {
//     console.log("Result: düzbucaqlı üçbucaqdır");
// } else {
//     console.log("Result: düzbucaqlı üçbucaq deyil");
// }

// task4
// let number = +prompt("Enter number:")


// if (number >= 100 && number <= 999) {
//    let hundr = (number - number % 100) / 100;
//    let tens = (number % 100 - (number % 100) % 10) / 10;
//    let num = (number % 100) % 10;
//     console.log("Result:", hundr, tens, num);
// } else {
//     console.log("it is not valid");
// }

// task5
let month = prompt("Enter month:")

switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month} has 31 days`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days`);
        break;
    case "february":
        console.log(`${month} has 28 days`);
        break;
    default:
        console.log("Invalid month");
        break;
}