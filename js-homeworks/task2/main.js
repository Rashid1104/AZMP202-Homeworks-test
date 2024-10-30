
let num1 = +prompt("enter num1");
let num2 = +prompt("enter num2");
let num3 = +prompt("enter num3");

    let maxNumber = '';
    let minNumber = '';

    if (num1 >= num2 && num1 >= num3) {
        maxNumber += a;
        if (b >= c) {
            maxNumber += num2 + '' + num3;
        } else {
            maxNumber += num3 + '' + num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        maxNumber += num2;
        if (a >= c) {
            maxNumber += num1 + '' + num3;
        } else {
            maxNumber += num3 + '' + num1;
        }
    } else {
        maxNumber += num3;
        if (num1 >= num2) {
            maxNumber += num1 + '' + num2;
        } else {
            maxNumber += num2 + '' + num1;
        }
    }

    if (num1 <= num2 && num1 <= num3) {
        minNumber += num1;
        if (num2 <= num3) {
            minNumber += num2 + '' + num3;
        } else {
            minNumber += num3 + '' + num2;
        }
    } else if (num2 <= num1 && num2 <= num3) {
        minNumber += num2;
        if (num1 <= num3) {
            minNumber += num1 + '' + num3;
        } else {
            minNumber += num3 + '' + num1;
        }
    } else {
        minNumber += num3;
        if (num1 <= num2) {
            minNumber += num1 + '' + num2;
        } else {
            minNumber += num2 + '' + num1;
        }
    }

    console.log("Max: " + maxNumber);
    console.log("Min: " + minNumber);

