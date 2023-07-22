const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingList")[0];
let productId = 1;
const handleChange = (para) => {
    let inputValue = para.target.value;
    const parenDiv = document.createElement("div");
    const productContainerOut = document.createElement("div");
    productContainerOut.classList.add("productContainer");
    parenDiv.addEventListener("click", () => {
        const classExit = parenDiv.classList.contains("actedCSS");
            if (classExit) {
                parenDiv.classList.remove("actedCSS");
            }else{
                parenDiv.classList.add("actedCSS");
            }

    });
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");
    trashIcon.addEventListener("click", () =>{
        productContainerOut.remove();
    })
    let spanElement = document.createElement("span");
    spanElement.id = productId;
    spanElement.classList.add("listItem");
    parenDiv.classList.add("listContainer");
    const product = productId.toString() + ". " + inputValue;
    spanElement.append(product);
    parenDiv.append(spanElement);
    productContainerOut.append(parenDiv, trashIcon);
    shoppingListTag.append(productContainerOut);
    inputTag.value = "";
    productId += 1;

};
inputTag.addEventListener("change", handleChange);
