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