const setup = () => {

    let lijstClassen = document.getElementsByClassName("belangrijk");
    for(let i = 0; i < lijstClassen.length; i++){
        lijstClassen[i].classList.add("opvallend");
    }


}

window.addEventListener("load", setup); 