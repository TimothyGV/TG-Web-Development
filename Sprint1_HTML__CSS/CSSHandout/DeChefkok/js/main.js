const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav__list");
const navLogo = document.querySelector(".nav__logo");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// menu en scrollen
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const portfolioMenu = document.querySelector("#portfolio-page");
  const contactMenu = document.querySelector("#contact-page");
  let scrollPos = window.scrollY;

  // add 'highlight'
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove.remove("highlight");
    portfolioMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    portfolioMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("hightlight");
  }
};

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("chef").style.display = "none";
}
