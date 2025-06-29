gsap.registerPlugin(ScrollTrigger);

// Start centered on .sec-1
gsap.set(".sections-wrapper", {
  scale: 1,
  x: "-40vw", // slightly past sec-1 center to account for margin
  y: "-110vh",
  rotate: 0,
  transformOrigin: "center"
});

// Set tight view initially
gsap.set(".sec", {
  margin: 0,
  width: "100vw",
  height: "100vh"
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-container",
    start: "top top",
    end: "+=4000",
    scrub: 1,
    pin: true,
  }
});

// === PHASE 1: Zoom out with gaps ===
tl.to(".sections-wrapper", {
  scale: 0.5,
  rotate: 5,
  x: "-105vw",
  y: "-100vh",
  duration: 1,
  ease: "power2.inOut"
}, 0)

  .to(".sec", {
    margin: "2vh 1.5vw",
    width: "calc(100vw - 3vw)",
    height: "calc(100vh - 4vh)",
    duration: 1,
    ease: "power2.inOut"
  }, 0)

  // === PHASE 2: Drift movement ===
  .to(".sections-wrapper", {
    x: "-230vw",
    y: "-120vh",
    duration: 1,
    ease: "power2.inOut"
  })

  // === PHASE 3: Zoom back in, remove gaps ===
  .to(".sections-wrapper", {
    scale: 1,
    rotate: 0,
    x: "-280vw", // center on .sec-3
    y: "-110vh",
    duration: 1,
    ease: "power2.inOut"
  })

  .to(".sec", {
    margin: 0,
    width: "100vw",
    height: "100vh",
    duration: 1,
    ease: "power2.inOut"
  }, "-=1")

  .to(".sec", { duration: 0.5 });





// particles and other js codes:
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Animate valve on click
function animateValve(element) {
  element.style.transform = 'translateY(-5px) scale(1.1) rotateY(180deg)';

  setTimeout(() => {
    element.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
  }, 600);
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
});


