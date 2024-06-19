//Define function
//ek baar code likh lo aur usko baar baar use karo....That's function
//invoke -> bulana
//Hamlog arrow function banate samay koi variable (let, var, const), functionName se pahle likh sakte h.

function myfunction(msg){
  console.log(msg);
  console.log("Hii, How Are u");
  console.log("Function in JS");
}

function f1(msg1, n) {
  console.log(msg1, n);
}

function sum(a, b) {
  console.log(a+b);
}

function sum1(a, b) {
  let c = a + b;
  return c;
}

function mul(a, b) {
  return a*b;
}

const sum2 = (a, b) => {
  return a+b;
}

const mul1 = (a, b) => {
  let d = (a + b) * (a + b);
  console.log(d);
}

const printHello = () => {
  console.log("Arrow function without parameter");
}

function q1(string_name)  {
  let count = 0;
  for(let char of string_name) {
    // console.log(char)
    if(char === "a" || 
       char === "e" || 
       char === "i" || 
       char === "o" || 
       char === "u") {
      count = count + 1;
    }
  }
  console.log(count); 
}

const count_Vowel = (name) => {
  let count = 0;
  for(let char of name) {
    // console.log(name);
    if(char === "a" ||
       char === "e" ||
       char === "i" ||
       char === "o" ||
       char === "u"
    ) {
      count = count + 1;
    }
  }
  console.log(count);
}


myfunction("print the message");
f1("This is first message", 7);
sum(1, 3);
sum(4432345, 9809865);
sum(3456, -9876542);
console.log(sum1(7, 3));
let s = mul(4, 9);
console.log(s);
console.log(sum2(9, 4));
mul1(5, 2); 
printHello();
q1("sanukumar");
q1("aeiouaeiouaeiouaeiouaeiou");
count_Vowel("asdfghjklmnbvcxzz");

let arr = [1, 2, 3, 4, 5];
arr.forEach(function fun(val) {
  console.log(val);
});

//Using Arrow Function
let arr1 = ["Apple", "Mango", "Litchi", "Papaya", "Banana"];
arr1.forEach((val, index, arr1) => {
  console.log(val, index, arr1);
});

//Qno : 2
let arr2 = [2, 4, 6, 8, 10]; 
arr2.forEach((val) => {
  console.log(val*val);
});

let arr3 = [1, 3, 5, 7, 9];
let calSquare = (arr3) => {
  console.log(arr3*arr3);
};
arr3.forEach(calSquare);

//Using map method
let arr4 = [9, 8, 7, 6, 5];
let newArr = arr4.map((val) => {
  return val;
});
console.log(newArr);

//Using filter method
let arr5 = [4, 6, 8, 1, 3, 2, 7, 9];
let even_Arr = arr5.filter((val) => {
   return (val % 2 == 0);
});
console.log(even_Arr);

//Reduce method
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oup = arr6.reduce((prev, curr) => {
  return prev + curr;
});
console.log(oup);

// Qs1.
let marks = [97, 99, 85, 56, 47, 33, 78, 95];
let toppers_Arr = marks.filter((val) => {
  return (val >= 90);
});
console.log(toppers_Arr);

// Qs2.
let n = prompt("Enter a number");
let arr8 = [];
for(let i = 1; i <= n; i++) {
  arr8[i-1] = i;
}
console.log(arr8);


let finalSum = arr8.reduce((prev, curr) => {
  return prev + curr;
});
console.log("Sum of Array :  " + finalSum);


let productAll = arr8.reduce((prev, curr) => {
  return prev * curr;
});
console.log("Product of Array : " + productAll);