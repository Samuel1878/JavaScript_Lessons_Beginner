const menuContainerTag = document.querySelector(".menuContainer");
const overlayMenuTag = document.querySelector(".overlayMenu");
const liTag = document.getElementsByTagName("li");

const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");

menuContainerTag.addEventListener("click", () => {
    if (menuContainerTag.classList.contains("isOpened")){
        line2Tag.classList.remove("hideLine2");
        line1Tag.classList.remove("line1Tag");
        line3Tag.classList.remove("line3Tag");
        menuContainerTag.classList.remove("isOpened");
        overlayMenuTag.classList.remove("showOverLayMenu");
        for (let i = 0; i <liTag.length; i++ ){
            liTag[i].classList.remove("liMove");
        }
    } else {
    line2Tag.classList.add("hideLine2");
    line1Tag.classList.add("line1Tag");
    line3Tag.classList.add("line3Tag");
    menuContainerTag.classList.add("isOpened");
    overlayMenuTag.classList.add("showOverLayMenu");
    for (let i = 0; i <liTag.length; i++ ){
        liTag[i].classList.add("liMove");
    }
    }
});