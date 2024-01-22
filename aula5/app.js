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

const data = {
    carros: [
        {
            brand:"fiat",
            speed: 50,
        },
        {
            brand:"ferrari",
            speed:200,
        },
        {
            brand: "Nissan",
            speed: 600,
        },
        {
            brand: "Pagani",
            speed: 800,
        },
        {
            brand: "koenigsegg",
            speed: 800,
        },
        {
            brand: "Rimac",
            speed: 800,
        },
    ],
    motas: [
        {
            brand: "Ducati",
            speed: 400,
        },
        {
            brand: "BMW",
            speed: 500,
        },
        {
            brand: "KTM",
            speed: 500,
        },
        {
            brand: "kawasaki",
            speed: 500,
        },
        {
            brand: "Yamaha",
            speed: 450,
        },
        {
            brand: "Suzuki",
            speed: 300,
        },
        {
            brand: "Honda",
            speed: 450,
        }
    ],
};

const veiculos = [];

window.onload = () => { // callback function
    console.log("window loaded");
    const nav = document.querySelector("nav");

    const createUL = (name, data) => {
        const ul = document.createElement("ul");
        const title = document.createElement("li");
        title.innerText = name;
        ul.appendChild(title);
        

        data.forEach(element => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.classList.add("styled-button");
            button.onclick = (event) => {
                switch (name) {
                    case "carros":
                        veiculos.push(new Carro(element));
                        break;
                    case "motas":
                        veiculos.push(new Mota(element));
                        break;
                
                    default:
                        break;
                }
            }
            button.innerText = element.brand;
            li.appendChild(button);
            ul.appendChild(li);

        });
        
        nav.appendChild(ul);
    };

    for (const key in data) {
        createUL (key, data[key]);
    }
};



// const carro = new Carro()
// const mota = new Mota()





