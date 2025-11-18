window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY >= 50) {
    nav.classList.add("active_nav");
  } else {
    nav.classList.remove("active_nav");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = menuButton,
    menu = mobileMenu,
    open = menuIcon,
    close = closeIcon;

  const toggleMenu = (show) => {
    menu.classList.toggle("opacity-100", show);
    menu.classList.toggle("pointer-events-auto", show);
    menu.classList.toggle("opacity-0", !show);
    menu.classList.toggle("pointer-events-none", !show);
    open.classList.toggle("hidden", show);
    close.classList.toggle("hidden", !show);
  };

  btn.onclick = (e) => {
    e.stopPropagation();
    toggleMenu(!menu.classList.contains("opacity-100"));
  };

  menu.querySelectorAll("a").forEach(
    (a) =>
      (a.onclick = (e) => {
        e.stopPropagation();
        toggleMenu(false);
      })
  );

  document.onclick = (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) toggleMenu(false);
  };
});

document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    loopedSlides: 5,
    slidesPerView: 1.1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});