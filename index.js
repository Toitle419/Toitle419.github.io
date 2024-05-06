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

function lerp(a, b, t) {
    return a + (b - a) * t
}
function lerpColour(ca, cb, t) {
    let r = lerp(ca.r, cb.r, t)
    let g = lerp(ca.g, cb.g, t)
    let b = lerp(ca.b, cb.b, t)
    return new colour(r, g, b);
}
function randomColour() {
    return new colour(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
}
function randomBackgroundColour() {
    c1 = randomColour()
}

class colour {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    toStr() {
        return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    }
}

let c0 = randomColour(),
c1 = randomColour(),
t = 0,
fps = 50,
transitionSpeed = 0.25 / fps

function transition() {
    console.log(t)
    if (t >= 1) {
        c0 = c1
        c1 = randomColour()
        t = 0
    }
    document.getElementById("main").style.backgroundColor = lerpColour(c0, c1, t).toStr()
    t += transitionSpeed
}

updateClock()
setInterval(updateClock, 1000)
setInterval(transition, 1000 / fps);