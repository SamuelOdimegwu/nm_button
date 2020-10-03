const innEffect = document.getElementById("inner-container");
const button = document.getElementById("container");

function click() {
    button.addEventListener("click", () => {
        innEffect.style.boxShadow = "inset 0px 5px 3px #7A7B75"
    })
}

click();