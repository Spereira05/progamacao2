import ArtPiece from "./ArtPiece.js";

export default class Painting extends ArtPiece{
    
    container;
    constructor(data, callback) {
        super(data, callback)

    }

    title() {
        return this.data.title;
    }
    get image() {
        return this.data.image;
    }
    get title() {
        return this.data.title;
    }
    set title(value) {
        this.data.title = value;
    }
}