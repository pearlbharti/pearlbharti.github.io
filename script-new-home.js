document.querySelectorAll('.compartment').forEach(compartment => {
    const text = document.createElement('div');
    text.classList.add('hover-text');
    text.innerText = compartment.getAttribute('data-hover-text');
    document.body.appendChild(text);
    
    compartment.addEventListener('mouseenter', (e) => {
      const rect = compartment.getBoundingClientRect();
      text.style.left = `${rect.left + rect.width / 2}px`;
      text.style.top = `${rect.top + rect.height + 5}px`;
      text.style.opacity = '1';
    });
    
    compartment.addEventListener('mouseleave', () => {
      text.style.opacity = '0';
    });
  });


  //footer

// Get the footer element
const footer = document.querySelector('.footer');

// Function to check if the footer is in view
function checkFooterInView() {
    const footerPosition = footer.getBoundingClientRect();
    if (footerPosition.top <= window.innerHeight) {
        footer.classList.add('reveal');
    }
}

// Listen for scroll events
window.addEventListener('scroll', checkFooterInView);


//circle and arrow on hover
// Create hover indicator dynamically
const hoverIndicator = document.createElement("div");
hoverIndicator.classList.add("hover-indicator");
hoverIndicator.textContent = "↗"; // Outward arrow
document.body.appendChild(hoverIndicator);

// Function to move the indicator with the mouse
document.addEventListener("mousemove", (e) => {
    hoverIndicator.style.left = `${e.clientX + 20}px`; // Position slightly ahead of cursor
    hoverIndicator.style.top = `${e.clientY + 20}px`;
});

// List of elements that should trigger the hover effect
const hoverElements = document.querySelectorAll(".books-work, .photoframe-about, .block-linkedin, .block-medium, .block-mail");

// Show indicator on hover
hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        document.body.classList.add("hover-active");
    });

    element.addEventListener("mouseleave", () => {
        document.body.classList.remove("hover-active");
    });
});
 

//card redirection
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


document.querySelector('.photoframe-about').addEventListener('click', function() {
    window.location.href = 'about.html';
});
