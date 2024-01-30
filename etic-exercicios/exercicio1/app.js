window.onload = () => {
    /**
     * -- Declaração e Manipulação de Variáveis --
     * Declara duas variáveis, (a , b) e atribui-lhes um valor.
     * Troca os valores de a e b sem usar uma variável temporária.
     * Faz console.log dessas 2 variáveis.
     */


    let a = 5;

    let b = 10;

    a = 10; 

    b = 5;

    console.log(a, b)

    /**
     * -- Instruções Condicionais --
     * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
     * O resultado dessa função verifica se o número é par ou ímpar.
     * Faz console.log desse resultado.
     */


    const isEven = (value) => {

        if(value % 2 === 0) {
            console.log("É par");
        } else {
            console.log("Não é par");
        }
        return value % 2 === 0 ? "isEven" : "isOdd";
    }

    isEven()

    /**
     * -- Arrays --
     * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
     * Itera sobre esse array e faz console.log apenas dos números pares.
     */


    arr = [2, 123, 34, 65, 48];

    arr.forEach(element => {
        if(element % 2 === 0) {
            console.log(element)
        } else {
        }
    });


    /**
     * -- Funções --
     * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
     * Faz console.log desse resultado.
     */





    /**
     * -- Objetos --
     * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
     * Faz console.log dessas propriedades.
     */

    const obj = {
        name : "Santiago",
        age : 18,
        gender : "male"
    }

    /**
     * -- Loops --
     * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
     * Faz console.log a cada iteração.
     */

    const fibonnaci = () => {
        const sequence = [1, 0];

        for (let i = 0; i < sequence.length; i++) {
            const next = sequence[i + 1] + sequence[i + 2];
            sequence.push(next)
        } 
        return sequence;
    }

    const numTerms = 10;

    fibonnaci();
    console.log(fibonnaci(numTerms));

    /**
     * -- Manipulação do DOM --
     * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
     * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
     */



    /**
     * -- Async/Await e Fetch --
     * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
     * e transforme o resultado desse fetch em formato json.
     * Faz console.log desse json.
     */
}