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
  const $cards = $(".history-cards");
  const cardsBottom = $cards.offset().top + $cards.outerHeight();
  const $timelineWrapper = $(".wrapper");
  const $navWrapper = $(".nav__wrapper");
  const $sections = $timelineWrapper.find("> section");
  const $navItems = $(".timeline-nav li");
  const $timelineLinks = $('.timeline-nav a[href^="#"]');
  const activateOffset = 150;

  if (!$timelineWrapper.length || !$navWrapper.length) return;

  // Smooth scroll only for timeline links
  $timelineLinks.on("click", function (e) {
    const targetId = $(this).attr("href");
    if (!targetId || !targetId.startsWith("#")) return;

    const $target = $(targetId);
    if (!$target.length) return;

    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $target.offset().top,
      },
      800
    );
  });

  // Click cards to jump to a specific timeline section
  $(".card[data-target]").on("click", function (e) {
    // Let normal link clicks behave as usual
    if ($(e.target).closest("a").length) return;

    const targetSelector = $(this).data("target");
    if (!targetSelector) return;

    const $target = $(targetSelector);
    if (!$target.length) return;

    $("html, body").animate(
      {
        scrollTop: $target.offset().top,
      },
      800
    );
  });

  // Highlight correct nav item based on scroll position
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

  // Show/hide nav only when timeline area is actually in view
  function onScroll() {
    const scrollPos = $(window).scrollTop();
    const winHeight = $(window).height();

    const wrapperTop = $timelineWrapper.offset().top;
    const wrapperBottom = wrapperTop + $timelineWrapper.outerHeight();

    // Trigger point a bit below top of viewport
    const triggerY = scrollPos + 80;

    const inTimeline = triggerY >= wrapperTop && triggerY < wrapperBottom;

    $navWrapper.toggleClass("is-visible", inTimeline);

    if (inTimeline) {
      updateActiveNav(scrollPos);
    }
  }

  $(window).on("scroll", onScroll);
  $(window).on("resize", onScroll);
  onScroll();

  $(".card[data-target]").on("click", function (e) {
    if ($(e.target).closest("a").length) return;

    const targetSelector = $(this).data("target");
    if (!targetSelector) return;

    const $target = $(targetSelector);
    if (!$target.length) return;

    $("html, body").animate(
      {
        scrollTop: $target.offset().top,
      },
      800
    );
  });
});

const host = window.location.hostname;
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  if (!link.hostname.includes(host)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
