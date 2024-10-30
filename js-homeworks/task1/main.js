// task1

let num1 = +prompt("enter num1");
let num2 = +prompt("enter num2");
let num3 = +prompt("enter num3");

if (num1 > num3 && num2 > num3) {
    max = num1 + num2;
    console.log('max:' + max); 
}else if (num2 > num1 && num3 > num1) {
    max = num3 + num2;
    console.log('max:' + max); 
}else if (num3 > num2 && num1 > num2) {
    max = num1 + num3;
    console.log('max:' + max); 
}