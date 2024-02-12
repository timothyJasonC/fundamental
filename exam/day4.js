function triangle(height) {
    for (let i = 1; i <= height; i++) {
        let res = ''
        for (let j = 1; j <= i; j++) {
            res += j + ' '
        }
        console.log(res);
    }
}
// triangle(5)

function printPattern(rows) {
    let number = 1;
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += (number < 10 ? '0' + number : number) +  ' ';
            // console.log(row);
            number++;
        }
        console.log(row);
    }
}
printPattern(10); 

// arrInput = [10, 55, 79, 32]
// function maxValue(arrInput) {
//     let maxValue = arrInput[0]
//     for (let i = 0; i < arrInput.length; i++) {
//         if (maxValue < arrInput[i]) {
//             maxValue = arrInput[i]
//         }
//     }
//     console.log(maxValue);
// }
// maxValue(arrInput)

function no2(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

// no2(15);

function no3(weight, height) {
    BMI = weight / height
    if (BMI < 18.5) {
        console.log('less weight');
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log('ideal');
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log('overweight');
    } else if (BMI >= 30 && BMI <= 39.9) {
        console.log('very overweight');
    } else if (BMI > 39.9) {
        console.log('obesity');
    }
}

// no3(54,1.65)

function no4(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        // console.log(arr[i]);
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// no4 (arr)

function no5(text) {
    console.log(text.split(' '));
}
// no5('hello world')