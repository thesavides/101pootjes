/* 101 Pootjes — minimal progressive enhancement.
   Kept tiny on purpose (Lighthouse: minimal JS). In the WordPress build
   the header/menu behaviour comes from Elementor; this mirrors it for the
   static prototype only. */
(function () {
  "use strict";

  // Shadow on the sticky header once the page scrolls.
  var header = document.getElementById("header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile menu toggle.
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    };
    burger.addEventListener("click", function () {
      setOpen(burger.getAttribute("aria-expanded") !== "true");
    });
    // Close after tapping a link, and on resize back to desktop.
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 980) setOpen(false);
    });
  }

  // Language switcher demo state (Weglot replaces this in production).
  var langswitch = document.getElementById("weglot_here");
  if (langswitch) {
    langswitch.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      langswitch.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
    });
  }
})();
