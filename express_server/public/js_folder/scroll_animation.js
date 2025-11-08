AOS.init({
  duration: 700,
  once: true,
  offset: 80,
  easing: "ease-out",
});

gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});
