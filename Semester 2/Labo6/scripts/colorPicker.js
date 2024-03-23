
const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let buttonSave = document.getElementById("save");

    for(let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    buttonSave.addEventListener("click", save);
    update();
}

const getValueSlider = (index) => {
    let sliders = document.getElementsByClassName("slider");

    return sliders[index].value;
}

const update = () => {
    let blok = document.getElementById("blok");

    let valueRood = getValueSlider(0);
    let rood = document.getElementById("valueRood");
    rood.textContent = valueRood;

    let valueGroen = getValueSlider(1);
    let groen = document.getElementById("valueGroen");
    groen.textContent = valueGroen;

    let valueBlauw = getValueSlider(2);
    let blauw = document.getElementById("valueBlauw");
    blauw.textContent = valueBlauw;

    blok.style.backgroundColor = `rgb(${valueRood}, ${valueGroen}, ${valueBlauw})`;


    let lijstSwatches = document.getElementsByClassName("swatches");

    if(lijstSwatches.length !== 0) {
        for(let i = 0; i < lijstSwatches.length; i++){
            let button = lijstSwatches[i].querySelector("button");
            button.addEventListener("click", verwijderSaved);

            let div = lijstSwatches[i];
            div.addEventListener("click", restoreSaved);
        }

    }

}

const save = () => {
    let lijstDivs = document.querySelectorAll("#saved > div");
    let id = 0;

    for(let i = 0; i < lijstDivs.length; i++) {
        id = parseInt(lijstDivs[lijstDivs.length-1].getAttribute("data-ID")) + 1;
    }

    let nieuwdiv = document.createElement("div");
    let divSaved = document.getElementById("saved");


    let valueRood = getValueSlider(0);
    let valueGroen = getValueSlider(1);
    let valueBlauw = getValueSlider(2);

    nieuwdiv.setAttribute("class", "swatches");
    nieuwdiv.style.backgroundColor = `rgb(${valueRood}, ${valueGroen}, ${valueBlauw})`;
    nieuwdiv.setAttribute("data-valueRood", `${valueRood}`);
    nieuwdiv.setAttribute("data-valueGroen", `${valueGroen}`);
    nieuwdiv.setAttribute("data-valueBlauw", `${valueBlauw}`);
    nieuwdiv.setAttribute("data-ID", `${id}`);
    divSaved.appendChild(nieuwdiv);

    let button =  document.createElement("button");
    button.setAttribute("class", "buttonVerwijder");
    let x = document.createTextNode("X");
    button.appendChild(x);
    nieuwdiv.appendChild(button);

    update();
}

const restoreSaved = (event) => {
    let target = event.currentTarget;
    let sliders = document.getElementsByClassName("slider");

    let targetRood = target.getAttribute("data-valueRood");
    let targetGroen = target.getAttribute("data-valueGroen");
    let targetBlauw = target.getAttribute("data-valueBlauw");

    sliders[0].value = targetRood;
    sliders[1].value = targetGroen;
    sliders[2].value = targetBlauw;

    update();
}

const verwijderSaved = (event) => {
    let target = event.currentTarget;
    let geselecteerdDiv = target.parentElement;
    let lijstSavedSwatches = document.querySelectorAll("#saved > div");

    for(let i = 0; i < lijstSavedSwatches.length; i++){
        if(geselecteerdDiv.getAttribute("data-ID") === lijstSavedSwatches[i].getAttribute("data-ID")) {
            lijstSavedSwatches[i].remove();
        }
    }

    event.stopPropagation();
    event.preventDefault();
}

window.addEventListener("load", setup); 