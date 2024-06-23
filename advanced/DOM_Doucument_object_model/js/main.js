// DOM - Document Object Model

// #region selecting elements and changing their style
const view1 = document.getElementById("view1"); // getElementById is used to select the element with the specified ID

console.log(view1);

// this is not great because it can be unpredictable
const view2 = document.querySelector("#view2"); // querySelector is used to select the first element that matches the specified selector(s)
console.log(view2);

// changing the style of an element
view1.style.backgroundColor = "red";
view1.style.display = "flex";
view2.style.display = "none";

// selecting multiple elements

const views = document.getElementsByClassName("view"); // getElementsByClassName is used to select all elements with the specified class name
console.log(views);

const sameViews = document.querySelectorAll(".view"); // querySelectorAll is used to select all elements that match the specified selector(s)
console.log(sameViews);

const divs = view1.querySelectorAll("div"); // getElementsByTagName is used to select all elements with the specified tag name
console.log(divs);

const sameDivs = view1.getElementsByTagName("div"); // getElementsByTagName is used to select all elements with the specified tag name
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-child(even)"); // querySelectorAll is used to select all elements that match the specified selector(s)
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "blue";
}

//#endregion

// #region changing the innerHTML of an element
const nav1Text = view1.querySelector("div");
nav1Text.innerHTML = "<h4>Changed Inner HTML</h4>";
nav1Text.style.textAlign = "center";

//#endregion

//#region selecting the parent element and children of an element

console.log(evenDivs[1].parentElement); // parentElement is used to select the parent element of the specified element

console.log(evenDivs[1].parentElement.children); // children is used to select all the children of the specified element

console.log(evenDivs[1].parentElement.children[1]); // children is used to select the specified child of the specified element

console.log(evenDivs[1].parentElement.hasChildNodes); // hasChildNodes is used to check if the specified element has any children

//#endregion

//#region Changing views

// view1.style.display = "none";
// view2.style.display = "flex";
// view2.style.flexDirection = "row";
// view2.style.flexWrap = "wrap";
// view2.style.margin = "10px";

//#endregion
