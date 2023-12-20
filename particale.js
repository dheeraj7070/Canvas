export class Particale {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() *5 + 1;
        this.speedX = MAth.random() * 3 - 1.5;
        this.speedy = MAth.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedy; 
    }

    draw () {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.size,0, Math.PI *2);
        ctx.fill();
    }
}