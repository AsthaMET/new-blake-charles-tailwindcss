
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY >= 50) {
    nav.classList.add("active_nav");
  } else {
    nav.classList.remove("active_nav");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = menuButton, menu = mobileMenu, open = menuIcon, close = closeIcon;

  const toggleMenu = (show) => {
    menu.classList.toggle("opacity-100", show);
    menu.classList.toggle("pointer-events-auto", show);
    menu.classList.toggle("opacity-0", !show);
    menu.classList.toggle("pointer-events-none", !show);
    open.classList.toggle("hidden", show);
    close.classList.toggle("hidden", !show);
  };

  btn.onclick = e => {
    e.stopPropagation();
    toggleMenu(!menu.classList.contains("opacity-100"));
  };

  menu.querySelectorAll("a").forEach(a => a.onclick = e => {
    e.stopPropagation();
    toggleMenu(false);
  });

  document.onclick = e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) toggleMenu(false);
  };
});
