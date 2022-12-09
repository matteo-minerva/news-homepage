toggleBurgerMenu();

export {};

function toggleBurgerMenu() {
  const hamburgerClosed = document.querySelector(".hamburger--closed");
  const hamburgerOpened = document.querySelector(".hamburger--opened");
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");

  if (!hamburgerClosed) return;
  if (!hamburgerOpened) return;
  if (!navbar) return;
  if (!body) return;
  if (!overlay) return;

  const openNavbar = () => {
    navbar.classList.add("navbar--active");
    overlay.classList.add("overlay--active");
    body.style.overflow = "hidden";
  };

  const closeNavbar = () => {
    navbar.classList.remove("navbar--active");
    overlay.classList.remove("overlay--active");
    body.style.overflow = "auto";
  };

  const handleNavbarClickAway = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.closest(".navbar")) return;

    closeNavbar();
  };

  overlay.addEventListener("click", handleNavbarClickAway);
  hamburgerClosed.addEventListener("click", openNavbar);
  hamburgerOpened.addEventListener("click", closeNavbar);
}
