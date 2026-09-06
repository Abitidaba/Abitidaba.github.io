document.addEventListener("DOMContentLoaded",function(){
const year=document.getElementById("current-year");if(year)year.textContent=new Date().getFullYear();
const btn=document.querySelector(".mobile-menu-button"),nav=document.querySelector(".main-nav");
if(btn&&nav)btn.addEventListener("click",()=>{const open=nav.classList.toggle("mobile-open");btn.setAttribute("aria-expanded",open?"true":"false")});
const toggle=document.querySelector(".dropdown-toggle");
if(toggle)toggle.addEventListener("click",function(e){if(window.innerWidth<=950){e.preventDefault();this.closest(".nav-dropdown").classList.toggle("mobile-open")}});
const header=document.querySelector(".main-header");
window.addEventListener("scroll",()=>{if(header)header.classList.toggle("scrolled",window.scrollY>20)});
document.querySelectorAll(".faq-question").forEach(q=>q.addEventListener("click",function(){
const item=this.closest(".faq-item"),answer=item.querySelector(".faq-answer"),open=item.classList.contains("active");
document.querySelectorAll(".faq-item").forEach(x=>{x.classList.remove("active");x.querySelector(".faq-question").setAttribute("aria-expanded","false");x.querySelector(".faq-answer").style.maxHeight=null});
if(!open){item.classList.add("active");this.setAttribute("aria-expanded","true");answer.style.maxHeight=answer.scrollHeight+"px"}
}));
});