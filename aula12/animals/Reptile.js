import Animal from "../Animal.js";

export default class Reptile extends Animal {

    #scales
    constructor(data, callback) {
        super(data, callback)

        this.#scales = data.scales;
    }

    scales() {
        return this.#scales ? 
        this.introduce() + " and I have scales! ":
        this.introduce() + " and I do not have scales! ";
    }
}