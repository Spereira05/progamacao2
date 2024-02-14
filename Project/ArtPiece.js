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
        // this.imageDescription = document.createElement("p");
        // this.imageDescription.innerText = this.data.description;
        // this.imageTitle = document.createElement("h2");
        // this.imageArtist = document.createElement("h3");
        // this.imageTitle.innerText = this.data.title;
        // this.imageArtist.innerText = this.data.artist;
        // this.container.appendChild(this.imageElem);
        // this.container.appendChild(this.imageDescription);
        // this.container.appendChild(this.imageTitle);
        // this.container.appendChild(this.imageArtist);
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