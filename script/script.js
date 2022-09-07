"use strict";
const headerOneEl = document.querySelector(".header-one");
const headerTwoEl = document.querySelector(".header-two");
const headerThreeEl = document.querySelector(".header-three");
const headerFourEl = document.querySelector(".header-four");
const headerFiveEl = document.querySelector(".header-five");
const headerSixEl = document.querySelector(".header-six");
const headerSevenEl = document.querySelector(".header-seven");
const menuButtonEl = document.querySelector(".mobile-nav-button");
const closeButtonEl = document.querySelector(".close-mobile-nav");
const overLay = document.querySelector(".overlay");
const hyperText = document.querySelector("html");
const links = document.querySelectorAll(".more-links");
// const changingChracter = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const twoLink = document.querySelector(".two-link");
const loader = document.querySelector(".loader-overlay");

// preloader
/////////////////////////////////////////////
// preloader
window.addEventListener("load", () => {
  loader.classList.add("hidden");
});
const obs0 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === true) {
      one.textContent = "Model 3";
    }
  },
  {
    root: null,

    threshold: 0,
  }
);
obs0.observe(headerOneEl);
const obs1 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === true) {
      one.textContent = "Model Y";
    }
  },
  {
    root: null,

    threshold: 0,
  }
);
obs1.observe(headerTwoEl);

const obs2 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === true) {
      one.textContent = "Model S";
    }
  },
  {
    root: null,

    threshold: 0,
  }
);
obs2.observe(headerThreeEl);

const obs3 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === true) {
      one.textContent = "Model X";
    }
  },
  {
    root: null,

    threshold: 0,
  }
);
obs3.observe(headerFourEl);

const obs4 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === true) {
      one.textContent = "Solar panels";
    }
  },
  {
    root: null,

    threshold: 0,
  }
);
obs4.observe(headerFiveEl);
const obs5 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === true) {
      one.textContent = "Solar Roof";
    }
  },
  {
    root: null,

    threshold: 0,
  }
);
obs5.observe(headerSixEl);
const obs6 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === true) {
      one.textContent = "Accessories";
    }
  },
  {
    root: null,

    threshold: 0,
  }
);
obs6.observe(headerSevenEl);

// mobile navigation//
menuButtonEl.addEventListener("click", function () {
  document.querySelector(".section-nav").classList.add("nav-open");
  overLay.style.visibility = "visible";
  overLay.style.opacity = 1;
  hyperText.style.overflow = "hidden";
});
const removeEl = function () {
  document.querySelector(".section-nav").classList.remove("nav-open");
  overLay.style.visibility = "hidden";
  overLay.style.opacity = 0;
  hyperText.style.overflow = "scroll";
};
closeButtonEl.addEventListener("click", function () {
  removeEl();
});
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    //  scroll back to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // closing the mobile nav after clicking
    if (link.classList.contains("links")) {
      removeEl();
    }
  });
});

// console.log(headerOneEl.getBoundingClientRect());
// console.log(headerTwoEl.getBoundingClientRect());
// console.log(headerThreeEl.getBoundingClientRect());
// console.log(headerFourEl.getBoundingClientRect());
// console.log(headerFiveEl.getBoundingClientRect());
// console.log(headerSixEl.getBoundingClientRect());
// console.log(headerSevenEl.getBoundingClientRect());
// const first = headerOneEl.getBoundingClientRect();
// const fourth = headerFourEl.getBoundingClientRect().y;

// const clientHeight = document.documentElement.clientHeight;
// window.addEventListener("scroll", function () {
//   if (first.top === 0) {
//     one.textContent = "Model y";
//   } else if (fourth.top === 2688) {
//     one.textContent = "Model x";
//   }
// });
