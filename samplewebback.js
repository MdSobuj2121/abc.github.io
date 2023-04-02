const n1 = document.querySelector(".navbar");

const bc = document.querySelector(".bottom-container");

window.addEventListener("scroll", ()=>{
if(window.scrollY > bc.offsetTop - n1.offsetHeight - 50)
{
    n1.classList.add("active");
}
else
{
    n1.classList.remove("active");
}
});