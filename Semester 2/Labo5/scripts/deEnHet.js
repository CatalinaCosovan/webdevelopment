const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    let array = zin.split(" ");
    for(let i = 0; i < array.length; i++){
        if(array[i].toLowerCase() === "de") {
            if(i === 0) {
                array[i] = "Het";
            } else {
                array[i] = "het";
            }
        }
    }

    let zinOmgewisseld = "";
    for(let i = 0; i < array.length; i++){
        zinOmgewisseld += array[i] + " ";
    }
    console.log(zinOmgewisseld);

}
window.addEventListener("load", setup); 