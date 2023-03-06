document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  const filterBtns = document.querySelectorAll(".categories-nav__btn");
  const grid = document.querySelector(".categories-list");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove("active");
      });

      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      for (const item of grid.children) {
        if (filterValue === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else if (item.classList.contains(filterValue)) {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      }
    });
  });

  const swiper = new Swiper(".reviews__slider", {
    pagination: {
      el: ".reviews__dots",
      bulletClass: "reviews__dot",
      bulletActiveClass: "reviews__dot--active",
      clickable: true,
    },
    navigation: {
      nextEl: ".reviews__btn--next",
      prevEl: ".reviews__btn--prev",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".menu-mob");
  const bodyLock = document.querySelector("body");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu-mob--active");
    if (mobileMenu.classList.contains("menu-mob--active")) {
      bodyLock.classList.add("lock");
    } else {
      burger.classList.remove("burger--active");
      bodyLock.classList.remove("lock");
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove("burger--active");
      mobileMenu.classList.remove("menu-mob--active");
      bodyLock.classList.remove("lock");
    }
  });

  const swiper = new Swiper(".rest-slider__slider", {
    pagination: {
      el: ".rest-slider__dots",
      bulletClass: "rest-slider__dot",
      bulletActiveClass: "rest-slider__dot--active",
      clickable: true,
    },
  });
});
