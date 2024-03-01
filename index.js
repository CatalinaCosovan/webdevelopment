const setup = () => {
    var semester1 = document.getElementById("Semester1Knop");
    semester1.addEventListener("click", showHideSemester1)

    var semester2 = document.getElementById("Semester2Knop");
    semester2.addEventListener("click", showHideSemester2);
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