let btn = document.querySelector(".btn")
btn.addEventListener("mouseover", (event) => {
//get value of x position and y position
    let x = event.pageX - btn.offsetLeft;
    let y = event.pageY - btn.offsetTop;
//make change to css 
    btn.style.setProperty("--xPos", x + "px")
    btn.style.setProperty("--yPos", y + "px")
})