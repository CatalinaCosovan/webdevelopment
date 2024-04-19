const setup = () => {

    let vandaag = new Date();
    let verjaardag = new Date(2005,7,18);
    let volgendeVerjaardag = new Date(2024, 7,18);

    let millisecondenLeeftijd = vandaag - verjaardag;
    let millisecondenVolgend = volgendeVerjaardag - vandaag;
    let atlDagenLeeftijd = Math.floor(millisecondenLeeftijd/86400000);
    let atlDagenVolgend = Math.floor(millisecondenVolgend/86400000);

    console.log("Ik heb " + atlDagenLeeftijd + " dagen geleefd.");
    console.log("Nog " + atlDagenVolgend + " tot mijn volgende verjaardag.");
}

window.addEventListener("load", setup); 