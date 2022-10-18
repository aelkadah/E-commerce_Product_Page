let menuBtn = document.querySelector(".nav-bars");
let closeBtn = document.querySelector(".closeBtn");
let sideNav = document.querySelector(".side-nav");
menuBtn.addEventListener("click", () => {
  sideNav.style.display = "block";
});
closeBtn.addEventListener("click", close);
document.onclick = (e) => {
  if (e.target.id !== "sideNav" && e.target.id !== "menuBars") {
    close();
  }
};
function close() {
  sideNav.style.display = "none";
}
// ---------------------------------------------

let cartBtn = document.querySelector("selectors");
