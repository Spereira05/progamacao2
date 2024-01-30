window.onload = () => {

    const test = new Test("test1", (value) => {
        h1.innerText = value;
    });
    test.setName("test1");
    test.width = 100;
    test.height = 100;
    test.backgroundColor = "red";

    const h1 = document.querySelector("h1");

    

    
    console.log(test.width);
    console.log(test.height);   
    console.log(test.backgroundColor);

    const test2 = new Test2(() => {
        h1.innerText = "test2.clicked";
    });
    test2.width = 200;
    test2.height = 200;
    test2.background = "blue";



    // const test2 = new Test(() => {
    //     console.log("you clicked here!");
    // });
    // test2.width = 200;
    // test2.height = 200;
    // test2.backgroundColor = "blue";

    // const test3 = new Test(() => {
    //     console.log("you clicked here!");
    // });
    // test3.width = 300;
    // test3.height = 300;
    // test3.backgroundColor = "green";
    
}



class Test { 

    #name = "test";
    #age = 18;
    #gender = "female";

    #view;
    #callback;

    constructor(name, callback) {
        this.#name = name;
        this.#callback = callback;
        this.#view = document.createElement("div");
        this.#view.className = "view";
        this.#view.onclick = () => {
            this.#callback(this.#name + " clicked");
        }
        document.body.appendChild(this.#view);
    }

    setSize(width, height, backgroundColor) {
        this.#view.style.width = width + "px";
        this.#view.style.height = height + "px";
        this.#view.style.backgroundColor = backgroundColor;

    }

    get width() {
    return this.#view.style.width.replace("px", "");
}

    set width(value) {
        this.#view.style.width = value + "px";
        
    }
    get heigth() {
        return this.#view.style.height.replace("px", "");
    }
    set height(value) {
        this.#view.style.height = value + "px";
        
    }

    get backgroundColor() {
        return this.#view.style.backgrounndColor;
    }
    set backgroundColor(value) {
        this.#view.style.backgroundColor = value;
        
    }

    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    getGender() {
        return this.#gender;
    }

    setName(value) {
        this.#name = value;
    }
    setAge(value) {
        this.#age = value;
    }
    setGender(value) {
        this.#gender = value;
    }
}

class Test2 {

    #callback
    #view

    constructor(callback) {
        this.#view = document.createElement("div");
        this.#view.onclick = () => callback();

        document.body.appendChild(this.#view);

    }

    set width(value) {
        this.#view.style.width = value + "px";

    }
    set height(value) {
        this.#view.style.height = value + "px";
        
    }
    set background(value) {
        this.#view.style.backgroundColor = value;
        
    }
}

