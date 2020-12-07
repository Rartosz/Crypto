let navLinks = [...document.querySelectorAll(".nav-link")];
let spanUnderline = document.querySelector(".underline-span");
let hamburgerBtn = document.querySelector(".hamburger-button");
let hamburgerMenu = document.querySelector(".hamburger-menu");


for(let i=0; i<navLinks.length; i++) 
{
    navLinks[i].addEventListener("mouseover", function() 
    {
        let navWidth = navLinks[i].offsetWidth;
        let navPosition = navLinks[i].offsetLeft;

        spanUnderline.style.width = navWidth + "px";
        spanUnderline.style.left = navPosition + "px";
        spanUnderline.style.opacity = 1;
        
    });
}

let openMenu = () => 
{
    let firstSpan = document.querySelector(".first-span");
    let secondSpan = document.querySelector(".second-span");
    let thirdSpan = document.querySelector(".third-span");
    let landing = document.querySelector(".landing");

    landing.classList.toggle("landing-open");
    firstSpan.classList.toggle("first-open");
    secondSpan.classList.toggle("second-open");
    thirdSpan.classList.toggle("third-open");


}


hamburgerBtn.addEventListener("click", openMenu);