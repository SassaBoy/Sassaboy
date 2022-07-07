/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});


/*=============== VALUE ACCORDION ===============*/
const accordionItems= document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')

      accordionHeader.addEventListener('click', ()=>{
          const openItem = document.querySelector('.accordion-open')
            toggleItem(item)

            if(openItem && openItem!== item){
              toggleItem(openItem)
            }
      })
})

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.value__accordion-content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{

  accordionContent.style.height = accordionContent.scrollHeight + 'px'
  item.classList.add('accordion-open')
      }
}


/*=============== CONTACT ===============*/ 
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/