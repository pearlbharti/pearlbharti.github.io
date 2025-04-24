//button
function viewAffinitymap() {
    window.open("https://www.figma.com/board/Wmec7cYhw2OX5zgUpCUfsb/Schneider-Affinity-Map-brainstorming?node-id=0-1&t=MVUoMDoi65VOKaJC-1", "_blank"); // Replace with your actual Figma link
  }

  const nav = document.getElementById('progress-nav-container');
  const dropdown = document.getElementById('progress-dropdown-menu');
  const toggle = document.getElementById('progress-toggle-button');
  const label = document.getElementById('progress-label-text');
  const number = document.getElementById('progress-number');
  const progressRing = document.querySelector('.progress-circle .fg');
  
  const labelMap = {
    "Overview": ["overview-1", "overview-2"],
    "Objectives and Scope": ["objectives-1", "objectives-2", "objectives-3"],
    "Research": ["research-1", "research-2", "research-3"],
    "Synthesis": ["synthesis-1", "synthesis-2", "synthesis-3", "synthesis-4", "synthesis-5"],
    "Recommendations": ["recommendation-1", "recommendation-2"],
    "Reflection": ["reflection-1"]
  };
  
  const labelList = Object.entries(labelMap).map(([label, ids]) => {
    return [label, ids.map(id => document.getElementById(id))];
  });
  
  const circumference = 2 * Math.PI * 13;
  progressRing.style.strokeDasharray = circumference;
  progressRing.style.strokeDashoffset = circumference;
  
  window.addEventListener('scroll', () => {
    const heroBottom = document.getElementById('hero-section')?.getBoundingClientRect().bottom;
    const lastSection = document.getElementById('reflection-1');
    const lastBottom = lastSection?.getBoundingClientRect().bottom;
  
    // Show after hero is out of view
    if (heroBottom !== undefined) {
      nav.classList.toggle('hidden', heroBottom > 0);
    }
  
    // Hide after reflection section ends
    if (lastBottom !== undefined && lastBottom < window.innerHeight * 0.25) {
      nav.classList.add('hidden');
    } else if (lastBottom !== undefined && lastBottom >= window.innerHeight * 0.25 && heroBottom <= 0) {
      nav.classList.remove('hidden');
    }
  
    labelList.forEach(([labelKey, sections], index) => {
      const first = sections[0].getBoundingClientRect();
      const last = sections[sections.length - 1].getBoundingClientRect();
      const top = first.top;
      const bottom = last.bottom;
      const totalHeight = bottom - top;
  
      if (top < window.innerHeight * 0.75 && bottom > window.innerHeight * 0.25) {
        const midpoint = window.innerHeight / 2;
        const distance = midpoint - top;
        const progress = Math.min(1, Math.max(0, distance / totalHeight));
        progressRing.style.strokeDashoffset = circumference * (1 - progress);
        number.textContent = index + 1;
        label.textContent = labelKey;
      }
    });
  });
  
  toggle.addEventListener('click', () => {
    dropdown.classList.toggle('show');
    toggle.classList.toggle('open');
  });
  
  dropdown.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      const firstId = labelMap[item.dataset.label]?.[0];
      if (firstId) {
        document.getElementById(firstId).scrollIntoView({ behavior: 'smooth' });
      }
      dropdown.classList.remove('show');
      toggle.classList.remove('open');
    });
  });

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