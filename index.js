function changeBackgroundColour() {
    let colour = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
    document.getElementById("main").style.backgroundColor = colour
}
function updateClock() {
    const now = new Date()
    let 
    h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds()
    if (m < 10) {m = "0" + m}
    if (s < 10) {s = "0" + s}
    let date = h + ":" + m + ":" + s
    document.getElementById("clock").innerText = date
}
updateClock()
setInterval(updateClock, 1000)