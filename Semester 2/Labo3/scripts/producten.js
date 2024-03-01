const setup = () => {
    let buttonHerbereken = document.getElementById("herbereken");

    buttonHerbereken.addEventListener("click", herbereken);

}

const herbereken = () => {
    let elementenInput = document.getElementsByClassName("aantal");
    let aantal1 = parseInt(elementenInput[0].value);
    let aantal2 = parseInt(elementenInput[1].value);
    let aantal3 = parseInt(elementenInput[2].value);
    console.log(aantal1, aantal2, aantal3);

    let elementenPrijs = document.getElementsByClassName("prijs");
    let prijs1 = parseFloat(elementenPrijs[0].textContent);
    let prijs2 = parseFloat(elementenPrijs[1].textContent);
    let prijs3 = parseFloat(elementenPrijs[2].textContent);
    console.log(prijs1, prijs2, prijs3);

    let elementenBTW = document.getElementsByClassName("btw");
    let btw1 = parseInt(elementenBTW[0].textContent);
    let btw2 = parseInt(elementenBTW[1].textContent);
    let btw3 = parseInt(elementenBTW[2].textContent);
    console.log(btw1, btw2, btw3)

    let elementenSubtotaal = document.getElementsByClassName("subtotaal");
    let subtotaal1 = (aantal1 * prijs1) * (1 + btw1/100);
    let subtotaal2 = (aantal2 * prijs2) * (1 + btw2/100);
    let subtotaal3 = (aantal3 * prijs3) * (1 + btw3/100);
    console.log(subtotaal1, subtotaal2, subtotaal3);

    elementenSubtotaal[0].textContent = subtotaal1.toFixed(2) + " EUR";
    elementenSubtotaal[1].textContent = subtotaal2.toFixed(2) + " EUR";
    elementenSubtotaal[2].textContent = subtotaal3.toFixed(2) + " EUR";

    let elementTotaal = document.getElementById("totaal");
    let totaal = subtotaal1+subtotaal2+subtotaal3;
    elementTotaal.textContent = totaal.toFixed(2) + " EUR";
}

window.addEventListener("load", setup); 