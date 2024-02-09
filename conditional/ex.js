// soal No.1
function celciusToFahrenheit(a) {
    const fahrenheit = a * 9 / 5 + 32
    return fahrenheit
}

const suhuCelcius = 60
const suhuFahrenheit = celciusToFahrenheit(suhuCelcius)
console.log(suhuFahrenheit)

// soal No.2
function cekAngka(angka) {
    if (angka % 2 === 0) {
        return angka + " adalah angka genap";
    } else {
        return angka + " adalah angka ganjil";
    }
}
const angka = 2
console.log(cekAngka(angka))

// soal No.3
// bilangan prima adalah bilangan yang tidak dapat dibagi selain oleh angka itu sendiri
function cekPrima(angka) {
    let divider = 0

    for (let i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            divider++
        }
    }

    if (divider === 2) {
        console.log('Prima');
    } else {
        console.log('bukan prima');
    }
}

cekPrima(4)

// soal No.4
function hitungJumlahDeret(n) {
    let jumlah = 0;
    for (let i = 1; i <= n; i++) {
        jumlah += i;
    }
    return jumlah;
}
console.log(hitungJumlahDeret(5))

// soal No.5
function hitungFaktorial(a) {
    let jumlah = 1
    for (let i = 1; i <= a; i++) {
        jumlah *= i
    }
    return jumlah
}

console.log(hitungFaktorial(6))

// soal No.6
//   function fibonaci(a) {
a = 15
let jumlah = 0
let prev = 0
let current = 1

for (let i = 1; i < a; i++) {
    current = prev + (prev = current);
    jumlah = current
}
console.log(jumlah)
//   }

//   console.log(fibonaci(15))