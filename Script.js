
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1.3,
  loop: true,
  simulateTouch: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

 const swiper2 = new Swiper(".swiper2", {
  spaceBetween: 30,
  slidesPerView: 3,
  speed: 500,
  simulateTouch: false,
  centeredSlides: false,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
 });

 const swiper3 = new Swiper(".swiper3", {
  spaceBetween: 30,
  slidesPerView: 3,
  speed: 500,
  simulateTouch: false,
  centeredSlides: false,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
 });

 const swiper4 = new Swiper(".swiper4", {
  spaceBetween: 20,
  slidesPerView: 3,
  slidesPerGroup: 2,
  speed: 500,
  simulateTouch: false,
  centeredSlides: false,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
 });




// const headCarousel = document.querySelectorAll(".head_carousel");
// let i = 1;

// setInterval( () => {
//     Array.from(headCarousel).forEach((item,index) =>{

//         if(i < headCarousel.length){
//             item.style.transform = `translateX(-${i*70}vw)`
//         }
//     })

//     if(i < headCarousel.length){
//         i++;
//     }
//     else{
//         i=1;
//     }


// }, 3500)
/*
document.addEventListener("DOMContentLoaded", function() {
    const scrollRight = document.getElementById(".recent_right_handle");
    const newsItemsContainer = document.querySelector(".recent_news_box");

scrollRight.addEventListener("click", function() {
    newsItemsContainer.scrollBy({
        top: 0,
        left: 620,
        behavior: 'smooth'
    });
  });
});
*/
// document.addEventListener("DOMContentLoaded", function() {
//     const scrollRight = document.getElementById(".recent_right_handle");
//     const productListContainer = document.querySelector(".recent_news_box");
    
//     scrollRight.addEventListener("click", function() {
//       productListContainer.scrollBy({
//         top: 0, 
//         right: 620, 
//         behavior: 'smooth'
//       });
//     });
//   });

