import Animal from "./Animal.js";

export default class Reptile extends Animal {

    #scales
    constructor({name, scales, image}, callback) {
        super(name, image, callback)

        this.#scales = scales;
    }

    scales() {
        return this.#scales ? 
        this.introduce() + " and I have scales! ":
        this.introduce() + " and I do not have scales! ";
    }
}