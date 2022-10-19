let menuBtn = document.querySelector(".nav-bars");
let closeBtn = document.querySelector(".closeBtn");
let sideNav = document.querySelector(".side-nav");
menuBtn.addEventListener("click", () => {
  sideNav.style.display = "block";
});
closeBtn.addEventListener("click", closeMenu);
document.onclick = (e) => {
  if (e.target.id !== "sideNav" && e.target.id !== "menuBars") {
    closeMenu();
  }
};
function closeMenu() {
  sideNav.style.display = "none";
}

// ---------------------------------------------

let cartLi = document.querySelector(".cartLi");
let cartImg = document.querySelector(".cartLi .cart");
let cartNum = document.querySelector(".cartLi .num");
let cartBox = document.querySelector(".cart-box");
cartImg.addEventListener("click", () => {
  if (cartBox.classList.contains("disabled")) {
    cartBox.classList.remove("disabled");
  } else {
    cartBox.classList.add("disabled");
  }
});
// ---------------------------------------------

let realCount = 0;
let trickyCount = 0;
let cartBoxLi = document.querySelector(".cart-box-prods li");

function theChecker() {
  if (realCount == 0) {
    cartNum.classList.add("disabled");
    cartBoxLi.innerHTML = `<p>Your cart is empty!</p>`;
  } else {
    cartNum.classList.remove("disabled");
    cartNum.innerHTML = realCount;
    cartBoxLi.innerHTML = `<img src="imgs/product-1-thumbnail.jpg" alt="" />
    <div>
    <h4>Fall Limited Edition Sneakers</h4>
    <p>$125.00 x ${realCount} <span>$${realCount * 125}.00</span></p>
    </div>
    <i class="fas fa-trash-alt"></i>`;
    let deleteBtn = document.querySelector(".cart-box-prods li i");
    deleteBtn.addEventListener("click", () => {
      realCount = 0;
      theChecker();
    });
  }
}

let btnsCounter = document.querySelector(".count");
let minusBtn = document.querySelector(".minus");
let plusBtn = document.querySelector(".plus");
let addBtn = document.querySelector(".cartAdd");

btnsCounter.innerHTML = trickyCount;
plusBtn.addEventListener("click", () => {
  trickyCount++;
  btnsCounter.innerHTML = trickyCount;
});
minusBtn.addEventListener("click", () => {
  if (trickyCount == 0) {
    return false;
  } else {
    trickyCount--;
    btnsCounter.innerHTML = trickyCount;
  }
});
addBtn.addEventListener("click", () => {
  realCount += trickyCount;
  theChecker();
});

document.onload = theChecker();
