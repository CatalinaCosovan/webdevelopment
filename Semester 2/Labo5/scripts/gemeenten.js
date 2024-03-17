const setup = () => {

    let select = document.getElementById("gemeente");
    let stoppen = false;
    let gemeenten = [];

    while(!stoppen) {
        let input = window.prompt("Gemeente:");
        if(input !== "stop" && input !== "Stop"){
            gemeenten.push(input);
            gemeenten.sort();
        } else {
            stoppen = true;
        }
    }

    for(let i = 0; i < gemeenten.length; i++) {
        select.innerHTML += `<option value="${gemeenten[i]}"> ${gemeenten[i]} </option>` ;
    }


}

window.addEventListener("load", setup); 