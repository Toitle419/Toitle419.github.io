function changeBackgroundColour() {
    let colour = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
    document.getElementById("main").style.backgroundColor = colour
}