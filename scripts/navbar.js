fetch('https://github.com/BonesMara/goshenbw/blob/main/scripts/gallery.json')
// fetch('../scripts/gallery.json')
  .then(response => response.json())
  .then(data => {
    // do something with the JSON data
    localStorage.setItem('gallery', JSON.stringify(data));
  })
  .catch(error => {
    // handle any errors
    console.log("error: " + error);
  });
const navBtn = document.getElementById("navbar-toggle");
const navLinks = document.getElementById("nav-links");
const navContainer = document.getElementById("navbar-menu");
let isNavbarExpanded = navBtn.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  if (!isNavbarExpanded) {
    navLinks.style.display = 'block';
  }
  else {
    navLinks.style.display = 'none';
  }
  isNavbarExpanded = !isNavbarExpanded;
  navBtn.setAttribute("aria-expanded", isNavbarExpanded);
};

navBtn.addEventListener("click", toggleNavbarVisibility);
