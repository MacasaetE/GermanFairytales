const host = window.location.hostname;
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  if (!link.hostname.includes(host)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
