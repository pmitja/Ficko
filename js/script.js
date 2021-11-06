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
const dot4 = document.querySelector(".dot-four");

const first = document.querySelector(".first-price");
const second = document.querySelector(".second-price");
const third = document.querySelector(".third-price");
const fourth = document.querySelector(".fourth-price");

dot1.addEventListener("click", () => {
  if (dot2.classList.contains("active")) {
    dot2.classList.remove("active");
    dot1.classList.add("active");
  }

  if (dot3.classList.contains("active")) {
    dot3.classList.remove("active");
    dot1.classList.add("active");
  }

  if (dot4.classList.contains("active")) {
    dot4.classList.remove("active");
    dot1.classList.add("active");
  }
  second.classList.add("hide");
  third.classList.add("hide");
  first.classList.remove("hide");
  fourth.classList.add("hide");
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

  if (dot4.classList.contains("active")) {
    dot4.classList.remove("active");
    dot2.classList.add("active");
  }

  second.classList.remove("hide");
  third.classList.add("hide");
  first.classList.add("hide");
  fourth.classList.add("hide");
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

  if (dot4.classList.contains("active")) {
    dot4.classList.remove("active");
    dot3.classList.add("active");
  }

  second.classList.add("hide");
  third.classList.remove("hide");
  first.classList.add("hide");
  fourth.classList.add("hide");
});

dot4.addEventListener("click", () => {
  if (dot1.classList.contains("active")) {
    dot1.classList.remove("active");
    dot4.classList.add("active");
  }
  if (dot3.classList.contains("active")) {
    dot3.classList.remove("active");
    dot4.classList.add("active");
  }

  if (dot2.classList.contains("active")) {
    dot2.classList.remove("active");
    dot4.classList.add("active");
  }
  second.classList.add("hide");
  third.classList.add("hide");
  first.classList.add("hide");
  fourth.classList.remove("hide");
});

///////////////////////////////////////////////////////////
// Buttons for sections

const praznovanjeSection = document.querySelector("#praznovanje-section");
const smucanjeSection = document.querySelector("#smucanje-section");
const plavanjeSection = document.querySelector("#plavanje-section");
const tenisSection = document.querySelector("#tenis-section");
const izletiSection = document.querySelector("#izleti-section");

const praznovanjeBtn = document.querySelector("#btn-praznovanje");
const smucanjeBtn = document.querySelector("#btn-smucanje");
const plavanjeBtn = document.querySelector("#btn-plavanje");
const tenisBtn = document.querySelector("#btn-tenis");
const izletiBtn = document.querySelector("#btn-izleti");

praznovanjeBtn.addEventListener("click", () => {
  const viewPlace = document.querySelector(".text-box");
  viewPlace.append(praznovanjeSection);
  praznovanjeSection.classList.remove("hide");
  smucanjeSection.classList.add("hide");
  plavanjeSection.classList.add("hide");
  tenisSection.classList.add("hide");
  izletiSection.classList.add("hide");
});

smucanjeBtn.addEventListener("click", () => {
  const viewPlace = document.querySelector(".text-box");
  viewPlace.append(smucanjeSection);
  praznovanjeSection.classList.add("hide");
  smucanjeSection.classList.remove("hide");
  plavanjeSection.classList.add("hide");
  tenisSection.classList.add("hide");
  izletiSection.classList.add("hide");
});

plavanjeBtn.addEventListener("click", () => {
  const viewPlace = document.querySelector(".text-box");
  viewPlace.append(plavanjeSection);
  praznovanjeSection.classList.add("hide");
  smucanjeSection.classList.add("hide");
  plavanjeSection.classList.remove("hide");
  tenisSection.classList.add("hide");
  izletiSection.classList.add("hide");
});

tenisBtn.addEventListener("click", () => {
  const viewPlace = document.querySelector(".text-box");
  viewPlace.append(tenisSection);
  praznovanjeSection.classList.add("hide");
  smucanjeSection.classList.add("hide");
  plavanjeSection.classList.add("hide");
  tenisSection.classList.remove("hide");
  izletiSection.classList.add("hide");
});

izletiBtn.addEventListener("click", () => {
  const viewPlace = document.querySelector(".text-box");
  viewPlace.append(izletiSection);
  praznovanjeSection.classList.add("hide");
  smucanjeSection.classList.add("hide");
  plavanjeSection.classList.add("hide");
  izletiSection.classList.remove("hide");
  tenisSection.classList.add("hide");
});
