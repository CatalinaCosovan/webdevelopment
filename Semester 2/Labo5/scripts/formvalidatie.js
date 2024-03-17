const setup = () => {
    let button = document.getElementById("validatie");
    button.addEventListener("click", valideer);

}

const valideer = () => {
    voornaam();
    familienaam();
    controleerDatum();
    controleerAtlKinderen();
}

const voornaam = () => {
    let txtVoornaam = document.getElementById("voornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        reportError(txtVoornaam, "max. 30 karakters");
    } else {
        clearError(txtVoornaam);
    }
}

const familienaam = () => {
    let txtFamilienaam = document.getElementById("familienaam");
    let familienaam = txtFamilienaam.value.trim();
    if (familienaam.length > 50) {
        reportError(txtFamilienaam, "max. 50 karakters");
    } else {
        clearError(txtFamilienaam);
    }
}

const controleerDatum = (datum) => {
    let txtGeboortedatum = document.getElementById("geboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();
    let arrayDatum =  geboortedatum.value.splice("-");

    if(arrayDatum[0].pattern !== "[0-9]{4}" && arrayDatum[1].pattern !== "[0-9]{2}" && arrayDatum[2].pattern !== "[0-9]{2}") {
        reportError(txtGeboortedatum, "formaat is niet jjjj-mm-dd");
    } else {
        clearError(txtGeboortedatum);
    }

}

const controleerAtlKinderen = () => {
    let txtAtlKinderen = document.getElementById("atlKinderen");
    let atlKinderen = txtAtlKinderen.value.trim();
    if (atlKinderen < 99) {
        reportError(txtAtlKinderen, "is te vruchtbaar");
    } else if(isGetal(atlKinderen)) {
        reportError(txtAtlKinderen, "is geen positief getal");
    } else {
        clearError(txtAtlKinderen);
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const reportError = (element, message) => {
    let elementId=element.getAttribute("id");
    let errElementId="err"+elementId.substring(3, elementId.length);
    let errElement=document.getElementById(errElementId);
    element.className="invalid";
    errElement.innerHTML = message;
}

const clearError = (element) => {
    let elementId=element.getAttribute("id");
    let errElementId="err"+elementId.substring(3, elementId.length);
    let errElement=document.getElementById(errElementId);
    element.className=" ";
    errElement.innerHTML = " ";
}

window.addEventListener("load", setup); 