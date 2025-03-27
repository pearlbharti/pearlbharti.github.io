//button
function viewAffinitymap() {
    window.open("https://www.figma.com/board/Wmec7cYhw2OX5zgUpCUfsb/Schneider-Affinity-Map-brainstorming?node-id=0-1&t=MVUoMDoi65VOKaJC-1", "_blank"); // Replace with your actual Figma link
  }
  

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