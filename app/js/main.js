document.addEventListener("DOMContentLoaded", () => {
  $(".select-style").styler();

  $(".price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onChange: function (data) {
      $(".price__from").text(data.from);
      $(".price__to").text(data.to);
    },
  });

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

  if (window.innerWidth <= 576) {
    const restoSlider = new Swiper(".restaurant__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: {
        el: ".restaurant__dots",
        bulletClass: "restaurant__dot",
        bulletActiveClass: "restaurant__dot--active",
        clickable: true,
      },
    });
  }

  if (window.innerWidth <= 768) {
    const restoSlider = new Swiper(".discounts__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: {
        el: ".discounts__dots",
        bulletClass: "discounts__dot",
        bulletActiveClass: "discounts__dot--active",
        clickable: true,
      },
    });
  }
  if (window.innerWidth <= 768) {
    const mobileCatalog = document.querySelector(".catalog-btn");
    closeBtn = document.querySelector(".mob-filters__btn");
    const mobileFilters = document.querySelector(".mob-filters");

    mobileCatalog.addEventListener("click", () => {
      bodyLock.classList.add("filters-lock");
      mobileFilters.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
      bodyLock.classList.remove("filters-lock");
      mobileFilters.classList.remove("open");
    });
  }
});
