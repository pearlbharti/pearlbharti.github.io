
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


//logo redirection
document.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('.click');
  if (element) {
    element.addEventListener('click', function() {
      // Your code
    });
  }
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

document.querySelector('.photoframe-about').addEventListener('click', function () {
    window.location.href = 'about.html';
});

 // Tab click behavior
 document.querySelectorAll('#navbar .tab').forEach(tab => {
   tab.addEventListener('click', () => {
     document.querySelector('#navbar .tab.active').classList.remove('active');
     tab.classList.add('active');
   });
 });