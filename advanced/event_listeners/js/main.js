// JavaScript Event Listeners

// Ensure that the DOM is fully loaded before running the script
const view = document.querySelector("#view2");
console.log(view);

const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// #region click event

const clicked2ndView = () => {
    div.style.backgroundColor = "red";
    alert("You clicked the 2nd view");
    // once the event is triggered, remove the event listener
    div.removeEventListener("click", clicked2ndView, false);
};

// this is the event listener that listens for the click event
div.addEventListener("click", clicked2ndView, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    // stop propagation prevents the event from bubbling up to the parent element. In this case clicking the text does not click the div.
    event.stopPropagation();
    event.target.textContent = "You clicked me!";
});

// #endregion

// #region readystatechange event

// this function will be called when the document is fully loaded
const initApp = () => {
    console.log("Do stuff now that the DOM is fully loaded");
};

document.addEventListener("readystatechange", (event) => {
    console.log("Ready state changed to: " + document.readyState);
    initApp();
});

//#endregion

// #region form events

// view.style.display = "none";
// const view3 = document.querySelector("#view3");
// view3.style.display = "flex";

const myForm = view3.querySelector("#myForm");
myForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents the forum from restarting the page
    console.log("Form submitted");
});

//#endregion
