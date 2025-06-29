gsap.registerPlugin(ScrollTrigger);

// Setup: Start centered on .sec-1
gsap.set(".sections-outer-container", {
  scale: 1,
  x: "-100vw", // center .sec-1 initially
  y: "0vh",
  rotate: 0,
  transformOrigin: "center"
});

// Reset all margins
gsap.set([".sec-0", ".sec-1", ".sec-2", ".sec-3"], {
  marginLeft: 0,
  marginRight: 0,
});

// Timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-container",
    start: "top top",
    end: "+=4000",
    scrub: 1,
    pin: true,
  }
});

// === PHASE 1: Zoom out + partial .sec-0 reveal ===
tl.to(".sections-outer-container", {
  scale: 0.5,
  rotate: 5,
  x: "-75vw",  // Reveal part of .sec-0
  y: "10vh",   // Pan down
  duration: 1,
  ease: "power2.inOut"
}, 0)

.to(".sec-1", {
  marginLeft: "10vw",
  duration: 1,
  ease: "power2.inOut"
}, 0)

.to(".sec-2", {
  marginLeft: "10vw",
  duration: 1,
  ease: "power2.inOut"
}, 0)

.to(".sec-3", {
  marginLeft: "10vw",
  duration: 1,
  ease: "power2.inOut"
}, 0)

.to(".sections-outer-container", {
  x: "-130vw", // zoomed-out partial view
  y: "-20vh",
  duration: 1,
  ease: "power2.inOut"
})

// === PHASE 3: Reset zoom, rotate, pan ===
.to(".sections-outer-container", {
  scale: 1,
  rotate: 0,
  y: "0vh",
  x: "-200vw", // move fully to center .sec-2 at full scale
  duration: 1,
  ease: "power2.inOut"
})

.to([".sec-0", ".sec-1", ".sec-2"], {
  marginLeft: 0,
  marginRight: 0,
  duration: 1,
  ease: "power2.inOut"
}, "-=1");
