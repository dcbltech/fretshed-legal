/* FretShed – Landing Page Scripts */

(function () {
  "use strict";

  /* Fade-in on scroll using IntersectionObserver */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".fade-in").forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Time-limited banners: shown only between their data-start and data-end
     (ISO dates), so a sale banner turns itself on and off without a deploy. */
  var now = Date.now();
  document.querySelectorAll("[data-start][data-end]").forEach(function (el) {
    var start = Date.parse(el.getAttribute("data-start"));
    var end = Date.parse(el.getAttribute("data-end"));
    if (now >= start && now < end) {
      el.hidden = false;
    }
  });
})();
