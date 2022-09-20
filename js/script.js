let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}



var type = new Typed('.typing-text',{
  strings : [ 'the best', 'your future ', 'intellegent', 'the nature of your life' ],
  typeSpeed: 120,
  loop:true
});


var swiper = new Swiper(".course-slider", {
   spaceBetween: 20,
   loop:true,
   autoplay: {
    delay: 5000,
    disableOnInteraction: false,
},
centeredSlides: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".teachers-slider", {
   spaceBetween: 20,
   loop:true,
   autoplay: {
    delay: 5000,
    disableOnInteraction: false,
},
centeredSlides: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 20,
   autoplay: {
    delay: 7500,
    disableOnInteraction: false,
},
centeredSlides: true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});