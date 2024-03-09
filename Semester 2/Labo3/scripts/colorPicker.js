const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for(let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    update();
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

    blok.style.backgroundColor = `rgb(${valueRood}, ${valueGroen}, ${valueBlauw})`;
}

window.addEventListener("load", setup); 