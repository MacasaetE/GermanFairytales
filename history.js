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

gsap.from(".history-hero", {
  y: "200%",
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(".card:nth-child(1)", {
  x: -200,
  opacity: 0,
  delay: 2,
});

gsap.from(".card:nth-child(3)", {
  x: 200,
  opacity: 0,
  delay: 2,
});

gsap.from(".card:nth-child(2)", {
  y: 100,
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
