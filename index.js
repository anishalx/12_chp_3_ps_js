// let marks = {
//   anish: 30,
//   subh: 45,
//   lal: 50,
//   guru: 100,
// }
//q1
// for(let s = 0 ; s<Object.keys(marks).length; s++){
//   console.log("The marks of " + Object.keys(marks)[s] + " is " + marks [Object.keys(marks)[s]])
// }

//q2
// for (let num in marks) {
//   console.log("The marks of " + num + "   is  " + marks[num])
// }

//q3
let cn = 55
cn = Number.parseInt(cn)
let v
while (v != cn)
{
  v = prompt("Enter a number which is correct -")
  console.log("Oops try again !" )
}
console.log("you have entered a correct number")

//q4

// const mean =(a,b,c,d) =>{
//   return (a+b+c+d)/4
// }
// console.log("mean of four no is "+mean(4,5,5,4))