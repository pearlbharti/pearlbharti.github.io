// document.querySelectorAll('.compartment').forEach(compartment => {
//     const text = document.createElement('div');
//     text.classList.add('hover-text');
//     text.innerText = compartment.getAttribute('data-hover-text');
//     document.body.appendChild(text);

//     compartment.addEventListener('mouseenter', (e) => {
//         const rect = compartment.getBoundingClientRect();
//         text.style.left = `${rect.left + rect.width / 2}px`;
//         text.style.top = `${rect.top + rect.height + 5}px`;
//         text.style.opacity = '1';
//     });

//     compartment.addEventListener('mouseleave', () => {
//         text.style.opacity = '0';
//     });
// });


// //progress line fill
// document.addEventListener('DOMContentLoaded', () => {
//   const intro   = document.querySelector('.intro-section');
//   const caseSec = document.getElementById('case-studies');
//   const track   = document.querySelector('.progress-line');
//   const fill    = track.querySelector('.progress-line__fill');

//   // compute boundaries
//   const introBottom = () => intro.offsetTop + intro.offsetHeight;
//   const caseTop     = () => caseSec.offsetTop;

//   function onScroll() {
//     const y = window.scrollY;

//     // Show only between intro end and case-studies start
//     if (y >= introBottom() && y <= caseTop()) {
//       track.style.display = 'block';

//       // how far through the interval:
//       const interval   = caseTop() - introBottom();
//       const progressPx = y - introBottom();
//       const pct        = Math.min(Math.max(progressPx / interval, 0), 1);

//       fill.style.height = `${pct * 100}%`;
//     } else {
//       track.style.display = 'none';
//       fill.style.height  = '0';
//     }
//   }

//   window.addEventListener('scroll', onScroll);
//   window.addEventListener('resize', onScroll);
//   onScroll();
// });

//navbar bg 
const header = document.querySelector('header');
const section = document.getElementById('case-studies');
const sectionTop = section.offsetTop;
const sectionBottom = sectionTop + section.offsetHeight;

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + header.offsetHeight;
  if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
//card scroll animation
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project-container');
  // thresholds for smooth progress
  const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio; // 0 to 1
      // scale from 0.7 to 1
      const scale = 0.7 + ratio * 0.3;
      // apply scale and opacity
      entry.target.style.transform = `scale(${scale})`;
      entry.target.style.opacity = ratio;
    });
  }, { threshold: thresholds });

  projects.forEach(proj => observer.observe(proj));
});

