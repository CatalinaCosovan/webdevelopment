const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);

    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);

}
const wijzigTekst = () =>{
    let pElement= document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let txtOutput = document.getElementById("txtOutputTekstveld");
    txtOutput.innerHTML=tekst;
}

const substring = () =>{
    let txtInput = document.getElementById("txtInputSubstring");
    let tekst = txtInput.value;
    let eersteParameter = document.getElementById("eersteParameter").value;
    let tweedeParameter = document.getElementById("tweedeParameter").value;
    let substringTekst = tekst.substring(eersteParameter, tweedeParameter);

    let txtOutput = document.getElementById("txtOutputSubstring");
    txtOutput.innerHTML=substringTekst;
}

window.addEventListener("load", setup);