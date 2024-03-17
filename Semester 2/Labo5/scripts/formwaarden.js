const setup = () => {
    let button = document.getElementById("submit");
    button.addEventListener("click", submit);
}

const submit = () => {
    let isRoker = document.getElementById("isRoker");
    let moedertaalNL = document.getElementById("nederlands");
    let moedertaalFR = document.getElementById("frans");
    let moedertaalEN = document.getElementById("engels");
    let favoBuurland = document.getElementById("landen");
    let bestelling = document.getElementById("bestelling");

    if(isRoker.checked){
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    if(moedertaalNL.checked) {
        console.log("moedertaal is nl");
    } else if(moedertaalFR.checked) {
        console.log("moedertaal is fr");
    } else if(moedertaalEN.checked){
        console.log("moedertaal is en");
    } else {
        console.log("geen moedertaal geselecteerd")
    }

    console.log(favoBuurland.value);

    let displayBestelling = "bestelling bestaat uit ";
    for(let i = 0; i < bestelling.length; i++) {
        if(bestelling[i].selected) {
            displayBestelling += bestelling[i].textContent + " ";
        }
    }
    console.log(displayBestelling);
}

window.addEventListener("load", setup); 