toggleBurgerMenu();

export {};

function toggleBurgerMenu() {
  const hamburgerClosed = document.querySelector(".hamburgerClosed");
  const hamburgerOpened = document.querySelector(".hamburgerOpened");
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector("body");

  if (!hamburgerClosed) return false;
  if (!hamburgerOpened) return false;
  if (!navbar) return false;
  if (!body) return false;

  hamburgerClosed.addEventListener("click", () => {
    navbar.classList.add("navbarActive");
    body.style.overflow = "hidden";
  });

  hamburgerOpened.addEventListener("click", () => {
    navbar.classList.remove("navbarActive");
    body.style.overflow = "auto";
  });

  console.log(hamburgerClosed);

  return true;
}
