const setup = () => {

    let button = document.querySelector("button");

    button.addEventListener("click", voegTextToe);
}

const maakRandomTekst = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 50) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const voegTextToe = () => {
    let par = document.createElement("p");
    let tekst = document.createTextNode(maakRandomTekst());
    par.appendChild(tekst);
    let div = document.getElementById("myDIV");
    div.appendChild(par);
}

window.addEventListener("load", setup); 