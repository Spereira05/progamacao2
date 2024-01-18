import Veiculo from "./Veiculo.js"

export default class Mota extends Veiculo {

    constructor() {
        super(); 

        this.speed = 50;

        console.log("speed da mota", this.speed);
    }
}
