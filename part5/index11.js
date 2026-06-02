// const marks = [10, 12, 14, 19]
// console.log(marks[0])
// console.log(marks.length)

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i])
// }

// marks.forEach((element)=>console.log(element))

// marks.map((element)=>console.log(element))

// const newArray = marks.map((element) => {
//     return element
// })
// console.log(newArray)

// const marks = [10, 12, 14, 19]
// const newArray = marks.map((element) => element+5)
// console.log(newArray)

// const marks = [10, 12, 14, 19]
// const newArray = marks.filter((element) => element>12)
// console.log(newArray)

// const marks = [10, 12, 14, 19]
// const found = marks.find((element) => element>12)
// console.log(found)

const marks = [10, 12, 14, 19]
const total = marks.reduce((sum,element) => sum + element,0)
console.log(total)