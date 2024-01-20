import Veiculo from "./Veiculo.js"

export default class Carro extends Veiculo {

    constructor(data) {
        super(data);

        console.log(this.brand, this.speed);
    }
}

