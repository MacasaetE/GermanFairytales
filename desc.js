gsap.from(".green-bg", {
  y: "-100%",
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from("h1 span", {
  y: 10,
  opacity: 0,
  delay: 0.8,
  stagger: 0.2,
});

gsap.from(".desc-hero", {
  y: "200%",
  opacity: 0,
  duration: 1,
  delay: 1,
});
