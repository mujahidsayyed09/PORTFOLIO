const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const hLinks = document.querySelectorAll("#hLink");

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})

toggle.addEventListener("click",()=>{
    body.classList.toggle("dark")
})


function showCertificate(imageSrc) {
  const mainImage = document.getElementById('mainCertificate');
  const placeholderText = document.getElementById('placeholderText');

  mainImage.src = imageSrc;
  mainImage.classList.remove('hidden');
  placeholderText.classList.add('hidden');
}