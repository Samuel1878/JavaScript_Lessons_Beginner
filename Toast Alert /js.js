const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const alertFunc = () => {
    parentTag.innerHTML="";
    const alertTag = document.createElement("div");
    alertTag.append("You have successfully updated!");
    alertTag.classList.add("alert")
    parentTag.append(alertTag);
    alertTag.style.bottom = `-${alertTag.offsetHeight * 2}px`;
    setTimeout(() => {
        alertTag.style.bottom =  `0px`;
    },500);
    setTimeout(() => {
        alertTag.style.bottom =  `-${alertTag.offsetHeight * 2}px`;
    },3000)
    
};
buttonTag.addEventListener("click", () => {
    alertFunc();

});