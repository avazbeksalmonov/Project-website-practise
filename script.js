const nav = document.querySelector("nav");
const navLink = document.querySelector(".nav-link");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

const scrollTop = document.querySelector(".scrolTop");

document.addEventListener("scroll", () => {
    if (document.scrollingElement.scrollTop > 250) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
});

scrollTop.addEventListener("click", () => {
    document.scrollingElement.scrollTop = 0;
});

openBtn.addEventListener("click", () => {
    navLink.classList.add("open");
    openBtn.style.display = "none";
});
closeBtn.addEventListener("click", () => {
    navLink.classList.remove("open");
    openBtn.style.display = "block";
});

document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
        nav.style.background = "rgba(241,241,241,1)";
        nav.style.padding = "15px 40px";
    } else {
        nav.style.background = "none";
        nav.style.padding = "15px 40px";
    }
});