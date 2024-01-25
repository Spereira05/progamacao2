// // console.log("Hello World!!")

// // window.onload = () => {
// //     console.log("Getting tired of this.")
// // }

// // console.log("Here I go again!")

// let a;
// a = 10;
// let b;
// b = 5;
// let res; 

// const somar = (a, b) => {

//     res = a+b;

//     console.log(res);
// }

// somar(a, b);

// let c;

// let d;

// const multi = (c, d) => {
//     const res2 = c*d;
    
//     console.log(res2);
// } 

// multi(10, 5);



// const res3 = multi(res, 2); 

// console.log(res3);

const arr = [2, 45, 34, 2];

// const calcAverage = (nums) => {

//     let value = 0;
//     nums.forEach(num => {
//         value += num;
//     });

//     return value/nums.length;
// }

// const result4 = calcAverage(arr);
// console.log(result4);



arr.forEach(num => {
    console.log(num);   
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let end = false;
let index = 0;
while (!end) {
    console.log(arr[index]);
    index++;
    end = index >= arr.length;
}