//Home-container
function updateTime() {
  const now = new Date();
  const options = { timeZone: 'America/Chicago', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const timeStr = now.toLocaleTimeString('en-US', options);
  document.getElementById("location-time").innerHTML = "Madison, WI<br>" + timeStr;
}

updateTime();
setInterval(updateTime, 1000);

const taglines = [
  "Chat with the weird little bot I built- fun, smart, and odd.",
  "Pixel-perfectionist and AI fanatic",
  "I've made a sub-300 calorie version of everything.",
  // "Hover over my logo, there's a surprise!",
  "I have fostered and owned 18+ cats!"
];

let taglineIndex = 0;
const taglineEl = document.getElementById("tagline");

function decodeText(oldText, newText) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/~`";
  const maxLength = Math.max(oldText.length, newText.length);
  let queue = [];

  for (let i = 0; i < maxLength; i++) {
    const from = oldText[i] || " ";
    const to = newText[i] || " ";
    const start = Math.floor(Math.random() * 20);
    const end = start + Math.floor(Math.random() * 20);
    queue.push({ from, to, start, end, char: from });
  }

  let frame = 0;
  const interval = setInterval(() => {
    let output = "";
    let complete = 0;
    for (let i = 0; i < queue.length; i++) {
      let { from, to, start, end } = queue[i];
      if (frame >= end) {
        output += to;
        complete++;
      } else if (frame >= start) {
        output += chars[Math.floor(Math.random() * chars.length)];
      } else {
        output += from;
      }
    }
    taglineEl.textContent = output;
    if (complete === queue.length) clearInterval(interval);
    frame++;
  }, 30);
}

setInterval(() => {
  taglineIndex = (taglineIndex + 1) % taglines.length;
  decodeText(taglineEl.textContent, taglines[taglineIndex]);
}, 3500);

//bg gradient change
const overlay = document.querySelector('.bg-overlay');
    const sections = document.querySelectorAll('section');

    const gradients = {
      "bg-one": `
        radial-gradient(circle at 20% 30%,rgba(255, 106, 0, 0.39) 0%, transparent 40%),
        radial-gradient(circle at 80% 40%,rgba(197, 89, 42, 0.63) 0%, transparent 40%),
        radial-gradient(circle at 50% 80%,rgba(91, 90, 89, 0.39) 0%, transparent 30%)`,
      "bg-two": `
        radial-gradient(circle at 10% 20%, #B7010180 0%, transparent 40%),
        radial-gradient(circle at 80% 30%,rgba(162, 91, 91, 0.5) 0%, transparent 50%),
        radial-gradient(circle at 50% 90%,rgba(236, 236, 236, 0.35) 0%, transparent 40%)`,
      "bg-three": `
        radial-gradient(circle at 15% 25%,rgba(139, 149, 113, 0.81) 0%, transparent 60%),
        radial-gradient(circle at 75% 35%,rgba(254, 247, 231, 0.48) 0%, transparent 50%),
        radial-gradient(circle at 55% 85%,rgba(247, 194, 188, 0.52) 0%, transparent 60%)`,
      "bg-four": `
        radial-gradient(circle at 30% 40%,rgba(161, 140, 209, 0.69) 0%, transparent 50%),
        radial-gradient(circle at 70% 50%,rgba(251, 194, 235, 0.47) 0%, transparent 50%),
        radial-gradient(circle at 50% 70%,rgba(250, 208, 196, 0.5) 0%, transparent 60%)`,
      "bg-five": `
        radial-gradient(circle at 25% 35%,rgba(255, 178, 71, 0.42) 0%, transparent 50%),
        radial-gradient(circle at 65% 50%,rgba(14, 94, 42, 0.79) 0%, transparent 60%),
        radial-gradient(circle at 45% 75%,rgba(255, 226, 159, 0.47) 0%, transparent 40%)`,
      "bg-six": `
        radial-gradient(circle at 20% 30%,rgba(67, 233, 122, 0.5) 0%, transparent 40%),
        radial-gradient(circle at 50% 80%, #88B4D180 0%, transparent 40%),
        radial-gradient(circle at 80% 40%, #1DB95480 0%, transparent 60%)`
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgKey = entry.target.dataset.bg;
            if (bgKey && gradients[bgKey]) {
              overlay.style.background = gradients[bgKey];
            } else {
              overlay.style.background = 'none';
            }
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach((section) => observer.observe(section));

// //mobile screen nabar
// const btn    = document.querySelector('.hamburger');
// const drawer = document.querySelector('.mobile-nav');
// btn.addEventListener('click', () => {
//   drawer.classList.toggle('open');
// });

//bg height
function resizeNoiseBG() {
    const noise = document.querySelector('.noise-bg');
    if (noise) {
      noise.style.height = `${document.documentElement.scrollHeight}px`;
    }
  }
  
  window.addEventListener('load', resizeNoiseBG);
  window.addEventListener('resize', resizeNoiseBG);
  window.addEventListener('scroll', resizeNoiseBG);
  


//logo hover text area
const brandIcons = document.querySelectorAll('.brand-icon');

brandIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    brandIcons.forEach(i => i.classList.remove('active'));
    icon.classList.add('active');
  });
});

// Optional: Remove all active states when mouse leaves the logo row
const logoRow = document.querySelector('.logo-row');
logoRow.addEventListener('mouseleave', () => {
  brandIcons.forEach(i => i.classList.remove('active'));
});
//stars
// const starsContainer = document.querySelector('.stars');
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight * 0.4; // top 20% center
//     const radius = 200; // circle radius in pixels

//     for (let i = 0; i < 70; i++) {
//       const angle = Math.random() * 2 * Math.PI;
//       const r = Math.sqrt(Math.random()) * radius;
//       const x = centerX + r * Math.cos(angle);
//       const y = centerY + r * Math.sin(angle);

