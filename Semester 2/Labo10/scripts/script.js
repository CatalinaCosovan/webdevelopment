let arrayCommandos = ['youtube', 'google', 'instagram', 'twitter', 'pinterest'];

const setup = () => {
    let buttonGo = document.getElementById("goZoekopdr");
    buttonGo.addEventListener("click", uitvoeren);

    terugplaatsenSavedCards();
}

const terugplaatsenSavedCards = () => {
    let arrayLocalSave = JSON.parse(localStorage.getItem("arraySavedCards"));

    if(arrayLocalSave !== null) {
        for (let i = 0; i < arrayLocalSave.length; i++) {
            let opslaanCard = document.getElementById("opslaanCards");
            let nieuweCardDiv = document.createElement("div");
            nieuweCardDiv.setAttribute("class", `card ${arrayLocalSave[i]['title'].toLowerCase()}`);
            let nieuwCardBody = document.createElement("div");
            nieuwCardBody.setAttribute("class", "card-body");
            let h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title");
            h5.textContent = arrayLocalSave[i]['title'];
            let h6 = document.createElement("h6");
            h6.setAttribute("class", "card-subtitle mb-2");
            h6.textContent = arrayLocalSave[i]['text'];
            let a = document.createElement("a");
            a.setAttribute("href", arrayLocalSave[i]['url']);
            a.setAttribute("class", "btn btn-primary");
            a.setAttribute("target", "_blank");
            a.textContent = "Go!";
            nieuwCardBody.appendChild(h5);
            nieuwCardBody.appendChild(h6);
            nieuwCardBody.appendChild(a);
            nieuweCardDiv.appendChild(nieuwCardBody);

            opslaanCard.appendChild(nieuweCardDiv);
        }
    }

}

//Bij het klikken op de button GO! wordt het volgende uitgevoerd
const uitvoeren = () => {
    //bij het uitvoeren van de methode aanmakenURLs() wordt er gekeken naar de commando en een array met info teruggegeven als deze klopt
    let objectInfo = aanmakenURLs();

    let arraySavedCardsURL = document.querySelectorAll(".card-body > a");
    //variabele om te kijken als de url al eens werd gebruikt
    let isAlOpgezocht = false;

    for(let i = 0; i < arraySavedCardsURL.length; i++) {
        if(arraySavedCardsURL[i].getAttribute("href") === objectInfo.url) {
            isAlOpgezocht = true;
        }
    }

    //als de url bestaat wordt er code uitgevoerd, anders niet
    if(objectInfo.url !== undefined) {
        let object = {
            title: objectInfo.title,
            text: objectInfo.text,
            url: objectInfo.url
        };

        //als de zoekopdracht al eerder werd opgezocht wordt de pagina gewoon geopend
        if(isAlOpgezocht) {
            window.open(object['url'], '_blank');
        } else {
            let opslaanCard = document.getElementById("opslaanCards");
            let nieuweCardDiv = document.createElement("div");
            nieuweCardDiv.setAttribute("class", `card ${object['title'].toLowerCase()}`);
            let nieuwCardBody = document.createElement("div");
            nieuwCardBody.setAttribute("class", "card-body");
            let h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title");
            h5.textContent = object['title'];
            let h6 = document.createElement("h6");
            h6.setAttribute("class", "card-subtitle mb-2");
            h6.textContent = object['text'];
            let a = document.createElement("a");
            a.setAttribute("href", object['url']);
            a.setAttribute("class", "btn btn-primary");
            a.setAttribute("target", "_blank");
            a.textContent = "Go!";
            nieuwCardBody.appendChild(h5);
            nieuwCardBody.appendChild(h6);
            nieuwCardBody.appendChild(a);
            nieuweCardDiv.appendChild(nieuwCardBody);

            opslaanCard.appendChild(nieuweCardDiv);

            window.open(object['url'], '_blank');

        }
    }

}


