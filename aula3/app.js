// let a = 10;
// let b = "100";

// if( a === "10" && b == "100") {
//     console.log(true);
// } else {
//     console.log(false);
// }









// a == "10" ? console.log(true) : console.log(false);

// switch(a) {

//     case 10:
//         console.log(true);
//         break;
//     case "10":
//         console.log(false);
//         break;
//     case "20":
//         console.log(false);
//         break;
//     case "40":
//         console.log(false);
//         break;
//         default:
//             console.log(true);
// }

// let a = 0;


// while (a < 20) {

//     console.log("a", a);

//     a = a + 1;
// }
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// const PI = 3.14;
let arr = [20, 30, 40, 10, 100];
// console.log(arr)
// for(let i = arr.length - 1; i >= 0; i--) {
    
//     arr[i] = arr[i] * PI;
// }
// console.log(arr)


// arr.forEach((element, i) => {
//     // console.log(element);
//     console.log(i);
// });

let obj ={

    name: "santiago",
    age: 18,
    gender: "male",

}

for (const key in obj) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log(obj[key]);
}