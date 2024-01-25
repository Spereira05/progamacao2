window.onload = async () => {

    // const large = document.querySelector(".large");
    // const small = document.querySelector(".small");
    // // let intervalID = null
    // large.onclick = () => {
    //     small.dispatchEvent(new CustomEvent('small_event'), );
    //     // if(intervalID === null) {
    //     //     intervalID = setInterval(() => {
    //     //         console.log("interval");
    //     //     }, 1);
    //     // } else{
    //     //     console.log("stop interval", intervalID)
    //     //     clearInterval(intervalID);
    //     //     intervalID = null; 
    //     // }
    // }
    // small.addEventListener("small_event", () => {
    //     console.log("large clicked");
    // })
    const test = new AppTest();
    test.addEventListener('test_data_loaded', (event) =>{
        console.log(event.detail);
    })

    test.loadData();
}

class AppTest extends HTMLElement{

    constructor() {
        super();
    }

    async loadData() {

        const req = await fetch("data.json");
        const res = await req.json();

        this.dispatchEvent(new CustomEvent("test_data_loaded", {detail:res}));
    }
}
customElements.define('app-test', AppTest);
    
// large.addEventListener("div_click", () => {
    //     console.log("div clicked")
    // })


// window.addEventListener = ("load", () => {
//     console.log("window loaded twice");
// })