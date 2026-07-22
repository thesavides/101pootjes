/* 101 Pootjes — minimal progressive enhancement + NL/EN language toggle.
   Kept tiny on purpose (Lighthouse: minimal JS).

   In the WordPress build the header/menu behaviour comes from Elementor and
   translation from Weglot. This script mirrors both for the static prototype:
   the site defaults to Dutch, the NL/EN switch translates the page in place,
   and the choice is remembered in localStorage. */
(function () {
  "use strict";

  /* ── Translations. Dutch is the source language (matches the HTML). ── */
  var I18N = {
    en: {
      "skip": "Skip to content",
      "nav.home": "Home", "nav.about": "About Us", "nav.products": "Products",
      "nav.brands": "Brands", "nav.salon": "Salon", "nav.events": "News &amp; Events",
      "nav.contact": "Contact", "nav.call": "Call Us", "pill.soon": "Coming Soon",

      "hero.h1": 'Everything your pet needs, <em>with love.</em> <svg class="ico" aria-hidden="true"><use href="#i-heart"/></svg>',
      "hero.sub": "Premium food, trusted advice and friendly local service for every tail and paw.",

      "salonbadge.tag": "✨ Coming Soon",
      "salonbadge.title": "Our Grooming Salon opens soon!",
      "salonbadge.text": "Washing, clipping and pampering — professional care for your best friend.",
      "salonbadge.disclaimer": "Please note: independent salon — read more ↓",
      "contact.website": "Visit Website",

      "promo2.eyebrow": "Our Pick", "promo2.h3": "Thrive Complete",
      "promo2.text": "100% natural cat food", "promo2.cta": "Drop By",

      "qb.store.title": "Visit Our Store",
      "qb.open.title": "Open Today", "qb.open.status": "We are open",
      "qb.call.title": "Call Us", "qb.call.text": "We're here to help",
      "qb.park.title": "Parking", "qb.park.text": "In the car park of the<br>Diemerplein shopping centre",

      "about.eyebrow": "About 101 Pootjes",
      "about.h2": "About me",
      "about.p1": "My love for animals began at an early age and has grown over the years into both my profession and my passion. Working with and for animals gives me energy every day – no two days are the same, and every animal has its own character.",
      "about.p2": "I trained in animal management and am also a qualified veterinary assistant (paraveterinarian). Through my experience in a pet specialty store, a veterinary practice and pet insurance, I've built up broad knowledge of nutrition, health, behaviour and care. I put that knowledge to use every day in the shop, where I'm always happy to help owners with honest, suitable and expert advice.",
      "about.p3": "At home I have my cat Liam, one year old. He loves getting into mischief and brings a smile to my face every single day.",

      "offer.h2": "What We Offer",
      "offer.advice.h3": "Expert Advice", "offer.advice.p": "Knowledgeable help for every stage of life.",
      "offer.brands.h3": "Premium Brands", "offer.brands.p": "We stock trusted brands you can rely on.",
      "offer.sub": "A local shop with knowledge, quality and a warm heart for animals.",
      "offer.service.h3": "Friendly Service", "offer.service.p": "Personal, local service with a smile.",

      "cat.title": "Products We Stock",
      "cat.sub": "From food to care — open a category to see what we stock.",
      "cat.dogs.l": "Dogs", "cat.cats.l": "Cats", "cat.birds.l": "Birds", "cat.fish.l": "Fish",
      "cat.small.l": "Small Pets", "cat.food.l": "Food", "cat.health.l": "Health &amp; Care", "cat.acc.l": "Accessories",
      "prod.dogs": "<li>Dry food</li><li>Wet food</li><li>Snacks &amp; treats</li><li>Toys</li><li>Beds &amp; cushions</li><li>Collars &amp; leads</li>",
      "prod.cats": "<li>Dry food</li><li>Wet food</li><li>Snacks</li><li>Cat litter</li><li>Scratching posts</li><li>Toys</li>",
      "prod.birds": "<li>Seed mixes</li><li>Snacks</li><li>Cages</li><li>Perches</li><li>Toys</li>",
      "prod.fish": "<li>Fish food</li><li>Aquariums</li><li>Filters &amp; pumps</li><li>Plants &amp; decor</li><li>Water care</li>",
      "prod.small": "<li>Food &amp; hay</li><li>Bedding</li><li>Cages &amp; hutches</li><li>Snacks</li><li>Toys</li>",
      "prod.food": "<li>Dry food</li><li>Wet food</li><li>Raw food (BARF)</li><li>Diet &amp; care food</li><li>Snacks</li>",
      "prod.health": "<li>Flea &amp; tick</li><li>Worming</li><li>Coat care</li><li>Shampoo</li><li>Supplements</li>",
      "prod.acc": "<li>Collars &amp; leads</li><li>Food &amp; water bowls</li><li>Beds &amp; cushions</li><li>Carriers</li><li>Name tags</li>",

      "brands.h2": "Brands We Stock",
      "brands.sub": "Trusted names we've chosen ourselves — and can advise you on.",

      "weather.h2": "Local Weather",

      "tip.h2": "Pet Tip of the Day",
      "tip.text": "Hot days can be tough on pets. Make sure they always have fresh water and shade.",
      "tip.cta": "See Summer Essentials",

      "promo.eyebrow": "This Month's Promotion", "promo.deal": "4 + 1 FREE",
      "promo.h3": "Natural Health Steamed",
      "promo.cta": "Drop By",

      "salon.eyebrow": "Coming Soon", "salon.h2": "Professional Grooming Salon",
      "salon.text": "A calm, careful space for your pet — run by people who know them by name.",
      "salon.t1": "Bathing", "salon.t2": "Nail Clipping", "salon.t3": "Breed Styling", "salon.t4": "Puppy Grooming",
      "salon.contactlead": "Book and find more information on the salon's own website:",
      "salon.note": "Please note: the grooming salon <b>Manon's Vachtatelier</b> is an independent business and is separate from 101 Pootjes. All reservations, appointments and payments are handled directly with the salon. 101 Pootjes is not involved in the salon's services and accepts no responsibility or liability for them.",

      "events.h2": "Upcoming Events", "events.viewall": "See on Facebook →",

      "fb.h2": "Follow Us on Facebook", "fb.viewall": "Visit our page →",

      "donate.partner": "Dierenasiel Oostzaan (cat shelter)",
      "donate.h2": "Donate",
      "donate.sub": "And help the cats of Dierenasiel Oostzaan",
      "donate.lead": "They can really use these items:",
      "donate.i1.t": "Liquid snacks", "donate.i1.d": "The best snacks for socialising cats",
      "donate.i2.t": "Cat wand toy", "donate.i2.d": "Play helps reduce stress",
      "donate.i3.t": "Wet food", "donate.i3.d": "All flavours and brands are welcome",
      "donate.i4.t": "Cat litter", "donate.i4.d": "A bag or a contribution can be paid at the till",
      "donate.note": "Other snacks and toys are very welcome too.",
      "donate.discount": "All donated items receive", "donate.discountb": "15% off", "donate.discount2": "at the till.",

      "visit.store.h2": "Visit Our Store",
      "visit.park": "Our shop and parking are located inside the Diemerplein shopping centre.",
      "visit.cta": "Get Directions →",
      "visit.hours.h2": "Opening Hours", "visit.closed": "Closed",
      "visit.contact.h2": "Get in Touch", "visit.wa": "WhatsApp Us",
      "day.mon": "Monday", "day.tue": "Tuesday", "day.wed": "Wednesday", "day.thu": "Thursday",
      "day.fri": "Friday", "day.sat": "Saturday", "day.sun": "Sunday",

      "footer.tagline": "Your trusted local destination for quality products, expert advice and genuine care.",
      "footer.quick": "Quick Links", "footer.hours": "Opening Hours", "footer.follow": "Follow Us",
      "footer.h1line": "Mon – Fri · 09:00 – 18:00", "footer.h2line": "Saturday · 09:00 – 17:00", "footer.h3line": "Sunday · Closed",
      "footer.copyright": "© 2026 101 Pootjes. All rights reserved.",

      "mob.call": "Call", "mob.wa": "WhatsApp", "mob.route": "Directions",

      "legal.terms": "Terms &amp; Conditions", "legal.privacy": "Privacy &amp; Cookies",
      "legal.cookiesettings": "Cookie settings",
      "cookie.text": "We use cookies to improve the website and analyse traffic. The choice is yours.",
      "cookie.decline": "Necessary only", "cookie.accept": "Accept all", "cookie.more": "More information"
    }
  };

  /* Capture the Dutch source straight from the DOM so we never duplicate it. */
  var nl = {};
  document.querySelectorAll("[data-t]").forEach(function (el) {
    nl[el.getAttribute("data-t")] = el.innerHTML;
  });
  I18N.nl = nl;

  function applyLang(lang) {
    if (!I18N[lang]) lang = "nl";
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach(function (el) {
      var v = dict[el.getAttribute("data-t")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll(".langswitch button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("pootjes-lang", lang); } catch (e) {}
    setWeatherLang(lang);
  }

  /* ── Weather widget: (re)build it in the active language ──────────── */
  var WEATHER_ATTRS = {
    "href": "https://forecast7.com/nl/52d344d96/diemen/",
    "data-font": "Inter", "data-icons": "Climacons Animated", "data-mode": "Forecast", "data-days": "4",
    "data-theme": "pure", "data-basecolor": "#ffffff", "data-accent": "#67B32E",
    "data-textcolor": "#333333", "data-highcolor": "#333333", "data-lowcolor": "#6b7280",
    "data-suncolor": "#F5A623", "data-mooncolor": "#333333", "data-cloudcolor": "#9aa8b6",
    "data-cloudfill": "#e8eaed", "data-raincolor": "#2196F3", "data-snowcolor": "#dfeef7", "data-shadow": "none"
  };
  function setWeatherLang(lang) {
    var host = document.getElementById("weather-widget");
    if (!host) return;
    var wl = lang === "en" ? "en" : "nl";
    if (host.getAttribute("data-lang") === wl) return;   // already in this language
    host.setAttribute("data-lang", wl);
    var a = document.createElement("a");
    a.className = "weatherwidget-io";
    Object.keys(WEATHER_ATTRS).forEach(function (k) { a.setAttribute(k, WEATHER_ATTRS[k]); });
    a.setAttribute("data-label_1", "DIEMEN");
    a.setAttribute("data-label_2", wl === "en" ? "WEATHER" : "WEER");
    a.setAttribute("data-lang", wl);
    a.textContent = wl === "en" ? "Diemen weather" : "Diemen weer";
    host.innerHTML = "";
    host.appendChild(a);
    // If the widget script has already loaded, re-render; otherwise it will pick this up on load.
    if (typeof window.__weatherwidget_init === "function") window.__weatherwidget_init();
  }

  document.querySelectorAll(".langswitch").forEach(function (sw) {
    sw.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (b) applyLang(b.getAttribute("data-lang"));
    });
  });

  var saved = "nl";
  try { saved = localStorage.getItem("pootjes-lang") || "nl"; } catch (e) {}
  if (saved !== "nl") applyLang(saved);   // NL text is already in the DOM
  setWeatherLang(saved);                  // build the weather widget in the saved language

  /* ── Sticky header shadow ──────────────────────────────────────── */
  var header = document.getElementById("header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ── Mobile menu ───────────────────────────────────────────────── */
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
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);   // close after tapping a link
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 980) setOpen(false);
    });
  }

  /* ── Cookie consent ────────────────────────────────────────────
     Prototype only. In production a consent plugin (e.g. Complianz)
     should gate analytics/marketing scripts on this choice. */
  var cookie = document.getElementById("cookie");
  if (cookie) {
    var KEY = "pootjes-consent";
    var get = function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
    var set = function (v) { try { localStorage.setItem(KEY, v); } catch (e) {} };
    var show = function () { cookie.hidden = false; };
    var hide = function () { cookie.hidden = true; };

    if (!get()) show();

    // Tell Google Consent Mode about the choice (no-op if gtag isn't present).
    var gconsent = function (granted) {
      if (typeof window.gtag !== "function") return;
      var v = granted ? "granted" : "denied";
      window.gtag("consent", "update", {
        ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v
      });
    };

    var accept = document.getElementById("cookie-accept");
    var decline = document.getElementById("cookie-decline");
    if (accept) accept.addEventListener("click", function () { set("all"); gconsent(true); hide(); });
    if (decline) decline.addEventListener("click", function () { set("necessary"); gconsent(false); hide(); });

    var reopen = document.getElementById("cookie-settings");
    if (reopen) reopen.addEventListener("click", function () { show(); });
  }
})();
