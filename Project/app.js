import Gallery from "./Gallery.js";



window.onload = async () => {
    
    const request = await fetch("data.json");
    const result = await request.json();

    const gallery = new Gallery((item) => {
        updateInfo(item)
    });

    
    result.forEach(item => {
        gallery.addItem(item);
    });

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function navigateGallery(direction) {
        gallery.navigate(direction);
    }

    prevBtn.addEventListener("click", () => navigateGallery(-1));
    nextBtn.addEventListener("click", () => navigateGallery(1));
    
    function updateInfo(item) {
        console.log(item)
        document.querySelector("h2").innerText = item.title;
        document.querySelector("h3").innerText = item.artist;
        document.querySelector("p").innerText = item.description;
    }
}



