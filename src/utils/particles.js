export default function initParticles(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const mouse = { x: null, y: null, radius: 150 };

  const particles = [];
  const num = Math.round((w * h) / 80000);

  for (let i = 0; i < num; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);

  // Track mouse
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw particles
    for (let p of particles) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(0,199,255,${p.alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Move particle
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      // Interact with mouse
      if (mouse.x && mouse.y) {
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }
      }
    }

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(0,199,255,${0.2 * (1 - dist / 120)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}
