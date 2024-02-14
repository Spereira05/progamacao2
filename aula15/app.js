// // window.addEventListener("keydown", () => {
// //     console.log("jandkadkwhdiuahk")
// // })

// // window.onkeydown = () => {
// //      console.log("key down")
// // }
// const func = () => {
//     console.log("hello");
// }
let arr = [[1, 34, 5, 6], ["a", "b", "c"], [true, false, false], [[10,290,30], ["aa", "bb"]]];
    
// for (let i = 0; i < arr.length; i++) {
    
//     for (let j = 0; j < arr[i].length; j++) {

//         for (let k = 0; k < arr[i][j].length; k++) {
//             console.log(arr[i][j][k]);
            
//         }
//     }
    
    
// }

// console.log(arr[2]);
// arr[2][0] = "true";
// arr[2][1] = "false";
// arr[2][3] = "flase";
// console.log(arr[2]);


const obj = {
    name:"Santiago",
    children: [
        {
            name:"Rodrigo",
            children: [
                { name: "Diogo" }, { name: "Clarissa" }, { name: "Beatriz" },
            ],
        },
        {
            name:"Beatriz",
            children: [
                { name: "Tiago" }, { name: "Clara" }, { name: "Ema" },
            ],
        },
    ],
};
const recursion = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log( arr[i].name);
        if(arr[i].children){
            recursion(arr[i].children);
        }
    }
}
recursion(obj.children);