

// ================= Scroll Section Active Link ==================//
const navToggle = document.querySelector(".nav_toggle"),
navMenu = document.querySelector(".nav_menu"),
Overlay = document.querySelector(".overlay");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show_menu");
    navToggle.classList.toggle("active");
    Overlay.classList.toggle("active");
});


// ============== Swipper =======//
var swiper = new Swiper(".property_container", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});


// ========================== Question Accordion =================//
const accordionItems = document.querySelectorAll('.accordition_item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.about_header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.about_accordition-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

// =================== testmonial ============//

var swiper = new Swiper(".testimonial_container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});