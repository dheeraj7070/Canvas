

const canvas = document.getElementById('canvas');
let particalesArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let huge =0;
let mouse = {
    x: 0,
    y: 0
}


window.addEventListener("resize", resize);

window.addEventListener('mousemove', (event) => {
 mouse.x = event.x;
 mouse.y = event.y;

 for(let i = 0 ;i < 10; i++) {
    particalesArray.push(new Particale);
}
})


window.addEventListener("click", () => {
    for(let i = 0 ;i < 10; i++) {
        particalesArray.push(new Particale);
    }
})

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
}
class Particale {
    constructor() {
        this.x =  mouse.x;
        this.y =  mouse.y;
        this.size = Math.random() *5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + huge + ', 100%, 50%)';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedy;
        if(this.size > 0.2) this.size -= 0.1;
    }

    draw () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size,0, Math.PI *2);
        ctx.fill();
    }
}




function handler() {
    for(let i = 0; i< particalesArray.length; i++) {
        particalesArray[i].update();
        particalesArray[i].draw();

        for(let j = i; j< particalesArray.length ; j++) {
            let dx = particalesArray[i].x - particalesArray[j].x;
            let dy = particalesArray[i].y - particalesArray[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < 100) {
                ctx.strokeStyle = particalesArray[i].color;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particalesArray[i].x, particalesArray[i].y);
                ctx.lineTo(particalesArray[j].x, particalesArray[j].y);
                ctx.stroke();
            }
        }
 

        if(particalesArray[i].size < 0.3){
            particalesArray.splice(i, 1);
            i--;
        } 
    }
}

function animate() {
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0,0.02)"
    ctx.fillRect(0,0,canvas.width, canvas.height);
    handler();
    huge += 5;
    requestAnimationFrame(animate);
}

animate()