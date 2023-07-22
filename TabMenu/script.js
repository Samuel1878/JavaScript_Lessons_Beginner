const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const bodyTag = document.getElementsByTagName("body")[0];
let Opened = false;
const resultDivTag = document.querySelector(".resultContainer");

const Tabs = ["Home", "Features & Marketplace", "Services", "About us", "Login"];

const imageforPage = ["../Pic/300515869_481332597334926_8544803353098430280_n.jpg", "../Pic/banner-main-300x168.png", "../Pic/pexels-cottonbro-studio-4937449.jpg", "../Pic/pexels-mart-production-9558906.jpg", "../Pic/pexels-ron-lach-8306379.jpg"];

const showFunc = (index) => {
   resultDivTag.classList.remove("hide")
   const imgTag = document.getElementsByTagName("img")[0];
    imgTag.src = imageforPage[index];
}

const handleTabChange = (event) => {
    const clickedId = event.target.id;
    const clickedLiTag = document.getElementById(clickedId);
    const clickedLiWidth = clickedLiTag.offsetWidth;
    const clickedLiOffsetWidth = clickedLiTag.offsetLeft;

    sliderTag.style.width = clickedLiWidth + "px";
    sliderTag.style.transform = `translateX(${clickedLiOffsetWidth}px)`;
    showFunc(clickedId);  
};
for(let i = 0; i < Tabs.length; i++){
    const liTag = document.createElement("li");
    liTag.append(Tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click", handleTabChange);
    ulTag.append(liTag);
    if (i === 0) {
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
};
