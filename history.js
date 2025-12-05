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

$(function () {
  const $timelineWrapper = $(".wrapper");
  if (!$timelineWrapper.length) return;

  const $sections = $timelineWrapper.find("> section");
  const $navLinks = $(".timeline-nav a");
  const $navItems = $(".timeline-nav li");
  const $navWrapper = $(".nav__wrapper");
  const activateOffset = 150;

  // Smooth scroll for timeline links
  $navLinks.on("click", function (e) {
    const targetId = $(this).attr("href");
    const $target = $(targetId);
    if ($target.length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $target.offset().top }, 800);
    }
  });

  function updateActiveNav(scrollPos) {
    let currentId = null;

    $sections.each(function () {
      const $section = $(this);
      const top = $section.offset().top - activateOffset;
      const bottom = top + $section.outerHeight();

      if (scrollPos >= top && scrollPos < bottom) {
        currentId = $section.attr("id");
      }
    });

    if (!currentId) return;

    $navItems.removeClass("active");
    $navItems.has('a[href="#' + currentId + '"]').addClass("active");
  }

  function onScroll() {
    const scrollPos = $(window).scrollTop();
    const winHeight = $(window).height();

    const wrapperTop = $timelineWrapper.offset().top;
    const wrapperBottom = wrapperTop + $timelineWrapper.outerHeight();

    const triggerOffset = 150;

    const focusPoint = scrollPos + triggerOffset;
    // 0.5 = center of the viewport

    const inTimeline = focusPoint > wrapperTop && focusPoint < wrapperBottom;

    $navWrapper.toggleClass("is-visible", inTimeline);

    if (inTimeline) {
      updateActiveNav(scrollPos);
    }
  }

  $(window).on("scroll", onScroll);
  onScroll();
});

const host = window.location.hostname;
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  if (!link.hostname.includes(host)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
