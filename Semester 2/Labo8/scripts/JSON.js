let student={
    voornaam : "Jan",
    familienaam : "Janssens",
    geboorteDatum : new Date("1993-12-31"),
    adres : {
        straat : "Kerkstraat 13",
        postcode : "8500",
        gemeente : "Kortrijk" },
    isIngeschreven : true,
    namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"],
    aantalAutos : 2
}

const setup = () => {

    console.log(JSON.stringify(student));

    let student2 = JSON.parse('{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}');

    console.log(student2['adres']);
}
window.addEventListener("load", setup); 