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
// Homepage package accordions and service/package pre-selection
(function(){
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.package-toggle').forEach(function(toggle){
      toggle.addEventListener('click',function(){
        const card=toggle.closest('.package-card');
        const details=card.querySelector('.package-details');
        const wasOpen=card.classList.contains('active');
        document.querySelectorAll('.package-card').forEach(function(other){
          other.classList.remove('active');
          other.querySelector('.package-toggle').setAttribute('aria-expanded','false');
          other.querySelector('.package-details').style.maxHeight=null;
        });
        if(!wasOpen){
          card.classList.add('active');
          toggle.setAttribute('aria-expanded','true');
          details.style.maxHeight=details.scrollHeight+'px';
        }
      });
    });

    document.querySelectorAll('[data-service]').forEach(function(link){
      link.addEventListener('click',function(){
        const select=document.getElementById('booking-service');
        if(select){
          const requested=link.getAttribute('data-service');
          const option=Array.from(select.options).find(function(o){return o.text===requested;});
          if(option) select.value=requested;
        }
      });
    });

    document.querySelectorAll('[data-package]').forEach(function(link){
      link.addEventListener('click',function(){
        const select=document.getElementById('booking-package');
        if(select) select.value=link.getAttribute('data-package');
      });
    });
  });
})();
