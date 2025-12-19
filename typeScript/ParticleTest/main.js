"use strict";
class Particle {
    pos;
    vel;
    radius;
    constructor(pos, vel, radius) {
        this.pos = pos ?? { x: 0, y: 0 };
        this.vel = vel ?? { x: 0, y: 0 };
        this.radius = radius ?? 20;
    }
    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.vel.y += 0.1;
        const friction = 0.02;
        if (this.pos.y > canvas.height - this.radius) {
            this.vel.y *= -1 + friction;
            this.pos.y = canvas.height - this.radius;
        }
        if (this.pos.x < this.radius) {
            this.vel.x *= -1 + friction;
            this.pos.x = this.radius;
        }
        if (this.pos.x > canvas.width - this.radius) {
            this.vel.x *= -1 + friction;
            this.pos.x = canvas.width - this.radius;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 5;
        ctx.stroke();
    }
}
const particles = [];
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", handleResize);
handleResize();
let prevFrame = Date.now();
let deltaTime = 0;
function frame() {
    deltaTime = (Date.now() - prevFrame) / 1000;
    prevFrame = Date.now();
    window.requestAnimationFrame(frame);
    ctx.fillStyle = "darkslategray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let particle of particles) {
        particle.update();
        particle.draw();
    }
}
window.requestAnimationFrame(frame);
for (let i = 0; i < 10; i++) {
    particles.push(new Particle({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
    }, {
        x: (Math.random() - 0.5) * 3,
        y: 0
    }));
}
