let now = new Date()
let date = new Date(0)
let date2 = new Date('2024-12-01')
console.log(now)
console.log(date)
console.log(date2)

console.log(now.getFullYear(),now.getDate(),now.getMonth())
console.log(now.getDay())
console.log(now.setDate(20))
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())

console.log(typeof(1 + 1 + '1'))

let n = 2
n += 5
n *= 2
console.log(n);