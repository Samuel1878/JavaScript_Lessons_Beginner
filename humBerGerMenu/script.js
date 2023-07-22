const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");
const overlayTag = document.querySelector(".overlayMenu")
const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");
const LiTag = document.getElementsByTagName("li");

hamburgerMenuContainerTag.addEventListener("click", () => {
    if (hamburgerMenuContainerTag.classList.contains("isOpened")) {
        hamburgerLine2Tag.classList.remove("hideLine2");
        hamburgerLine1Tag.classList.remove("rotatePlus");
        hamburgerLine3Tag.classList.remove("rotateMinus");
        hamburgerMenuContainerTag.classList.remove("isOpened")
        overlayTag.classList.remove("showOverLay")
        for(let i = 0; i < LiTag.length; i++) {
            LiTag[i].classList.remove("moveLiTag")
        }
    }else{
        hamburgerLine2Tag.classList.add("hideLine2");
        hamburgerLine1Tag.classList.add("rotatePlus");
        hamburgerLine3Tag.classList.add("rotateMinus");
        hamburgerMenuContainerTag.classList.add("isOpened");
        overlayTag.classList.add("showOverLay");
        for(let i = 0; i < LiTag.length; i++){
            LiTag[i].classList.add("moveLiTag")
        };
    }
});