import Animal from "./Animal.js";

export default class Insect extends Animal {

    #bloodSucker;
    constructor(data, callback) {
        super(data, callback);

        this.#bloodSucker = data.bloodSucker;
    }

    introduce() {

        let parentIntroduce = super.introduce();
        return this.#bloodSucker ? 
        parentIntroduce + " and I suck blood" :
        parentIntroduce + " and I do not suck blood";
    }
}
