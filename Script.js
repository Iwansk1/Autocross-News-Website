const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle("open")
  const isOpen = dropDownMenu.classList.contains("open")

  toggleBtnIcon.classList = isOpen
  ? "fa-solid fa-xmark"
  : "fa-solid fa-bars"
}

//Swiper voor 'Head carousel'
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
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
  breakpoints: {
    640: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    }
  }
});

//Swiper voor 'Recent news'
 const swiper2 = new Swiper(".swiper2", {
  spaceBetween: 10,
  slidesPerView: 2,
  speed: 500,
  centeredSlides: false,
  autoheight: true,
  rewind: true,
  enabled: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
      simulateTouch: true,
      enabled: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      simulateTouch: true,
      enabled: true,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
      simulateTouch: false,
      enabled: true,
    }

  }
 });

 //Swiper voor 'Popular news'
 const swiper3 = new Swiper(".swiper3", {
  spaceBetween: 10,
  slidesPerView: 1,
  speed: 500,
  centeredSlides: false,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      simulateTouch: true,

    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      simulateTouch: true,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      simulateTouch: false,
    }

  }
 });

 //Swiper voor 'Events'
 const swiper4 = new Swiper(".swiper4", {
  spaceBetween: 10,
  slidesPerView: 2,
  slidesPerGroup: 2,
  speed: 500,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      simulateTouch: true,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      simulateTouch: true,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 90,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      simulateTouch: false,

    }

  }
 });

 //Swiper voor 'Foto's en Video's"
 const swiper5 = new Swiper(".swiper5", {
  spaceBetween: 50,
  slidesPerView: 1,
  speed: 500,
  simulateTouch: true,
  grabCursor: true,
  centeredSlides: false,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
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

