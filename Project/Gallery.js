import Painting from "./Painting.js";

export default class Gallery {

    view;
    callback;
    artPieces = [];
    container;
    currentIndex = 0;

    constructor(callback) {
        this.callback = callback;
        console.log(callback)
        this.container = document.querySelector("#gallery-container");
        this.artPieces = [];
    } 
        
    addItem(item) {
        let nextItem = null;
        switch (item.type) {
            case "Painting":
                nextItem = new Painting(item, () => {
                    this.callback(nextItem)
                });
                break;
        }
        if (nextItem) {
            this.artPieces.push(nextItem);
            this.container.appendChild(nextItem.view);
        }
    }   
    navigate(dir) {

        this.artPieces[this.currentIndex].view.style.display = "none";
        if(dir === -1) {
            this.currentIndex--;
            if(this.currentIndex < 0) this.currentIndex = this.artPieces.length -1
        }
        else {
            this.currentIndex++;
            if(this.currentIndex >= this.artPieces.length) this.currentIndex = 0;
        }
        this.artPieces[this.currentIndex].view.style.display = "initial";
    }   
}