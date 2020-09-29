// day 1

const btnBurger = document.querySelector(".btn-burger");
const catalog = document.querySelector(".catalog");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');

const openMenu = () => {
  catalog.classList.add("open");
  overlay.classList.add("active");
};

const closeMenu = () => {
  catalog.classList.remove("open");
  overlay.classList.remove("active");
};

const openSubMenu = event => {

}

btnBurger.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
catalogList.addEventListener("click", openSubMenu)

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeMenu();
  }
});
