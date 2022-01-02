// Burger menu
const burgerMenu = document.querySelector("#burger");
const menuList = document.querySelector(".nav-list");
const closeBtn = document.querySelector("#close");

function openBurger() {
  burgerMenu.style.display = "none";
  menuList.classList.add("show");
  setTimeout(() => {
    closeBtn.style.display = "block";
  }, 1000);
}

function closeBurger() {
  setTimeout(() => {
    burgerMenu.style.display = "block";
  }, 500);
  menuList.classList.remove("show");
  closeBtn.style.display = "none";
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);
