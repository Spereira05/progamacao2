import Bird from "./animals/Bird.js"
import Mammal from "./animals/Mammal.js"
import Reptile from "./animals/Reptile.js"

export default class Zoo {

    #animals
    #callback
    #currentAnimal
    constructor(callback) {
        this.#animals = [];
        this.#callback = callback;
        this.#currentAnimal = currentAnimal;

    }



    addAnimal(animal) {
        switch(animal.type) {
            case "Bird":
                this.#animals.push(new Bird(animal, () => this.#performAnimal(animal)));
                break;
            case "Mammal":
                this.#animals.push(new Mammal(animal, () => this.#performAnimal(animal)));
                break;
            case "Reptile":
                this.#animals.push(new Reptile(animal, () => this.#performAnimal(animal)));
                break;
            default:
                break;
        };
    }
#performAnimal(animal) {
        this.#currentAnimal = 

        this.#callback(animal);
    }
    
    showAnimals() {
        this.#animals.forEach(animal => {
            console.log(animal.introduce());
        });
    };

    getAnimal(name) {
        return this.#animals.find(animal => animal.name === name); 
    }

    static Zooinfo() {
        return "A zoo is a place to display animals";
    }
};