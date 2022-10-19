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
let cartBoxUl = document.querySelector(".cart-box-prods");
let cartBoxLi = document.querySelector(".cart-box-prods li");

function theChecker() {
  if (realCount == 0) {
    cartNum.classList.add("disabled");
    cartBoxUl.innerHTML = `<li><p>Your cart is empty!</p></li>`;
  } else {
    cartNum.classList.remove("disabled");
    cartNum.innerHTML = realCount;
    cartBoxUl.innerHTML = `<li>
    <img src="imgs/product-1-thumbnail.jpg" alt="" />
    <div>
    <h4>Fall Limited Edition Sneakers</h4>
    <p>$125.00 x ${realCount} <span>$${realCount * 125}.00</span></p>
    </div>
    <i class="fas fa-trash-alt"></i>
    </li>
    <li class="checkout">
    <button>Checkout</button>
    </li>`;
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

// ---------------------------------------------
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;
imgBtns[0].parentElement.classList.add("active");

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
  imgBtns.forEach((ele) => {
    if (ele.getAttribute("data-id") == imgId) {
      ele.parentElement.classList.add("active");
    } else {
      ele.parentElement.classList.remove("active");
    }
  });
}

// window.addEventListener("resize", slideImage);

rightArrow.addEventListener("click", () => {
  if (imgId == 4) {
    imgId = 1;
    slideImage();
  } else {
    imgId++;
    slideImage();
  }
});
leftArrow.addEventListener("click", () => {
  if (imgId == 1) {
    imgId = 4;
    slideImage();
  } else {
    imgId--;
    slideImage();
  }
});
