// console.log("Hello World!(js)");

// var a = 2;
// let b = 10;
// const c = 'const c';

// const func = () => {

//     f = a + b;

//     return f
// }

// console.log(func());

// let arr = [0, 10, 12, 89];

// let len = arr.length;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }
// i = 0;
// while(i < len) {
//     console.log(arr[i]);
//     i++;
// }

//classes

// export default class Test {
//     #name
//     constructor(name){
//         this.#name = name;
//     }

//     sayHello(){
//         return "Welcome to the world, " + this.#name;
//     }
// }
// const testClass = new Test("Santiago js");
// console.log(testClass.sayHello());

import Test from "./Test.js";
const test = new Test("santiago js");
console.log(test.sayHello());