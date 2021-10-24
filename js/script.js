const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////
/// Smooth scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      const el = document.querySelector(href);
      el.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

/////////////////////////////////////////////
/// Sticky navigation

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
// Buttons under price

const dot1 = document.querySelector(".dot-one");
const dot2 = document.querySelector(".dot-two");
const dot3 = document.querySelector(".dot-three");

const first = document.querySelector(".first-price");
const second = document.querySelector(".second-price");
const third = document.querySelector(".third-price");

dot1.addEventListener("click", () => {
  if (dot2.classList.contains("active")) {
    dot2.classList.remove("active");
    dot1.classList.add("active");
  }
  if (dot3.classList.contains("active")) {
    dot3.classList.remove("active");
    dot1.classList.add("active");
  }
  second.classList.add("hide");
  third.classList.add("hide");
  first.classList.remove("hide");
});

dot2.addEventListener("click", () => {
  if (dot1.classList.contains("active")) {
    dot1.classList.remove("active");
    dot2.classList.add("active");
  }
  if (dot3.classList.contains("active")) {
    dot3.classList.remove("active");
    dot2.classList.add("active");
  }

  second.classList.remove("hide");
  third.classList.add("hide");
  first.classList.add("hide");
});

dot3.addEventListener("click", () => {
  if (dot1.classList.contains("active")) {
    dot1.classList.remove("active");
    dot3.classList.add("active");
  }
  if (dot2.classList.contains("active")) {
    dot2.classList.remove("active");
    dot3.classList.add("active");
  }
  second.classList.add("hide");
  third.classList.remove("hide");
  first.classList.add("hide");
});