//voor elke commando een URL aanmaken
const aanmakenURLs = () => {
    let inputText = document.getElementById("zoekopdr").value;
    let arrayOpdracht = inputText.split(" ");
    let inputTextWithoutPrefix = "";
    let object = {};


    let arraySavedCards = [];
    let arraySavedCardsDiv = document.getElementsByClassName("card-body");
    if(arraySavedCardsDiv !== null) {
        for(let i = 0; i < arraySavedCardsDiv.length; i++) {
            let objectDiv = {
                title: arraySavedCardsDiv[i].getElementsByTagName("h5")[0].textContent,
                text: arraySavedCardsDiv[i].getElementsByTagName("h6")[0].textContent,
                url: arraySavedCardsDiv[i].getElementsByTagName("a")[0].getAttribute("href")
            }
            arraySavedCards.push(objectDiv);
        }
    }
    localStorage.setItem("arraySavedCards", JSON.stringify(arraySavedCards));

    for(let i = 1; i < arrayOpdracht.length; i++) {
        inputTextWithoutPrefix += arrayOpdracht[i] + " ";
    }

    //foutmeldingen tonen als de commando verkeerd is en de code niet meer uitvoeren
    //als de methode een string terugstuurt
    if(controlerenCommando() !== undefined) {
        //url met zoekopdracht samenstellen
        if(controlerenCommando() === 'youtube') {
            let youtubeSearch = "";
            for(let i = 1; i < arrayOpdracht.length; i++) {
                if(i === arrayOpdracht.length-1){
                    youtubeSearch += arrayOpdracht[i];
                } else {
                    youtubeSearch += arrayOpdracht[i] + "+";
                }
            }
            object['title'] = "Youtube";
            object['text'] = inputTextWithoutPrefix;
            object['url'] = `https://www.youtube.com/results?search_query=${youtubeSearch}`;
        } else if(controlerenCommando() === 'google') {
            let googleSearch = "";
            for(let i = 1; i < arrayOpdracht.length; i++) {
                if(i === arrayOpdracht.length-1){
                    googleSearch += arrayOpdracht[i];
                } else {
                    googleSearch += arrayOpdracht[i] + "+";
                }
            }
            object['title'] = "Google";
            object['text'] = inputTextWithoutPrefix;
            object['url'] = `https://www.google.com/search?q=${googleSearch}`;
        } else if(controlerenCommando() === 'instagram') {
            let instagramSearch = "";
            for(let i = 1; i < arrayOpdracht.length; i++) {
                instagramSearch += arrayOpdracht[i];
            }
            object['title'] = "Instagram";
            object['text'] = inputTextWithoutPrefix;
            object['url'] = `https://www.instagram.com/explore/tags/${instagramSearch}/`;
        } else if(controlerenCommando() === 'twitter') {
            let twitterSearch = "";
            for(let i = 1; i < arrayOpdracht.length; i++) {
                if(i === arrayOpdracht.length-1){
                    twitterSearch += arrayOpdracht[i];
                } else {
                    twitterSearch += arrayOpdracht[i] + "+";
                }
            }
            object['title'] = "Twitter";
            object['text'] = inputTextWithoutPrefix;
            object['url'] = `https://www.twitter.com/search?q=${twitterSearch}`;
        } else if(controlerenCommando() === 'pinterest') {
            let pinterestSearch = "";
            for(let i = 1; i < arrayOpdracht.length; i++) {
                if(i === arrayOpdracht.length-1){
                    pinterestSearch += arrayOpdracht[i];
                } else {
                    pinterestSearch += arrayOpdracht[i] + "%20";
                }
            }
            object['title'] = "Pinterest";
            object['text'] = inputTextWithoutPrefix;
            object['url'] = `https://www.pinterest.com/search/pins/?q=${pinterestSearch}`;
        }
    }


    arraySavedCards.push(object);

    localStorage.removeItem("arraySavedCards");
    localStorage.setItem("arraySavedCards", JSON.stringify(arraySavedCards));

    return object;
}

const controlerenCommando = () => {
    let input = document.getElementById("zoekopdr");
    let inputText = input.value;
    let inputZonderPrefix = inputText.slice(1, inputText.length);
    let arrayOpdracht = inputZonderPrefix.split(" ");

    //kijken als de commando voorkomt in onze commando's
    let komtOvereenMetCommando = 0;
    for (let i = 0; i < arrayCommandos.length; i++) {
        if(arrayOpdracht[0] === arrayCommandos[i]) {
            komtOvereenMetCommando++;
        }
    }

    //kijken als de prefix niet ontbreekt
    if(inputText[0] !== "/") {
        window.alert("Invalid Command");
        return undefined;
    } else if(komtOvereenMetCommando < 1) {
        window.alert("Unknown command prefix");
        return undefined;
    } else if(arrayOpdracht.length < 2) {
        window.alert("Invalid command");
    } else {
        return arrayOpdracht[0];
    }
}

window.addEventListener("load", setup); 