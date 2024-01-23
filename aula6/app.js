import Carro from "./Carro.js"
import Mota from "./Mota.js"

const loadData = async (url) => {

    const request = await fetch(url);
    const result = await request.json();

    console.log(result);    
    return result;
}

const createLiContent = (item) => {

    const button = document.createElement("button");
    button.innerText = item.brand;

    button.onclick = () => {

        switch (item.type) {
            case "carro":
                new Carro(item);
                break;
            case "mota":
                new Mota(item);
                break;
            case "barco":
                new Boat(item);
                break;
        }

    }
    return button;
}

const createList = (data) => {
    const ul = document.querySelector("ul");
    data.forEach(item => {
        const li = document.createElement("li");
        il.appendChild(createLiContent(item));
        ul.appendChild(li);
    });
}



window.onload = async () => {

    const data = await loadData("data.json");
    const sortedData = data.sort((a, b) => a.type.localeCompare(b.type));

    const ul = createList(data);

    console.log(data);
}



