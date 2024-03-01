const setup = () => {
    let blok = document.getElementById("blok");
    let sliders = document.getElementsByClassName("slider");

    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);

    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);

    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);

    blok.style.backgroundColor = "rgb("+sliders[0].value + "," + sliders[1].value + "," + sliders[2].value +")"
}
const update = () => {
    let blok = document.getElementById("blok");
    let sliders = document.getElementsByClassName("slider");

    let valueRood = sliders[0].value;
    let rood = document.getElementById("valueRood");
    rood.textContent = valueRood;

    let valueGroen = sliders[1].value;
    let groen = document.getElementById("valueGroen");
    groen.textContent = valueGroen;

    let valueBlauw = sliders[2].value;
    let blauw = document.getElementById("valueBlauw");
    blauw.textContent = valueBlauw;

    let valueRoodGetal = parseInt(valueRood);
    let valueGroenGetal = parseInt(valueGroen);
    let valueBlauwGetal = parseInt(valueBlauw);

    blok.style.backgroundColor = "rgb("+valueRoodGetal + "," + valueGroenGetal + "," + valueBlauwGetal+")";
}

window.addEventListener("load", setup); 