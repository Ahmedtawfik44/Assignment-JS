// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Math.round(100000.3)); // 100000
console.log(Math.trunc(100000.3)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.3)); // 100000
console.log(Number(100000..toFixed(0))); // 100000
console.log(Math.min(100000 , 500000 ,600000)); // 100000
console.log(parseInt("100000.2")); // 100000

//--------------------------------------------
console.log(Math.abs(Number.MIN_SAFE_INTEGER)); // or (-num) 9007199254740991
//--------------------------------------------

console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16

//------------------------------------

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//-----------------------------------------------
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // true + true =  2

//--------------------------------------------------
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(flt.toFixed(0)); // 10

//-------------------------------'
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4