const no1 = () => {
    const input = 9
    let limit = 10

    for (let i = 1; i <= limit; i++) {
        console.log(`${input} x ${i} = ${input * i}`);
    }
}
// no1(10)

function no2(str) {
    const cleanedStr = str.toLowerCase()

    const cek = cleanedStr === cleanedStr.split('').reverse().join('')

    console.log(cek ? 'Palindrome' : 'Not Palindrome');
}

function no2For(str) {
    let reverseWord = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseWord += str[i]
    }
    const cek = str === reverseWord
    console.log(cek ? 'Palindrome' : 'Not Palindrome');
}

// no2('12321')
// no2For('12321')

function no3(CmToKm) {
    const converter = CmToKm / 100000
    console.log(`${CmToKm} cm is ${converter} km`);
}
// no3(100000) //required : number


function no4(num) {
    let rupiah = 0

    const numRev = num.toString().split('').reverse().join('')
    // console.log(numRev);

    for (let i = 0; i < numRev.length; i++) {
        if (i % 3 === 0) {
            rupiah += numRev.substr(i, 2) + '.'
        }
    }
    const cek = rupiah.split('', rupiah.length - 1).reverse().join('')
    console.log(`Rp. ${cek},00`);
}
// no4(1000)

function no4For(num) {
    let result = ''
    let count = 0
    const numString = num.toString()

    for (let i = numString.length - 1; i >= 0; i--) {
        if (count % 3 === 0 && count > 0) {
            result = '.' + result
        }

        result = numString.charAt(i) + result
        count++
    }
    console.log(result);
}
// no4For(100000000000000)

function no5Remake(text, word) {
    console.log(word.replace(text, ''));
}
// no5Remake('ell', 'hello world')


function no6(text) {
    //ubah semua kata menjadi array string
    const words = text.split(' ')
    // console.log(words);

    //loop untuk semua kata yang ada
    for (let i = 0; i < words.length; i++) {
        //buat huruf pertama menjadi huruf besar
        const word1 = words[i][0].toUpperCase()
        //buat sisa huruf menjadi huruf kecil
        const word_ = words[i].slice(1).toLowerCase();
        //gabungkan hasil konversi tadi
        words[i] = word1 + word_
        // console.log(words[i]);
    }
    //gabungkan menjadi 1 string bukan aray
    const result = words.join(' ');
    console.log(result);
}
// no6('hello world')

function no7(text) {
    //ubah text jadi string array
    const words = text.split('')

    //putar balik urutan setiap kata
    const reverse = words.reverse()
    // console.log(reverse);

    //gabungkan semua hasilnya
    const result = reverse.join('')
    console.log(result);

}
// no7('hello')

function no8(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === char.toUpperCase()) {
            // Jika karakter adalah huruf kapital, ubah menjadi huruf kecil
            result += char.toLowerCase();
        } else {
            // Jika karakter adalah huruf kecil, ubah menjadi huruf kapital
            result += char.toUpperCase();
        }
    }
    console.log(result);
}
// no8('The QuiCk bROwn Fox')

function no9(a, b) {
    if (a > b) {
        console.log(`${a} > ${b}`);
    } else if (a < b) {
        console.log(`${a} < ${b}`);
    } else {
        console.log(`${a} = ${b}`);
    }
}
// no9(3,5)

function no10(a, b, c) {
    let arr = [a, b, c];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

function no10(a, b, c) {
    let arr = [a, b, c]
    if (a > b) {
        let d = a
        a = b
        b = d
    }
    if (b > c) {
        let d = b
        b = c
        c = d
    }
    if (a > b) {
        let d = a
        a = b
        b = d
    }
    console.log(a, b, c);
}
no10(30, 200, 1)

function no11(text) {
    if (typeof text === 'string') {
        console.log(1);
    } else if (typeof text === 'number') {
        console.log(2);
    } else if (typeof text === 'object') {
        console.log(3);
    } else {
        console.log('pikir sendiri');
    }
}
// no11({name:'john', age:23})

function no12(input, text) {
    const words = text.split('')
    for (let i = 0; i < words.length; i++) {
        if (words[i] === input.toUpperCase() || words[i] === input.toLowerCase()) {
            words[i] = '*';
        }
    }
    console.log(words.join(''));
}
// no12('a', "an apple Always" )




