const hamburger_btn = document.querySelector(".hamburger");
const right_nav = document.querySelector(".right-nav");

hamburger_btn.addEventListener("click", () => {
    right_nav.classList.toggle("active");
    console.log(right_nav.classList);
});


