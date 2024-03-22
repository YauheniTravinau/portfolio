const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let particles = [];

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.opacity = 1;
    this.velocityX = Math.random() * 2 - 1;
    this.velocityY = Math.random() * 2 - 1;
}

Particle.prototype.draw = function() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
};

Particle.prototype.update = function() {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.opacity -= 0.01;
};

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].opacity <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('mousemove', function(event) {
    const particleCount = 3; // Количество частиц, которые появляются при движении мыши
    const radius = Math.random() * 5 + 2; // Размер частицы
    const color = `hsla(${Math.random() * 360}, 50%, 50%, 0.8)`; // Случайный цвет
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(event.clientX, event.clientY, radius, color));
    }
});

window.addEventListener('resize', function() {
    init();
});
