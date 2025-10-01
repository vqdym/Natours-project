// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

// POPUP ITEMS
const popupOpenBtns = document.querySelectorAll(".popup--open");
const popupWindow = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");

// NAV ITEMS
const navCheckBox = document.querySelector(".navigation__checkbox");
const navButtpn = document.querySelector(".navigation__button");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (
      href != "#" &&
      href.startsWith("#") &&
      href != "#popup" &&
      href != "popup-close-btn"
    ) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      const offset = 0;
      window.scrollTo({
        top:
          sectionEl.getBoundingClientRect().top + window.pageYOffset + offset,
        behavior: "smooth",
      });
      if ((navCheckBox.checked = true)) {
        navCheckBox.checked = false;
      }
    }
  });
});

// Open popup BOOK NOW
popupOpenBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    popupWindow.classList.add("popup--open");
  });
});

popupCloseBtn.addEventListener("click", function () {
  popupWindow.classList.remove("popup--open");
});
