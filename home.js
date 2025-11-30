gsap.from(".hero-section", {
  y: "200%",
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(".home-intro", {
  x: -200,
  opacity: 0,
  delay: 2,
});

const host = window.location.hostname;
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  if (!link.hostname.includes(host)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
