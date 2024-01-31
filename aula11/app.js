import Bird from "./Bird.js"
import Mammal from "./Mammal.js"
import Reptile from "./Reptile.js"
import Zoo from "./Zoo.js"

window.onload = async () => {

    console.log(Zoo.Zooinfo());

    const request = await fetch("data.json");
    const result = await request.json();

    const zoo = new Zoo(() => {
        console.log("zoo event")
    });
    result.forEach(item => {
        zoo.addAnimal(item);
    });

    //zoo.showAnimals();

}