const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawCircle(x, y, radius, hue) {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();
}

function recursiveCircles(x, y, radius, hue) {
  drawCircle(x, y, radius, hue);

  if (radius > 10) {
    const newRadius = radius * 0.6;
    recursiveCircles(x + radius / 2, y, newRadius, hue + 20);
    recursiveCircles(x - radius / 2, y, newRadius, hue + 20);
    recursiveCircles(x, y + radius / 2, newRadius, hue + 20);
    recursiveCircles(x, y - radius / 2, newRadius, hue + 20);
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = canvas.width / 4;

  recursiveCircles(centerX, centerY, radius, 0);

  requestAnimationFrame(animate);
}

animate();
