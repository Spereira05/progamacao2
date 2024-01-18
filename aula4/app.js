// // let a = 1;
// // let b = 0;

// // const fibonnaci = () => {

// //     for (let i = 0; i <= 10; i++) {
// //         const temp = a;
// //         a = a + b;
// //         b = temp;
// //             console.log(a);
// //     }






// //     // for (let i = 0; i < 10; i++) {
        
// //     //     b = a
// //     //     a = a += b;
// //     //     console.log(a)

// //     // }
// // }

// // fibonnaci();

// // let user = {
// //     id: 0,
// //     name: "santiago",
// //     age: 18,
// //     gender: "male",
// //     dob: "15-09-2005",
// //     hobbies: ['ler', 'ginásio', 'ouvir música', ]
// // }

// // console.log(user);

// // for (const key in user) {
// //     console.log(user[key]);
// // }

// let user = {
//     id: 0,
//     name: "santiago",
//     age: 18,
//     gender: "male",
//     dob: "15-09-2005",
//     hobbies: ['ler', 'ginásio', 'ouvir música', ]
// }

// class User {

//     #name;
//     #age;

//     constructor(user) {

//         this.#name = user.name;
//         this.#age = user.age;

//         console.log(this.#getName());
//     }
// }
//     #getName() {

//         return this.#name;
//     }

//     getAge() {

//         return this.age;
//     }

//     set name(value) {
        
//         this.#name = value;
//     }  

//     get name() {

//         return this.#name;
//     }   
// }

// const user2 = new User(user);
// console.log(user2.getName());

import Carro from "./Carro.js"
import Mota from "./Mota.js"

const carro = new Carro()
const mota = new Mota()





