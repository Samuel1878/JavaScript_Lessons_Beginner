const jsObject = { name:"lava", age:2 , lava:"istrue", isMale:true}
const jsArray = [
    {city:"myitgyina", age:"putao"},
    {quiet:"yespar", age:23}
];
const jSonObject = JSON.stringify(jsObject);
localStorage.setItem("jsonObject", jSonObject);
const jSonArray = JSON.stringify(jsArray);
localStorage.setItem("jsonArray", jSonArray);

objectFromLocal = localStorage.getItem("jsonObject");
const convertedToJs = JSON.parse(objectFromLocal);
console.log(convertedToJs);

const itemsFormLocal = convertedToJs.age;
console.log(itemsFormLocal);
const ArrayFromLocal = localStorage.getItem("jsonArray");
const JsArray = JSON.parse(ArrayFromLocal);
console.log(JsArray[1].age)






const alertBarTag = document.querySelector(".alertBar");
const alertFunc = () => {
    const alertTag = document.createElement("div");
    alertTag.classList.add("alertContainer");
    const alertText = document.createElement("div");
    alertText.classList.add("alertText");
    alertText.innerHTML = `Allow notification! agree our Terms and Service user and server policies between two parties`;
    const buttonTag = document.createElement("button");
    buttonTag.innerHTML = "Allow"
    buttonTag.classList.add("button", "btn", "btn-success");
    alertTag.append(alertText, buttonTag);
    alertBarTag.append(alertTag);
    alertTag.style.left = `-${alertTag.offsetWidth *2}px`;
    setTimeout(() =>{
        alertTag.style.left = `0px`;
    }, 100);

    buttonTag.addEventListener("click", () => {
        alertTag.style.left = `-${alertTag.offsetWidth *2}px`;
        localStorage.setItem("accepted", "1");
    })

}


window.addEventListener("load", () =>{
    const accepted = localStorage.getItem("accepted");
    if (accepted !== "1") {
    alertFunc();}
    
});

/* textArea */
const textAreaTag = document.querySelector(".textArea");
const submitBtnTag = document.querySelector(".submitBtn");
const resultTag = document.querySelector(".result");

submitBtnTag.addEventListener("click", () => {
    resultTag.innerHTML = "";
    const newDivContainer = document.createElement("div");
    newDivContainer.classList.add("resultDiv");
    newDivContainer.append(textAreaTag.value);
    resultTag.append(newDivContainer);
})



