
//Throw Error
const registerUser = (user) => {
  if (!user.name || !user.email){
    throw new Error("User Must Have Both Name and Email");
    
  }
  return "Registered Successfully"
}
const user = {name:"Samuel Chost the Programmer"};
try{
const status = registerUser(user);
console.log(status);
} catch(error){
  console.log("Inside catch error: ", error)
}


//Fetch API 
let products; 
const source = "https://fakestoreapi.com/products";
fetch(source).then((data)=>{
  const productsData = data.json();
  return productsData;
}).then((data)=>{
  products = data
  console.log(products);
  BuildUI();
})


const BuildUI = () => {
  let filteredProducts = [];
  const inputTag = document.getElementsByClassName("inputTag")[0];
  const resultContainerTag = document.getElementsByClassName("resultContainer")[0];
  inputTag.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "Enter"){
          naviFunction(event.key);
          return;
        };
      resultContainerTag.innerHTML = "";
      const searchText = event.target.value.toLowerCase();
      if (searchText.length === 0) {
          return
  };
      filteredProducts = products.filter((product) => {
          return product.title.toLowerCase().includes(searchText);
      });
      const hasProducts = filteredProducts.length > 0 ;
  
      if (hasProducts) {
          for (let i = 0; i < filteredProducts.length; i++){
              const productItemContainer = document.createElement("div");
              productItemContainer.classList.add("productItemContainer");
              const productId = filteredProducts[i].id;
              productItemContainer.id = productId;
  
              const productName = document.createElement("div");
              productName.append(filteredProducts[i].title);
  
              const productImage = document.createElement("img");
              productImage.classList.add("productImage");
              productImage.src = filteredProducts[i].image;
  
              productItemContainer.append(productName, productImage);
              resultContainerTag.append(productItemContainer);
          }
      }
  });
  //navi 
  let selectIndex = -1;
  const naviFunction = (key) => {
  if (key === "ArrowDown"){
    if (selectIndex === filteredProducts.length -1) {
      selectIndex = -1;
      deselectFnc();
      return;
    }
    selectIndex += 1 ;
    const selectedTag = selectFnc(selectIndex);
    if (selectIndex > 0) {
        deselectFnc();
  
    }
    selectedTag.classList.add("selected");
  }else if (key === "ArrowUp"){
    if (selectIndex === -1) {
      return
    }
    if (selectIndex === 0) {
      deselectFnc();
      selectIndex = -1;
      return;
    }
    selectIndex -= 1;
    deselectFnc();
    const selectedTag = selectFnc(selectIndex);
    selectedTag.classList.add("selected")
  
  }else {
    let enterDiv = selectFnc(selectIndex)
    enteredFnc(enterPara)
  
  }
  };
  
  const enteredFnc = () => {
  
  }
  //DRY
  const selectFnc = () => {
    let selectedId = filteredProducts[selectIndex].id.toString();
    let selectedTag = document.getElementById(selectedId);
    selectedTag.style.backgroundColor = "blue";
    selectedTag.style.color = "white";
    selectedTag.classList.add("selected");
    return selectedTag;
  };
  const deselectFnc = () => {
    let unselectedTag = document.getElementsByClassName("selected")[0];
    unselectedTag.style.backgroundColor = "white";
    unselectedTag.style.color = "black";
    unselectedTag.classList.remove("selected");
  };
  
}
