let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();


    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    let lstPersonen = document.getElementById("lstPersonen");
    let lstOptions = lstPersonen.options;
    let selectedIndex = lstPersonen.selectedIndex;

    let id = personen.length;

    if(selectedIndex < 0) {
        let nieuwPersoon = {
            id: id,
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboorteDatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value
        }

        let option = document.createElement("option");
        option.setAttribute("value",nieuwPersoon['voornaam'] + " " + nieuwPersoon['familienaam']);
        option.setAttribute("data-id", id.toString());
        option.textContent = nieuwPersoon['voornaam'] + " " + nieuwPersoon['familienaam'];
        lstPersonen.innerHTML += option;
        lstOptions.add(option);

        personen.push(nieuwPersoon);

    } else {
        for(let i = 0; i < personen.length; i++) {
            if(personen[i].id === parseInt(lstOptions[selectedIndex].getAttribute("data-id"))){
                personen[i]['voornaam'] = document.getElementById("txtVoornaam").value;
                personen[i]['familienaam'] = document.getElementById("txtFamilienaam").value;
                personen[i]['geboorteDatum'] = document.getElementById("txtGeboorteDatum").value;
                personen[i]['email'] = document.getElementById("txtEmail").value;
                personen[i]['aantalKinderen'] = document.getElementById("txtAantalKinderen").value;
                lstOptions[i].setAttribute("value", personen[i]['voornaam'] + " " + personen[i]['familienaam']);
                lstOptions[i].textContent =  personen[i]['voornaam'] + " " + personen[i]['familienaam'];
            }
        }
    }
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selected = false;


    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    let lstoptions = document.getElementById("lstPersonen").selectedOptions;

    for(let i = 0; i < lstoptions.length; i++){
        lstoptions[i].selected = false;
    }
};

//event listener (select click)
const gegevensVerschijnen = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let geselecteerdeIndex = lstPersonen.selectedIndex;

    for(let i = 0; i < personen.length; i++){
        if(parseInt(lstPersonen.options[geselecteerdeIndex].getAttribute("data-id")) === personen[i]['id']) {
            document.getElementById("txtVoornaam").value = personen[i].voornaam;
            document.getElementById("txtFamilienaam").value = personen[i].familienaam;
            document.getElementById("txtGeboorteDatum").value = personen[i].geboorteDatum;
            document.getElementById("txtEmail").value = personen[i].email;
            document.getElementById("txtAantalKinderen").value = personen[i].aantalKinderen;
        }
    }

}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("click", gegevensVerschijnen);
};

window.addEventListener("load", setup);