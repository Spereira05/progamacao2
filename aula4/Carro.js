import Veiculo from "./Veiculo.js"

export default class Carro extends Veiculo {

    constructor() {
        super();

        this.speed = 20;


        console.log("speed do carro", this.speed);
    }
}

