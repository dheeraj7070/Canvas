import Particale from "./particale";

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
let radius = 1;

let rect = [];

let mouse = {
    x: 0,
    y: 0
}




window.addEventListener("resize", resize);

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    for(let i = 0; i<rect.length; i++) {
        d(rect[i]);
    }

    drawCircle(radius);
    if(radius < 500)
    radius += 5;
else {
    radius = 0
}
})

window.addEventListener("click", () => {
    drawRect();
})


function drawRect() {
    ctx.fillStyle = "black";
    rect.push({x: mouse.x, y: mouse.y});
   
    ctx.fillRect(mouse.x, mouse.y, 100, 200);
}

function d(m) {
    ctx.fillStyle = "black";
    ctx.fillRect(m.x, m.y, 100, 200);
}

function drawRectStroke() {
    ctx.strokeStyle = "white";
    ctx.strokeRect(mouse.x, mouse.y, 100, 200);

}

function drawCircle (radius) {
    ctx.strokeStyle ="blue";
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.lineWidth = 199;
    ctx.arc(mouse.x, mouse.y,radius,0,Math.PI / 8, false);
    
    ctx.fill();
    // ctx.stroke();

}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawRectStroke();
}

console.log(ctx) 