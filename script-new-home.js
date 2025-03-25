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

document.querySelector('.photoframe-about').addEventListener('click', function () {
    window.location.href = 'about.html';
});

// Cache the table element and its initial offset
const table = document.querySelector('.table');
const tableInitialOffset = table.offsetTop; // original position relative to document

document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('.table');
    const portfolioIcon = document.querySelector('.portfolio-icon');
    const icons = document.querySelectorAll('.block-linkedin, .block-medium, .block-mail');
    const frames = document.querySelector('.frames');
    const photoframeAbout = document.querySelector('.photoframe-about');
    const iconSlot = document.getElementById('navbar-icon-slot');  // Navbar icon container
    let navbarClone = null;  // This will hold our clone when needed

    // Save original computed style values of the photoframe
    const computed = window.getComputedStyle(photoframeAbout);
    const originalFrameStyles = {
        left: computed.left,
        top: computed.top,
        right: computed.right,
        bottom: computed.bottom,
        position: computed.position,
        width: computed.width,
        height: computed.height
    };
    photoframeAbout.dataset.originalStyles = JSON.stringify(originalFrameStyles);

    // Store initial values
    const tableInitialOffset = table.offsetTop;
    const originalTableHeight = table.offsetHeight;
    const targetNavbarHeight = 100;

    const originalLogoHeight = portfolioIcon.offsetHeight;
    const targetLogoHeight = 70;

    let originalIconHeight = 0;
    icons.forEach(icon => {
        originalIconHeight = icon.offsetHeight;
    });
    const targetIconHeight = 30;

    // Define scroll thresholds (adjust these multipliers as needed)
    const thresholdStart = tableInitialOffset - (window.innerHeight * 0.05);
    const thresholdEnd = tableInitialOffset + (window.innerHeight * 0.01);

    // Immediately set the table as fixed so it’s always out of the document flow.
    table.style.position = 'fixed';
    table.style.left = '0';
    table.style.width = '100%';
    table.style.top = `${tableInitialOffset}px`;

    window.addEventListener('scroll', function () {
        requestAnimationFrame(() => {
            const scrollY = window.pageYOffset;
            let fraction = 0;

            if (scrollY < thresholdStart) {
                fraction = 0;
                table.style.top = `${tableInitialOffset - scrollY}px`;
            } else if (scrollY > thresholdEnd) {
                fraction = 1;
                table.style.top = '0px';
            } else {
                fraction = (scrollY - thresholdStart) / (thresholdEnd - thresholdStart);
                const newTop = (1 - fraction) * (tableInitialOffset - thresholdStart);
                table.style.top = `${newTop}px`;
            }

            // Interpolate table height
            const newTableHeight = originalTableHeight - fraction * (originalTableHeight - targetNavbarHeight);
            table.style.height = newTableHeight + 'px';

            // Interpolate the logo size and reposition it when in navbar mode
            const newLogoHeight = originalLogoHeight - fraction * (originalLogoHeight - targetLogoHeight);
            portfolioIcon.style.height = newLogoHeight + 'px';
            if (fraction > 0) {
                portfolioIcon.style.position = 'fixed';
                portfolioIcon.style.top = '10px';
                portfolioIcon.style.left = '2rem';
            } else {
                portfolioIcon.style.position = '';
                portfolioIcon.style.top = '';
                portfolioIcon.style.left = '';
            }

            // Interpolate icons (excluding photoframe) size
            icons.forEach(icon => {
                const newIconHeight = originalIconHeight - fraction * (originalIconHeight - targetIconHeight);
                icon.style.height = newIconHeight + 'px';
                icon.style.width = 'auto';
            });

            // Fade out the frames as we transition
            if (frames) {
                frames.style.opacity = 1 - fraction;
            }

            // Toggle navbar classes
            const tableTop = document.querySelector('.table-top');
            if (fraction > 0) {
                table.classList.add('fixed-navbar');
                tableTop.classList.add('navbar-style');
            } else {
                table.classList.remove('fixed-navbar');
                tableTop.classList.remove('navbar-style');
            }

            // ----- NEW CLONE-BASED PHOTOFRAME TOGGLING -----
            // Change condition from fraction > 0.95 to fraction > 0 so that
            // the clone appears immediately when the navbar is active.
            if (fraction > 0) {
                if (!navbarClone) {
                    // Create a clone of photoframeAbout
                    navbarClone = photoframeAbout.cloneNode(true);
                    // In the clone, hide the image and hover-dialog
                    const cloneImg = navbarClone.querySelector('img');
                    const cloneHover = navbarClone.querySelector('.hover-dialog');
                    if (cloneImg) { cloneImg.style.display = 'none'; }
                    if (cloneHover) { cloneHover.style.display = 'none'; }
                    // Add the "About" text if not already present
                    if (!navbarClone.querySelector('.photoframe-text')) {
                        const textSpan = document.createElement('span');
                        textSpan.className = 'photoframe-text';
                        textSpan.textContent = 'About';
                        textSpan.style.fontFamily = "'Permanent Marker', cursive";
                        textSpan.style.fontSize = "1.5rem";
                        textSpan.style.color = "white";
                        textSpan.style.position = "absolute";
                        textSpan.style.top = "50%";
                        textSpan.style.left = "50%";
                        textSpan.style.transform = "translate(-50%, -50%)";
                        navbarClone.appendChild(textSpan);
                    }
                    // Insert the clone into the navbar icon container
                    iconSlot.insertBefore(navbarClone, iconSlot.firstChild);
                    // Immediately hide the original photoframe
                    photoframeAbout.style.display = 'none';
                }
            } else {
                if (navbarClone) {
                    navbarClone.remove();
                    navbarClone = null;
                    photoframeAbout.style.display = '';
                    // Restore original inline styles (if needed)
                    const originalFrameStyles = JSON.parse(photoframeAbout.dataset.originalStyles);
                    photoframeAbout.style.left = originalFrameStyles.left;
                    photoframeAbout.style.top = originalFrameStyles.top;
                    photoframeAbout.style.right = originalFrameStyles.right;
                    photoframeAbout.style.bottom = originalFrameStyles.bottom;
                    photoframeAbout.style.position = originalFrameStyles.position;
                    photoframeAbout.style.width = originalFrameStyles.width;
                    photoframeAbout.style.height = originalFrameStyles.height;
                }
            }
            // ----- END CLONE-BASED TOGGLING -----
        });
    });
});
