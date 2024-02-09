// let age = 21
// if (age >= 17) {
//     console.log('test')
// } else {
//     console.log('hello')
// }

// const ar = [1,2,3,4,10,11]
// for (i = 0; ar.length > 0; i++) {
//     console.log(i+=[ar]);
// }
// console.log (ar)

// var ar = [3, 7, 11];
// var sum = 0;

// for (var i = 0; i < ar.length; i++) {
//     sum += ar[i];
// }
// console.log(sum)

let date = new Date('2024-02-06')
let day = date.getDay()
console.log(day)

switch (day) {
    case 0:
        console.log('Minggu')
        break
    case 1:
        console.log('Senin')
        break
    case 2:
        console.log('Selasa')
        break
    case 3:
        console.log('Rabu')
        break
    case 4:
        console.log('Kamis')
        break
    case 5:
        console.log('Jumat')
        break
    case 6:
        console.log('Sabtu')
        break
}
