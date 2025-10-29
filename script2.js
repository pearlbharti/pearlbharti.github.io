//button
function viewAffinitymap() {
    window.open("https://www.figma.com/board/Wmec7cYhw2OX5zgUpCUfsb/Schneider-Affinity-Map-brainstorming?node-id=0-1&t=MVUoMDoi65VOKaJC-1", "_blank"); // Replace with your actual Figma link
  }



//slideshow schneider
const images = document.querySelectorAll(".fade-image");
let activeIndex = 0;

setInterval(() => {
  images[activeIndex].classList.remove("active");
  activeIndex = (activeIndex + 1) % images.length;
  images[activeIndex].classList.add("active");
}, 5000); // 2s fade-out + 5s visible for each image


//challenge carousel schneider
const track = document.getElementById('lumaTrack');
    const bubbles = document.querySelectorAll('.luma-bubble');
    const slides = document.querySelectorAll('.luma-slide');
    const prev = document.getElementById('prevArr');
    const next = document.getElementById('nextArr');
    let current = 0;

    function updateCarousel(index) {
      const slideWidth = slides[0].clientWidth;
      track.style.transform = `translateX(-${index * slideWidth}px)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');

      // Arrow visual states
      prev.classList.toggle('inactive', index === 0);
      next.classList.toggle('inactive', index === slides.length - 1);
    }

    function goToSlide(index) {
      current = (index + slides.length) % slides.length;
      updateCarousel(current);
    }

    next.addEventListener('click', () => {
      if (current < slides.length - 1) goToSlide(current + 1);
    });

    prev.addEventListener('click', () => {
      if (current > 0) goToSlide(current - 1);
    });

    updateCarousel(current);

    window.addEventListener('resize', () => updateCarousel(current));


 //spotify competitor toggle
 function switchPanel(evt, targetId) {
    const allTabs = document.querySelectorAll('.platform-tab-button');
    const allPanels = document.querySelectorAll('.platform-panel-section');

    allTabs.forEach(tab => tab.classList.remove('is-tab-active'));
    allPanels.forEach(panel => panel.classList.remove('is-panel-active'));

    evt.currentTarget.classList.add('is-tab-active');
    document.getElementById(targetId).classList.add('is-panel-active');
  } 


//dropdown menu
document.querySelector('.books').addEventListener('click', function() {
    this.classList.toggle('active');
  });


document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the navbar
        navbar.style.top = "-80px"; // Adjust this based on the navbar height
      } else {
        // Scrolling up, show the navbar
        navbar.style.top = "20px"; // Reset navbar position
      }
  
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
    });
});
  


//statement carousel 
let textIndex = 0;
        const textItems = document.querySelectorAll('.text-carousel-item');
        const textDotsContainer = document.querySelector('.text-dots');

        function textShowSlide(n) {
            textItems.forEach((item, i) => {
                item.classList.toggle('text-active', i === n);
            });
            textUpdateDots(n);
        }
        
        function textPrevSlide() {
            textIndex = (textIndex > 0) ? textIndex - 1 : textItems.length - 1;
            textShowSlide(textIndex);
        }
        
        function textNextSlide() {
            textIndex = (textIndex < textItems.length - 1) ? textIndex + 1 : 0;
            textShowSlide(textIndex);
        }
        
        function textUpdateDots(n) {
            document.querySelectorAll('.text-dot').forEach((dot, i) => {
                dot.classList.toggle('text-active', i === n);
            });
        }

        textItems.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('text-dot');
            dot.addEventListener('click', () => {
                textIndex = i;
                textShowSlide(textIndex);
            });
            textDotsContainer.appendChild(dot);
        });
        
        textShowSlide(textIndex);
        
        // Auto change slides every 3 seconds
        setInterval(() => {
            textNextSlide();
        }, 3000);



//text-carousel-user
document.addEventListener('DOMContentLoaded', () => {
    let textIndex = 0;
    const textItems = document.querySelectorAll('.text-carousel-item-user');
    const textDotsContainer = document.querySelector('.text-dots-user');
    let autoSlideInterval;

    // Create dot indicators
    textItems.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('text-dot-user');
        dot.addEventListener('click', () => {
            showSlide(i);
        });
        textDotsContainer.appendChild(dot);
    });

    function showSlide(index) {
        textItems.forEach((item, i) => {
            item.classList.toggle('text-active-user', i === index);
        });

        const dots = document.querySelectorAll('.text-dot-user');
        dots.forEach((dot, i) => {
            dot.classList.toggle('text-active-user', i === index);
        });

        textIndex = index;
    }

    function prevSlide() {
        const newIndex = (textIndex - 1 + textItems.length) % textItems.length;
        showSlide(newIndex);
    }

    function nextSlide() {
        const newIndex = (textIndex + 1) % textItems.length;
        showSlide(newIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Pause auto-scroll on hover
    const carousel = document.querySelector('.text-carousel-user');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }

    // Initial setup
    showSlide(textIndex);
    startAutoSlide();

    // Make functions accessible to inline onclick attributes
    window.textPrevSlide = prevSlide;
    window.textNextSlide = nextSlide;
});


//final mockup hover
document.querySelectorAll('.video-item').forEach(video => {
    video.addEventListener('mouseenter', () => {
        console.log("Hover detected on video.");
        video.muted = true;
        video.play().catch(error => console.log("Autoplay failed:", error));
    });

    video.addEventListener('mouseleave', () => {
        console.log("Mouse left video.");
        video.pause();
        video.currentTime = 0;
    });
});

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


let currentSlide = 0;

function moveSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-image');
  const totalSlides = slides.length;

  // Update current slide index
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Move the carousel
  const offset = -currentSlide * 100; // Move to the respective slide
  carousel.style.transform = `translateX(${offset}%)`;
}

// Automatic sliding (optional)
setInterval(() => {
  moveSlide(1);
}, 3000); // Change image every 3 seconds


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -  150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
     reset: true,
     distance:'80px',
     duration: 2000,
     delay:200
    
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['UX Researcher', 'UX Designer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

(function (){
    console.log("Document is ready fedferferggre");
  })()