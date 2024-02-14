export default class ArtPiece {
    data;
    callback;
    artPieces = [];
    active = false;
    imageElem;
    constructor(data, callback) {
        this.data = data;
        this.callback = callback;
        this.artPieces = [];
        this.active = false;

        this.imageElem = document.createElement("img");
        this.imageElem.className = "hidden";
        this.imageElem.src = this.data.image;
        this.imageElem.onclick = () => {  
                this.callback(this.data);
           
        };  

    }


    get view() {
        return this.imageElem;
    }
    get image() {
        return this.data.image;
    }
    get artist() {
        return this.data.artist;
    }
    get description() {
        return this.data.description;
    }
}