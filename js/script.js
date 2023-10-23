let menu = document.querySelector(".menu");
let content = document.querySelector(".content");
let navbar = document.querySelector(".navbar");

menu.addEventListener('click', (e) => {
    content.classList.toggle('active')
    menu.classList.toggle('active')
    navbar.classList.toggle('active')
    console.log(e.target)
})
