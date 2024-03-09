const setup = () => {
    let tekst = document.getElementById("tekst").textContent.toLowerCase();

    //code met indexOf
    let aantalAn = document.getElementById("aantal");
    let aantal = 0;

    for(let i = 0; i < tekst.length; i++) {
        let indexOfAn = tekst.indexOf("an", i);
        if(indexOfAn !== -1) {
            aantal++;
            if(i <= indexOfAn) {
                i = indexOfAn;
            }
        }
    }

    console.log(aantal);
    aantalAn.textContent = aantal.toString();

    //code met lastIndexOf
    let lastAantal = 0;
    for(let i = tekst.length - 1; i > 0; i--){
        let lastIndex = tekst.lastIndexOf("an", i);
        if(lastIndex !== -1) {
            lastAantal++;
            if(i >= lastIndex) {
                i = lastIndex;
            }
        }
    }

    console.log(lastAantal);

}



window.addEventListener("load", setup); 