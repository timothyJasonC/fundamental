// No.1
function rectangleArea(a, b) {
    console.log(a * b)
}

// No.2
function rectanglePerimeter(a, b) {
    console.log((a * 2) + (b * 2));
}

// No.3
function circleCircumference(a) {
    const phi = Math.PI
    console.log(2 * phi * a)
}

function circleArea(a) {
    const phi = Math.PI
    console.log(phi * a * a)
}

// No.4
function angleOfTriangle(a, b) {
    console.log(180 - a - b)
}

// No.5
function differenceBetweenDatesInDays(a, b) {
    const tanggalPertama = new Date(a);
    const tanggalKedua = new Date(b);

    const selisihWaktu = Math.abs( tanggalPertama.getTime() - tanggalKedua.getTime())
    // console.log(selisihWaktu)
    const jumlahHari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));

    console.log(jumlahHari)
    // const day = jumlahHari.getDay();
    
    // console.log(dayNames[selisihWaktu]);

}

// No.6
function daysConverter(numberOfDates) {
    // tahun = jumlah hari / 365 hari 
    //days = sisa hasil bagi dari numberOfDates / 365
    var year = Math.floor(numberOfDates / 365);
    var days = numberOfDates % 365;

    //sama kyk yang atas
    var month = Math.floor(days / 30);
    days = days % 30;

    //ini sisa harinya
    var day = days;

    console.log(`${year} years, ${month} months, ${day} days`);
}

const now = new Date()
// now.toLocaleDateString()
rectangleArea(3, 5)
rectanglePerimeter(3, 5)
circleCircumference(5)
circleArea(5)
angleOfTriangle(80, 65)
differenceBetweenDatesInDays(now, '2025-01-01')
daysConverter(2378)
// '2024-02-06'
// console.log(now.toLocaleDateString())