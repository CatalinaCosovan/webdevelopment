
let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;

let geselecteerd= [];
const setup = () => {
    let lijstDivs = document.querySelectorAll("#bord > div");

    let foto1 = document.createElement("img");
    foto1.setAttribute("src", "images/Ariel.png");
    foto1.setAttribute("alt", "ariel");
    lijstDivs[0].appendChild(foto1);

    let foto2 = document.createElement("img");
    foto2.setAttribute("src", "images/Aurora.png");
    foto2.setAttribute("alt", "aurora");
    lijstDivs[1].appendChild(foto2);

    let foto3 = document.createElement("img");
    foto3.setAttribute("src", "images/Belle.png");
    foto3.setAttribute("alt", "belle");
    lijstDivs[2].appendChild(foto3);

    let foto4 = document.createElement("img");
    foto4.setAttribute("src", "images/Cinderella.png");
    foto4.setAttribute("alt", "cinderella");
    lijstDivs[3].appendChild(foto4);

    let foto5 = document.createElement("img");
    foto5.setAttribute("src", "images/Sneeuwwittje.png");
    foto5.setAttribute("alt", "sneeuwwittje");
    lijstDivs[4].appendChild(foto5);

    let foto6 = document.createElement("img");
    foto6.setAttribute("src", "images/Tiana.png");
    foto6.setAttribute("alt", "tiana");
    lijstDivs[5].appendChild(foto6);

    let foto7 = document.createElement("img");
    foto7.setAttribute("src", "images/Ariel.png");
    foto7.setAttribute("alt", "ariel");
    lijstDivs[6].appendChild(foto7);

    let foto8 = document.createElement("img");
    foto8.setAttribute("src", "images/Aurora.png");
    foto8.setAttribute("alt", "aurora");
    lijstDivs[7].appendChild(foto8);

    let foto9 = document.createElement("img");
    foto9.setAttribute("src", "images/Belle.png");
    foto9.setAttribute("alt", "belle");
    lijstDivs[8].appendChild(foto9);

    let foto10 = document.createElement("img");
    foto10.setAttribute("src", "images/Cinderella.png");
    foto10.setAttribute("alt", "cinderella");
    lijstDivs[9].appendChild(foto10);

    let foto11 = document.createElement("img");
    foto11.setAttribute("src", "images/Sneeuwwittje.png");
    foto11.setAttribute("alt", "sneeuwwittje");
    lijstDivs[10].appendChild(foto11);

    let foto12 = document.createElement("img");
    foto12.setAttribute("src", "images/Tiana.png");
    foto12.setAttribute("alt", "tiana");
    lijstDivs[11].appendChild(foto12);

    let lijstFotos = [];

    for(let i= 0; i < lijstDivs.length; i++)
    {
        lijstFotos.push(lijstDivs[i].children.item(0));
    }

    for (let i = 0; i < lijstFotos.length; i++) {
        lijstFotos[i].setAttribute("class", "hidden");
        lijstFotos[i].addEventListener("click", rotateBack);
        lijstFotos[i].addEventListener("click", remove);
    }

    let back = document.createElement("img");
    back.setAttribute("src", "images/background.png");
    back.setAttribute("alt", "back");
    lijstDivs[0].appendChild(back);

    let back1 = document.createElement("img");
    back1.setAttribute("src", "images/background.png");
    back1.setAttribute("alt", "back");
    lijstDivs[1].appendChild(back1);

    let back2 = document.createElement("img");
    back2.setAttribute("src", "images/background.png");
    back2.setAttribute("alt", "back");
    lijstDivs[2].appendChild(back2);

    let back3 = document.createElement("img");
    back3.setAttribute("src", "images/background.png");
    back3.setAttribute("alt", "back");
    lijstDivs[3].appendChild(back3);

    let back4 = document.createElement("img");
    back4.setAttribute("src", "images/background.png");
    back4.setAttribute("alt", "back");
    lijstDivs[4].appendChild(back4);

    let back5 = document.createElement("img");
    back5.setAttribute("src", "images/background.png");
    back5.setAttribute("alt", "back");
    lijstDivs[5].appendChild(back5);

    let back6 = document.createElement("img");
    back6.setAttribute("src", "images/background.png");
    back6.setAttribute("alt", "back");
    lijstDivs[6].appendChild(back6);

    let back7 = document.createElement("img");
    back7.setAttribute("src", "images/background.png");
    back7.setAttribute("alt", "back");
    lijstDivs[7].appendChild(back7);

    let back8 = document.createElement("img");
    back8.setAttribute("src", "images/background.png");
    back8.setAttribute("alt", "back");
    lijstDivs[8].appendChild(back8);

    let back9 = document.createElement("img");
    back9.setAttribute("src", "images/background.png");
    back9.setAttribute("alt", "back");
    lijstDivs[9].appendChild(back9);

    let back10 = document.createElement("img");
    back10.setAttribute("src", "images/background.png");
    back10.setAttribute("alt", "back");
    lijstDivs[10].appendChild(back10);

    let back11 = document.createElement("img");
    back11.setAttribute("src", "images/background.png");
    back11.setAttribute("alt", "back");
    lijstDivs[11].appendChild(back11);

    let lijstBacks = [];

    for(let i= 0; i < lijstDivs.length; i++)
    {
        lijstBacks.push(lijstDivs[i].children.item(1));
    }

    for(let i = 0; i < lijstBacks.length; i++){
        lijstBacks[i].addEventListener("click", rotate);
    }

}


const rotate = (event) => {
    let target = event.currentTarget;

    if(geselecteerd.length < 2) {
        let divTarget = target.parentElement;
        let img = divTarget.children[0];

        target.classList.toggle("hidden");
        img.classList.toggle("hidden");

        geselecteerd.push(img);
    }
    console.log(geselecteerd);
}

const rotateBack = (event) => {
    let target = event.currentTarget;

    if(geselecteerd.length > 0) {
        let divTarget = target.parentElement;
        let img = divTarget.children[0];
        let back = divTarget.children[1];

        target.classList.toggle("hidden");
        back.classList.toggle("hidden");

        let indexGeklikt = geselecteerd.indexOf(img);

        if(indexGeklikt === 0) {
            geselecteerd.splice(0,1);
        } else {
            geselecteerd.splice(1);
        }
    }
}

const remove = () => {
    let lijstDiv = document.querySelectorAll("#bord > div");
    let lijstDivChildren = [];

    for (let i = 0; i < lijstDiv.length; i++) {
        lijstDivChildren.push(lijstDiv[i].children);
    }

    if(geselecteerd.length === 2 && [0].getAttribute("src") === geselecteerd[1].getAttribute("src")) {
        for(let i = 0; i < lijstDivChildren.length; i++) {
            if(lijstDivChildren[i].getAttribute("src") === geselecteerd[0].getAttribute("src")) {
                lijstDivChildren[i].remove();
            }
        }
    }
}

window.addEventListener("load", setup); 