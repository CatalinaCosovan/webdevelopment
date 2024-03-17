const setup = () => {

    let woord = "plezier";

    for(let i = 0; i < woord.length; i++) {
        if(i < (woord.length -2)) {
            console.log(woord.slice(i, i+3));
        }
    }

}
window.addEventListener("load", setup); 