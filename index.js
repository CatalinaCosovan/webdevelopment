const setup = () => {

}
const showHideSemester1 = () => {
    var id = document.getElementById("semester1");
    id.classList.toggle("hidden");
}

const showHideSemester2 = () => {
    var id = document.getElementById("semester2");
    id.classList.toggle("hidden");
}

window.addEventListener("load", setup); 