//       const star = document.createElement('div');
//       star.className = 'star';
//       star.style.left = `${x}px`;
//       star.style.top = `${y}px`;
//       const edgeFade = 1 - r / radius; // closer to 0 = closer to edge
//       star.style.opacity = (edgeFade * 0.6 + 0.2).toFixed(2); // stronger base opacity
//       star.style.animationDelay = `${Math.random() * 10}s`;
//       starsContainer.appendChild(star);
//     }
//glow beam
// const angles = [-60, -53, -46, -39, -32, -25, -18, -11, -4, 3, 10, 17, 24, 31, 38, 45, 52, 59];
//     const widths = [60, 30, 45, 40, 55, 25, 60, 35, 70, 40, 55, 30, 50, 20, 45, 35, 60, 30];
//     const opacities = [0.1, 0.15, 0.2, 0.18, 0.25, 0.22, 0.3, 0.18, 0.35, 0.2, 0.28, 0.15, 0.25, 0.12, 0.2, 0.18, 0.22, 0.2];

//     const wrapper = document.getElementById('beamWrapper');

//     angles.forEach((angle, index) => {
//       const beam = document.createElement('div');
//       beam.className = 'light-beam';
//       beam.style.transform = `rotate(${angle}deg)`;
//       beam.style.width = `${widths[index] * 1.4}px`;
//       beam.style.opacity = `${opacities[index]}`;
//       beam.style.left = `${(1 - index / (angles.length - 1)) * 100}%`;

//       wrapper.appendChild(beam);
//     });
// footer
const footer = document.querySelector('.footer');
function checkFooterInView() {
    const footerPosition = footer.getBoundingClientRect();
    if (footerPosition.top <= window.innerHeight) {
        footer.classList.add('reveal');
    }
}
window.addEventListener('scroll', checkFooterInView);

// Hover indicator (circle + arrow)
const hoverIndicator = document.createElement("div");
hoverIndicator.classList.add("hover-indicator");
hoverIndicator.textContent = "↗";
document.body.appendChild(hoverIndicator);
document.addEventListener("mousemove", (e) => {
    hoverIndicator.style.left = `${e.clientX + 20}px`;
    hoverIndicator.style.top = `${e.clientY + 20}px`;
});

// Hover effects on certain elements
// const hoverElements = document.querySelectorAll(".books-work, .photoframe-about, .block-linkedin, .block-medium, .block-mail");
// hoverElements.forEach((element) => {
//     element.addEventListener("mouseenter", () => {
//         document.body.classList.add("hover-active");
//     });
//     element.addEventListener("mouseleave", () => {
//         document.body.classList.remove("hover-active");
//     });
// });

// Card redirection
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project-container").forEach((card) => {
        card.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });
});

// document.querySelector('.photoframe-about').addEventListener('click', function () {
//     window.location.href = 'about.html';
// });

// Cache the table element and its initial offset
// const table = document.querySelector('.table');
// const tableInitialOffset = table.offsetTop;

// document.addEventListener('DOMContentLoaded', function () {
//     const table = document.querySelector('.table');
//     const portfolioIcon = document.querySelector('.portfolio-icon');
//     const icons = document.querySelectorAll('.block-linkedin, .block-medium, .block-mail');
//     const frames = document.querySelector('.frames');
//     const photoframeAbout = document.querySelector('.photoframe-about');
//     const booksWork = document.querySelector('.books-work');
//     const iconSlot = document.getElementById('navbar-icon-slot');  // Navbar icon container

//     // Save original computed style values for later (if needed)
//     const computedAbout = window.getComputedStyle(photoframeAbout);
//     const originalFrameStyles = {
//         left: computedAbout.left,
//         top: computedAbout.top,
//         right: computedAbout.right,
//         bottom: computedAbout.bottom,
//         position: computedAbout.position,
//         width: computedAbout.width,
//         height: computedAbout.height
//     };
//     photoframeAbout.dataset.originalStyles = JSON.stringify(originalFrameStyles);

//     const computedBooks = window.getComputedStyle(booksWork);
//     const originalBooksStyles = {
//         left: computedBooks.left,
//         top: computedBooks.top,
//         right: computedBooks.right,
//         bottom: computedBooks.bottom,
//         position: computedBooks.position,
//         width: computedBooks.width,
//         height: computedBooks.height
//     };
//     booksWork.dataset.originalStyles = JSON.stringify(originalBooksStyles);

//     // Store initial values for table and logo
//     const tableInitialOffset = table.offsetTop;
//     const originalTableHeight = table.offsetHeight;
//     const targetNavbarHeight = 100;
//     const originalLogoHeight = portfolioIcon.offsetHeight;
//     const targetLogoHeight = 70;
//     let originalIconHeight = 0;
//     icons.forEach(icon => {
//         originalIconHeight = icon.offsetHeight;
//     });
//     const targetIconHeight = 30;

