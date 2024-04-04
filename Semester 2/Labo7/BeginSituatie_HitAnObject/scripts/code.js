
let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    MAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
}

const setup = () => {
    let fotoBom = document.getElementById("bom");

    fotoBom.addEventListener("click", stop);
    global.timeoutId = setInterval(verschijnenFoto, global.MOVE_DELAY);

    verschijnenFoto();
}

const stop = () => {
    clearInterval(global.timeoutId);
    window.alert("Game over!");
}

const verschijnenFoto = () => {
    let field = document.getElementById("playField");
    let randomNr = Math.floor(Math.random()*5);

    let randomLeft = Math.floor(Math.random() * (600-global.IMAGE_SIZE));
    let randomTop = Math.floor(Math.random() * (760-global.IMAGE_SIZE));


    //foto verwijderen uit field
    let alleImages = field.children;

    for(let i = 0; i < alleImages.length; i++){
        if(alleImages[i].getAttribute("id") === "target") {
            alleImages[i].remove();
        }
    }


    //foto toevoegen in field
    let fotoBom = document.getElementById("bom");
    fotoBom.classList.add("hidden");

    let foto = document.createElement("img");
    foto.setAttribute("id", "target");
    foto.style.marginLeft = randomLeft + "px";
    foto.style.marginTop = randomTop + "px";


    if(randomNr === 0){
        fotoBom.classList.remove("hidden");
        fotoBom.style.marginLeft = randomLeft + "px";
        fotoBom.style.marginTop = randomTop + "px";
        fotoBom.style.width = global.IMAGE_SIZE + "px";
    }
    else if(randomNr === 1) {
        foto.setAttribute("src", "images/1.png");
    }
    else if(randomNr === 2) {
        foto.setAttribute("src", "images/2.png");
    }
    else if(randomNr === 3) {
        foto.setAttribute("src", "images/3.png");
    }
    else if(randomNr === 4) {
        foto.setAttribute("src", "images/4.png");
    }

    field.appendChild(foto);

    //bij het klikken van de foto wordt de score verhoogd
    foto.addEventListener("click", verhogenScore);
    foto.addEventListener("click", verschijnenFoto);
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(verschijnenFoto, global.MOVE_DELAY);

    //Score bijhouden
    let paragraafScore = document.getElementById("score");
    paragraafScore.textContent = "Aantal hits: " + global.score;

}

const verhogenScore = () => {
    let score = global.score;
    global.score++;
    let paragraafScore = document.getElementById("score");
    paragraafScore.textContent = "Aantal hits: " + global.score;
}

window.addEventListener("load", setup);
