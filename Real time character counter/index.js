let text = document.getElementById("text");
let totalCounter = document.getElementById("total-counter");
let remaining = document.getElementById("remain-counter");
//add event listener for typing alphabetic characters
text.addEventListener("keyup", () => {
    updateCounter()
})
//calling finction to initialize the value of totalCounter and remaining
updateCounter()


function updateCounter() {
    //count no of characters typed
    totalCounter.innerText = text.value.length;

    // text.getAttribute("maxLength")
    //remaining= total-no of characters typed
    remaining.innerText = text.getAttribute("maxLength") - text.value.length;
}