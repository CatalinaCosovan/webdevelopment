const setup = () => {
    let lijst = document.querySelector("ul");
    let lijstListitems = lijst.querySelectorAll("li");
    for(let i = 0; i < lijstListitems.length; i++) {
        lijstListitems[i].classList.add("listitem");
    }

    let nieuwFoto = document.createElement("img");
    nieuwFoto.setAttribute("src", "images/MIA.jpg");

    let fotoBlok = document.getElementById("foto");
    fotoBlok.appendChild(nieuwFoto);

}
window.addEventListener("load", setup); 