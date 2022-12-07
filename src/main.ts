toggleBurgerMenu();

export {};

function toggleBurgerMenu() {
  const hamburgerClosed = document.querySelector(".hamburgerClosed");
  const hamburgerOpened = document.querySelector(".hamburgerOpened");
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");

  if (!hamburgerClosed) return;
  if (!hamburgerOpened) return;
  if (!navbar) return;
  if (!body) return;
  if (!overlay) return;

  const openNavbar = () => {
    navbar.classList.add("navbarActive");
    overlay.classList.add("overlayActive");
    body.style.overflow = "hidden";
  };

  const closeNavbar = () => {
    navbar.classList.remove("navbarActive");
    overlay.classList.remove("overlayActive");
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
