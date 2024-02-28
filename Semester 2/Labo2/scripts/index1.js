const setup = () => {
    let array = ['Catalina', 'Anna', 'Miriam', 'Anastasia', 'Lotte'];
    console.log(array.length);
    console.log(array[0]);
    console.log(array[2]);
    console.log(array[4]);

    const voegNaamToe = () => {
        array.push(prompt("geef een naam in."));
    }

    voegNaamToe();
    console.log(array.join());

    window.alert("Dit is een mededeling.");
    window.confirm("Weet u dit zeker?");

    console.log(window.confirm("Weet u dit zeker?"));
    console.log(prompt("geef een naam in."));
}

window.addEventListener("load", setup); 