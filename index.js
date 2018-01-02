// let squirrel = (name ) => {
//   console.log(name + "is a squirrel => hash rocket wow")
// }
//
// squirrel("bob")
//
// let squirrels = ["Mack", "Pack"]
// let printer = squirrels.map((name) => {
//   //foreach just does it and doesnt return
//   //map actually creates a new array that has all the stuff we did to the original
//   let sentence = name + " is squirrel"
//   console.log(sentence)
//   return sentence //optional because we just want to console log
// })
// console.log(printer) // forEach always return undefined
// console.log(squirrels) // should be unchanged
//
// for(let i = 0; i < squirrels.length; i++){
//     console.log(squirrels[i]);
// }
//
// let isBigNumber = (num) => {
//   return num > 10 ? "big number" : "small number" //ternary statement
// }
// console.log(isBigNumber(1))
// console.log(isBigNumber(11))
//
// //switch cases
// let food = "soup"
// console.log(food)
// switch(food){
//   case "salad":
//     console.log("fork");
//     break;
//   case "soup":
//     console.log("spoon");
//     break;
//   default:
//     console.log("no");
// }
//
// const a = 1;
// //if we did let or var a = 1; instead it would work
//
//
// // (() => {
// //   a = 2 //causes an error cause you cant even try to reasign a constant
// //   console.log(a)
// // })()
// //immediately invoked function : define it by just wrapping it in parenthesis and then call it with the parthesis afterwards
//
//
// //let and var are similar but they sometimes give different errors - let is newer
// //let gives an error if you try to use it befor you use let to define it
// //(hoisting)the compiler looks for the "let" calls and knows what gets defined in each function before it is run so when you use something before you "let" it you get a reference erroc
// //whereas if you use something before you "var" it, its just undefined
//
// // (() => {//reference error
// //   console.log(word)
// //   let word = "parsnip"
// // })()
// //
// // (() => {//undefined
// //   console.log(word)
// //   var word = "parsnip"
// // })()
let isBigNumber = (num) => {
  return num > 10 ? "big number" : "small number" //ternary statement
}

let mult5 = (num) => {
  return num * 5
}

console.log(mult5(6))

let greaterThanAHundred = (n,fn) =>{
  return fn(n) > 100 //? true : false
}

console.log(greaterThanAHundred(25, mult5))

console.log(1)
setTimeout(() => {
  console.log(2)
}, 0) //happens 0 milliseconds after the rest of stuff finishes
console.log(3)
//prints 1 3 2
