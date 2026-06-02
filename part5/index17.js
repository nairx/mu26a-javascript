const products = [
  { id:1, name: "Laptop", price: 75000 },
  { id:2, name: "Desktop", price: 25000 },
  { id:3, name: "Keyboard", price: 1000 },
];
const newArr = products.map((product)=> ({...product}))
console.log(newArr)