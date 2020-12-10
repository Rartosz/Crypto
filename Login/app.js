let navLinks = [...document.querySelectorAll(".nav-link")];
let spanUnderline = document.querySelector(".underline-span");
let hamburgerBtn = document.querySelector(".hamburger-button");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let descriptions = [...document.querySelectorAll(".description")];
let dots = [...document.querySelectorAll(".dot")];

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




let changeDescription = function() 
{
    let i=0;

    setInterval(function() 
    {
        descriptions[i].classList.remove("description-active");
        dots[i].classList.remove("dot-active");
        if(i==4)
        {
            i=0;
            descriptions[i].classList.add("description-active");
            dots[i].classList.add("dot-active");
        }
        else 
        {
            descriptions[i+1].classList.add("description-active");
            dots[i+1].classList.add("dot-active");
            i++;
        }

    },5000);
}


hamburgerBtn.addEventListener("click", openMenu);
changeDescription();