//     // Define scroll thresholds
//     const thresholdStart = tableInitialOffset - (window.innerHeight * 0.05);
//     const thresholdEnd = tableInitialOffset + (window.innerHeight * 0.01);

//     // Set table as fixed initially
//     table.style.position = 'fixed';
//     table.style.left = '0';
//     table.style.width = '100%';
//     table.style.top = `${tableInitialOffset}px`;

//     // We'll use clones for the navbar version.
//     let navbarCloneAbout = null;
//     let navbarCloneBooks = null;

//     window.addEventListener('scroll', function () {
//         requestAnimationFrame(() => {
//             const scrollY = window.pageYOffset;
//             let fraction = 0;
//             if (scrollY < thresholdStart) {
//                 fraction = 0;
//                 table.style.top = `${tableInitialOffset - scrollY}px`;
//             } else if (scrollY > thresholdEnd) {
//                 fraction = 1;
//                 table.style.top = '0px';
//             } else {
//                 fraction = (scrollY - thresholdStart) / (thresholdEnd - thresholdStart);
//                 const newTop = (1 - fraction) * (tableInitialOffset - thresholdStart);
//                 table.style.top = `${newTop}px`;
//             }

//             // Interpolate table height
//             const newTableHeight = originalTableHeight - fraction * (originalTableHeight - targetNavbarHeight);
//             table.style.height = newTableHeight + 'px';

//             // Interpolate logo size and reposition when in navbar mode
//             const newLogoHeight = originalLogoHeight - fraction * (originalLogoHeight - targetLogoHeight);
//             portfolioIcon.style.height = newLogoHeight + 'px';
//             if (fraction > 0) {
//                 portfolioIcon.style.position = 'fixed';
//                 portfolioIcon.style.top = '-2px';
//                 portfolioIcon.style.left = '2rem';
//                 portfolioIcon.style.zIndex = '3'
//             } else {
//                 portfolioIcon.style.position = '';
//                 portfolioIcon.style.top = '';
//                 portfolioIcon.style.left = '';
//             }

//             // Interpolate other icons (excluding photoframe and booksWork)
//             icons.forEach(icon => {
//                 const newIconHeight = originalIconHeight - fraction * (originalIconHeight - targetIconHeight);
//                 icon.style.height = newIconHeight + 'px';
//                 icon.style.width = 'auto';
//             });

//             // Fade out frames as we transition
//             if (frames) {
//                 frames.style.opacity = 1 - fraction;
//             }

//             // Toggle navbar classes
//             const tableTop = document.querySelector('.table-top');
//             if (fraction > 0) {
//                 table.classList.add('fixed-navbar');
//                 tableTop.classList.add('navbar-style');
//             } else {
//                 table.classList.remove('fixed-navbar');
//                 tableTop.classList.remove('navbar-style');
//             }

