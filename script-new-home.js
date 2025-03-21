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
    const icons = document.querySelectorAll('.photoframe-about, .block-linkedin, .block-medium, .block-mail');
    const frames = document.querySelector('.frames');

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
    const thresholdStart = tableInitialOffset - (window.innerHeight * 0.2);
    const thresholdEnd = tableInitialOffset + (window.innerHeight * 0.01);

    // Immediately set the table as fixed so it’s always out of the document flow.
    table.style.position = 'fixed';
    table.style.left = '0';
    table.style.width = '100%';
    // Initially, when scrollY is 0, the table’s top is at its original offset.
    table.style.top = `${tableInitialOffset}px`;


    window.addEventListener('scroll', function () {
        requestAnimationFrame(() => {


            const scrollY = window.pageYOffset;
            let fraction = 0;

            if (scrollY < thresholdStart) {
                // Before the transition begins, smoothly slide the table up
                fraction = 0;
                table.style.top = `${tableInitialOffset - scrollY}px`;
            } else if (scrollY > thresholdEnd) {
                // After the transition completes, ensure the table is flush at the top
                fraction = 1;
                table.style.top = '0px';
            } else {
                // In between, compute a fraction (0 to 1)
                fraction = (scrollY - thresholdStart) / (thresholdEnd - thresholdStart);
                // Interpolate top value: from (tableInitialOffset - thresholdStart) down to 0
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

            // Interpolate icons (including photoframe) size
            icons.forEach(icon => {
                const newIconHeight = originalIconHeight - fraction * (originalIconHeight - targetIconHeight);
                icon.style.height = newIconHeight + 'px';
                icon.style.width = 'auto';
            });

            // Fade out the frames as we transition

            const logoWrapper = document.getElementById('floating-logo-wrapper');
            const frameWrapper = document.getElementById('floating-frame-wrapper');

            const logoSlot = document.getElementById('navbar-left-slot');
            const iconSlot = document.getElementById('navbar-icon-slot');
            const homeContainer = document.querySelector('.home-container');

            if (fraction > 0.95) {
                // Move logo and photoframe into navbar
                if (!logoSlot.contains(logoWrapper)) {
                    logoSlot.appendChild(logoWrapper);
                }
                if (!iconSlot.contains(frameWrapper)) {
                    iconSlot.insertBefore(frameWrapper, iconSlot.firstChild);
                }
            } else {
                // Move them back to original floating positions
                if (!homeContainer.contains(logoWrapper)) {
                    homeContainer.insertBefore(logoWrapper, homeContainer.firstChild);
                }
                if (!homeContainer.contains(frameWrapper)) {
                    homeContainer.insertBefore(frameWrapper, homeContainer.firstChild.nextSibling);
                }
            }

            if (frames) {
                frames.style.opacity = 1 - fraction;
            }

            // Optional: When in navbar mode, update the photoframe so it doesn’t overflow.
            // For example, if your CSS has rules for .table.fixed-navbar .photoframe-about,
            // you could toggle that class here:
            if (fraction > 0) {
                table.classList.add('fixed-navbar');
            } else {
                table.classList.remove('fixed-navbar');
            }
            const tableTop = document.querySelector('.table-top');

            if (fraction > 0) {
                tableTop.classList.add('navbar-style');
            } else {
                tableTop.classList.remove('navbar-style');
            }
        });
    });
});
