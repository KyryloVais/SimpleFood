document.addEventListener("DOMContentLoaded", () => {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active')

  });

  $(".star").rateYo({
    rating: 4,
    spacing: "6px",
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    readOnly: true,
    starSvg:
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_3197_351)"> <path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z" /></g><defs><clipPath id="clip0_3197_351"><rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)"/></clipPath></defs></svg>',
  });

  $(".select-style, .product-form__input").styler();

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

  const pageSwiper = new Swiper(".product-top__slider", {
    navigation: {
      nextEl: ".product-top__btn--next",
      prevEl: ".product-top__btn--prev",
    },
  });

  const burgersSwiper = new Swiper(".burgers-slider__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      360: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    },
    pagination: {
      el: ".burgers-slider__dots",
      bulletClass: "burgers-slider__dot",
      bulletActiveClass: "burgers-slider__dot--active",
      clickable: true,
    },
    navigation: {
      nextEl: ".burgers-slider__btn--next",
      prevEl: ".burgers-slider__btn--prev",
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
    const discountSlider = new Swiper(".discount__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: {
        el: ".discount__dots",
        bulletClass: "discount__dot",
        bulletActiveClass: "discount__dot--active",
        clickable: true,
      },
    });
  }

  if (window.innerWidth <= 992) {
    const filterBtn = document.querySelector('.filter-btn');
    const filterCloseBtn = document.querySelector('.sidebar__btn')
    const filterSidebar = document.querySelector('.sidebar')

    filterBtn.addEventListener('click', () => {
      filterSidebar.classList.add('open')
      bodyLock.classList.add("lock");
    })

    filterCloseBtn.addEventListener('click', () => {
      filterSidebar.classList.remove('open');
    })
  }

  const rangeSlider = document.querySelector('.range__slider');
  const inputMin = document.querySelector('.range__input--min');
  const inputMax = document.querySelector('.range__input--max');

  noUiSlider.create(rangeSlider, {
    start: [100, 1000],
    connect: true,
    padding: [0, 0],
    animate: true,
    step: 10,
    range: {
      'min': 50,
      'max': 1200
    }

  });

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    let value = parseFloat(values[handle]).toFixed(0);
    if (handle) {
      inputMax.value = value;
    } else {
      inputMin.value = value;
    }
  });

});
