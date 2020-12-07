let navLinks = [...document.querySelectorAll(".nav-link")];
let spanUnderline = document.querySelector(".underline-span");


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