gsap.registerPlugin(ScrollTrigger);

gsap.to(".header_2", {
  scale: 0.8, // Zoom out effect
  opacity: 1,
  scrollTrigger: {
    trigger: ".header_2",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true, // Keep it fixed while scrolling
  }
});



// Dynamically adjust animation values for different screen sizes
let xMove = window.innerWidth < 768 ? "-20vw" : "-30vw"; 

gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "top 0%",
    end: "+=150%",
    scrub: true,
    pin: true
  }
})
.fromTo(".domino", 
    { opacity: 0, rotate: -20 }, // Start tilted
    { opacity: 1, rotate: 0, stagger: 0.2 }); // Straighten one by one



gsap.from(".custom_header1", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out"
});


gsap.utils.toArray(".row-box").forEach((box) => {
  gsap.fromTo(
    box,
    { opacity: 0, scale: 0.8, y: 50 }, // Initial state (hidden, smaller, moved down)
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: box,
        start: "top 80%",  // Trigger animation when 80% of the viewport is reached
        toggleActions: "play none none none", // Play animation once
      },
    }
  );
});