import Animal from "./Animal.js";

export default class Mammal extends Animal {

    #numLegs;
    constructor(data, callback) {
        super(data, callback);

        this.#numLegs = data.numLegs;
    }

    introduce() {

        let parentIntroduce = super.intoduce(); 
        return parentIntroduce + " walking on " + this.#numLegs + " legs";
    }
}