const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", maakMetSpaties);

}

const maakMetSpaties = (inputText) => {
    inputText = document.getElementById("inputTxt");
    let display = "";

    for(let i = 0; i < inputText.value.length; i++) {
        if(inputText.value.charAt(i) !== " ") {
            display += inputText.value.charAt(i) + " ";
        }
    }

    console.log(display);
}



window.addEventListener("load", setup); 