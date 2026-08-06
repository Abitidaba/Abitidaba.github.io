/* ==========================================
   DRIP OR DROWN IRRIGATION
   SCRIPT.JS
========================================== */

/* ==========================
   SMOOTH SCROLLING
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   STICKY NAVBAR
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.background = "rgba(11,47,107,.97)";

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";

    }

    else{

        header.style.background = "rgba(11,47,107,.90)";

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    }

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(

".service-card,.project-card,.why-card,.process-step,.skill-box,.area-card,.testimonial-card"

);

const reveal = () => {

    const trigger = window.innerHeight * .88;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top = section.offsetTop-120;

        const height = section.clientHeight;

        if(pageYOffset>=top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================
   CONTACT FORM
========================== */

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert(

"Thank you for contacting Drip or Drown Irrigation! We will get back to you as soon as possible."

    );

    form.reset();

});

}

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const topButton = document.createElement("button");

topButton.innerHTML="▲";

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================
   DYNAMIC COPYRIGHT
========================== */

const copyright = document.querySelector(".copyright p");

if(copyright){

copyright.innerHTML =

`© ${new Date().getFullYear()} Drip or Drown Irrigation. All Rights Reserved.`;

}
