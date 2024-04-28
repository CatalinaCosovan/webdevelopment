let arraySavedSwatches= [];

const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let buttonSave = document.getElementById("save");

    for(let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("change", opslaanSliders);
        sliders[i].addEventListener("input", update);
    }

    buttonSave.addEventListener("click", save);

    //bij opstarten van pagina komt de laatst opgeslagen settings van de sliders terug.
    let settingsSliders;
    let settingsSlidersJSON = localStorage.getItem("sliders");

    if (settingsSlidersJSON === null) {
        settingsSliders = {
            sliderRood: 255,
            sliderGroen: 255,
            sliderBlauw: 255
        };
    } else {
        settingsSliders = JSON.parse(settingsSlidersJSON);

        sliders[0].setAttribute("value", `${settingsSliders.sliderRood}`);
        sliders[1].setAttribute("value", `${settingsSliders.sliderGroen}`);
        sliders[2].setAttribute("value", `${settingsSliders.sliderBlauw}`);
    }


    //bij opstarten van pagina komen de opgeslagen swatches terug.
    let settingsSwatches;
    let settingsSwatchesJSON = localStorage.getItem("lijstSavedSwatches");

    if (settingsSwatchesJSON !== null) {
        settingsSwatches = JSON.parse(settingsSwatchesJSON);
        let divSaved = document.getElementById("saved");

        for(let i = 0; i < settingsSwatches.length; i++) {
            let nieuwdiv = document.createElement("div");
            nieuwdiv.setAttribute("class", "swatches");
            nieuwdiv.style.backgroundColor = `rgb(${settingsSwatches[i].rood}, ${settingsSwatches[i].groen}, ${settingsSwatches[i].blauw})`;
            nieuwdiv.setAttribute("data-valueRood", `${settingsSwatches[i].rood}`);
            nieuwdiv.setAttribute("data-valueGroen", `${settingsSwatches[i].groen}`);
            nieuwdiv.setAttribute("data-valueBlauw", `${settingsSwatches[i].blauw}`);
            nieuwdiv.setAttribute("data-ID", `${settingsSwatches[i].id}`);
            divSaved.appendChild(nieuwdiv);

            let button =  document.createElement("button");
            button.setAttribute("class", "buttonVerwijder");
            let x = document.createTextNode("X");
            button.appendChild(x);
            nieuwdiv.appendChild(button);
        }
    }


    update();
}

const getValueSlider = (index) => {
    let sliders = document.getElementsByClassName("slider");

    return sliders[index].value;
}

const opslaanSliders = () => {

    let object = {
        sliderRood: getValueSlider(0),
        sliderGroen: getValueSlider(1),
        sliderBlauw: getValueSlider(2),
    };

    localStorage.setItem("sliders", JSON.stringify(object));
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

    arraySavedSwatches.splice(0, arraySavedSwatches.length);

    for(let i = 0; i < lijstSwatches.length; i++) {
        let object= {
            id: parseInt(lijstSwatches[i].getAttribute("data-ID")),
            rood: parseInt(lijstSwatches[i].getAttribute("data-valueRood")),
            groen: parseInt(lijstSwatches[i].getAttribute("data-valueGroen")),
            blauw: parseInt(lijstSwatches[i].getAttribute("data-valueBlauw")),
        }

        arraySavedSwatches.push(object);
    }

    localStorage.removeItem("lijstSavedSwatches");
    localStorage.setItem("lijstSavedSwatches", JSON.stringify(arraySavedSwatches));

    let arrayJSON =  JSON.stringify(arraySavedSwatches);
    localStorage.setItem("lijstSavedSwatches", arrayJSON);
}

const bepaalID = () => {
    let lijstDivs = document.querySelectorAll("#saved > div");
    let id = 0;

    if(lijstDivs.length !== 0) {
        id = parseInt(lijstDivs[lijstDivs.length-1].getAttribute("data-ID")) + 1;
    }

    for(let i = 0; i < lijstDivs.length; i++) {
        if(lijstDivs.length !== 0 && parseInt(lijstDivs[i].getAttribute("data-ID")) === id) {
            id = lijstDivs[lijstDivs.length-1] +1;
        }
    }

    return id;
}

const save = () => {
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
    nieuwdiv.setAttribute("data-ID", `${bepaalID()}`);
    divSaved.appendChild(nieuwdiv);

    let button =  document.createElement("button");
    button.setAttribute("class", "buttonVerwijder");
    let x = document.createTextNode("X");
    button.appendChild(x);
    nieuwdiv.appendChild(button);

    let object= {
        id: parseInt(nieuwdiv.getAttribute("data-ID")),
        rood: parseInt(nieuwdiv.getAttribute("data-valueRood")),
        groen: parseInt(nieuwdiv.getAttribute("data-valueGroen")),
        blauw: parseInt(nieuwdiv.getAttribute("data-valueBlauw")),
    }

    arraySavedSwatches.push(object);


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

    update();
}

window.addEventListener("load", setup); 