//             // ----- CLONE-BASED TOGGLING FOR NAVBAR -----
//             if (fraction > 0) {
//                 // Create and insert clones into the navbar icon container if they don't exist.
//                 if (!navbarCloneAbout) {
//                     navbarCloneAbout = photoframeAbout.cloneNode(true);
//                     // In the clone, hide the image and hover-dialog, and add "About" text.
//                     const cloneImg = navbarCloneAbout.querySelector('img');
//                     const cloneHover = navbarCloneAbout.querySelector('.hover-dialog');
//                     if (cloneImg) { cloneImg.style.display = 'none'; }
//                     if (cloneHover) { cloneHover.style.display = 'none'; }
//                     if (!navbarCloneAbout.querySelector('.photoframe-text')) {
//                         const textSpan = document.createElement('span');
//                         textSpan.className = 'photoframe-text';
//                         textSpan.textContent = 'About';
//                         textSpan.style.fontFamily = "'Permanent Marker', cursive";
//                         textSpan.style.fontSize = "1.5rem";
//                         textSpan.style.color = "white";
//                         textSpan.style.position = "absolute";
//                         textSpan.style.top = "50%";
//                         textSpan.style.left = "50%";
//                         textSpan.style.transform = "translate(-50%, -50%)";
//                         navbarCloneAbout.appendChild(textSpan);
//                     }
//                     iconSlot.insertBefore(navbarCloneAbout, iconSlot.firstChild);
//                     // Do NOT alter the original's display so it remains in its floating frame wrapper.
//                 }
//                 if (!navbarCloneBooks) {
//                     navbarCloneBooks = booksWork.cloneNode(true);
//                     const cloneImgBooks = navbarCloneBooks.querySelector('img');
//                     const cloneHoverBooks = navbarCloneBooks.querySelector('.hover-dialog');
//                     if (cloneImgBooks) { cloneImgBooks.style.display = 'none'; }
//                     if (cloneHoverBooks) { cloneHoverBooks.style.display = 'none'; }
//                     if (!navbarCloneBooks.querySelector('.books-text')) {
//                         const textSpan = document.createElement('span');
//                         textSpan.className = 'books-text';
//                         textSpan.textContent = 'Work';
//                         textSpan.style.fontFamily = "'Permanent Marker', cursive";
//                         textSpan.style.fontSize = "1.5rem";
//                         textSpan.style.color = "white";
//                         textSpan.style.position = "absolute";
//                         textSpan.style.top = "50%";
//                         textSpan.style.left = "50%";
//                         textSpan.style.transform = "translate(-50%, -50%)";
//                         navbarCloneBooks.appendChild(textSpan);
//                     }
//                     // Insert the books clone immediately after the about clone
//                     if (navbarCloneAbout) {
//                         iconSlot.insertBefore(navbarCloneBooks, navbarCloneAbout.nextSibling);
//                     } else {
//                         iconSlot.insertBefore(navbarCloneBooks, iconSlot.firstChild);
//                     }
//                 }
//             } else {
//                 // When scrolling back (fraction == 0), remove clones.
//                 if (navbarCloneAbout) {
//                     navbarCloneAbout.remove();
//                     navbarCloneAbout = null;
//                 }
//                 if (navbarCloneBooks) {
//                     navbarCloneBooks.remove();
//                     navbarCloneBooks = null;
//                 }
//             }
//             // ----- END CLONE-BASED TOGGLING -----
//         });
//     });
// });

// document.querySelector('.books').addEventListener('click', function() {
//     this.classList.toggle('active');
//   });


// window.addEventListener('scroll', function () {
//     const tableTop = document.querySelector('.table-top');
//     const photoframe = document.querySelector('.photoframe-about');
//     const books = document.querySelector('.books-work');

//     const shrinkThreshold = 350;
//     const maxShrinkScroll = 550;

//     if (window.pageYOffset > shrinkThreshold) {
//         let fraction = Math.min((window.pageYOffset - shrinkThreshold) / (maxShrinkScroll - shrinkThreshold), 1);
//         let initialWidth = 70;
//         let minWidth = 50;
//         let newWidth = initialWidth - (initialWidth - minWidth) * fraction;
//         tableTop.style.width = newWidth + "%";
//     } else {
//         tableTop.style.width = "70%";
//     }

//     const navbar = document.getElementById('navbar');
//     const navbarThreshold = 600;
//     if (window.pageYOffset > navbarThreshold) {
//         navbar.classList.add('visible');
//     } else {
//         navbar.classList.remove('visible');
//     }

//     const fadeThreshold = 800;
//     const fadeOut = window.pageYOffset > fadeThreshold;

//     const photoframeThreshold = 300;
//     const photoframeFadeOut = window.pageYOffset > photoframeThreshold;
//     if (tableTop) {
//         tableTop.style.opacity = fadeOut ? '0' : '1';
//         tableTop.style.pointerEvents = fadeOut ? 'none' : 'auto';
//     }
//     if (photoframe) {
//         photoframe.style.opacity = fadeOut ? '0' : '1';
//         photoframe.style.pointerEvents = fadeOut ? 'none' : 'auto';
//     }
//     if (books) {
//         books.style.opacity = fadeOut ? '0' : '1';
//         books.style.pointerEvents = fadeOut ? 'none' : 'auto';
//     }
// });

 // Tab click behavior
//  const navbar = document.getElementById('navbar');
//  const homeSection = document.querySelector('.home-container');
//  window.addEventListener('scroll', () => {
//    if (window.scrollY > homeSection.offsetHeight) {
//      navbar.classList.add('visible');
//    } else {
//      navbar.classList.remove('visible');
//    }
//  });

 // Tab click behavior
 document.querySelectorAll('#navbar .tab').forEach(tab => {
   tab.addEventListener('click', () => {
     document.querySelector('#navbar .tab.active').classList.remove('active');
     tab.classList.add('active');
   });
 });