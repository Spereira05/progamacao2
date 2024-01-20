import Veiculo from "./Veiculo.js"

export default class Mota extends Veiculo {

    constructor(data) {
        super(data); 

        console.log("motorcycle speed", this.speed);
    }
}
