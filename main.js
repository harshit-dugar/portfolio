// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}
//types effect
let typed = new Typed(".auto-typed",{
  strings: ["Web Developer","Freelancer","Open Source Enthusiast"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
}); 

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".nav-links li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , () => {
          navBar.classList.remove("active");
          menuBtn.style.opacity = "1";
          menuBtn.style.pointerEvents = "auto";
          body.style.overflow = "auto";
      });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby5hBcyHBGmi981mhFc6XKSH1ynQo-xJl04BqMvpS-pdzbIT48XK_l_lbBWxQS2CtSjvQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

//scroll efect
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});
srtop.reveal('.skills .content .progress-bar-container', {delay: 200});
srtop.reveal('.skills .content .skill .progress-bar', {delay: 200});

srtop.reveal('.experience .container',{delay: 400});
srtop.reveal('.experience .container .container-e',{interval: 400});

srtop.reveal('.projects .box',{interval: 200}); 