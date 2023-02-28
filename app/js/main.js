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

  $(".reviews__items").slick({
    dots: true,
    easing: "linear",
    prevArrow:
      '<button type="button" class="slick-prev slick-prev--left"></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-next--right"></button>',
  });
});
