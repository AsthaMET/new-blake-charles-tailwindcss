// const menuBtn = document.getElementById("menu-btn");
//     const navLinks = document.getElementById("nav-links");
//     const navLinkItems = document.querySelectorAll(".nav-link");
//     let menuOpen = false;

//     // Toggle Menu
//     function toggleMenu(open) {
//       if (open) {
//         navLinks.classList.remove("max-h-0", "opacity-0", "scale-y-0");
//         navLinks.classList.add("max-h-[500px]", "opacity-100", "scale-y-100");
//         menuBtn.textContent = "✖";
//       } else {
//         navLinks.classList.remove("max-h-[500px]", "opacity-100", "scale-y-100");
//         navLinks.classList.add("max-h-0", "opacity-0", "scale-y-0");
//         menuBtn.textContent = "☰";
//       }
//       menuOpen = open;
//     }

//     menuBtn.addEventListener("click", () => toggleMenu(!menuOpen));

//     // Close menu when clicking a link
//     navLinkItems.forEach(link => {
//       link.addEventListener("click", () => {
//         if (window.innerWidth < 768) toggleMenu(false);
//       });
//     });

//     // Adjust header offset dynamically (so it's below notice bar)
//     function adjustHeader() {
//       const noticeBar = document.querySelector("div.fixed.bg-black");
//       const header = document.getElementById("main-header");
//       const noticeHeight = noticeBar.offsetHeight;
//       header.style.top = `${noticeHeight}px`;
//     }

//     window.addEventListener("load", adjustHeader);
//     window.addEventListener("resize", adjustHeader);

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
