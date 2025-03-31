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
const hoverElements = document.querySelectorAll(".books-work, .photoframe-about, .block-linkedin, .block-medium, .block-mail");
hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        document.body.classList.add("hover-active");
    });
    element.addEventListener("mouseleave", () => {
        document.body.classList.remove("hover-active");
    });
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

window.addEventListener('scroll', function () {
    const tableTop = document.querySelector('.table-top');
    const photoframe = document.querySelector('.photoframe-about');
    const books = document.querySelector('.books-work');

    const shrinkThreshold = 420;
    const maxShrinkScroll = 490;

    if (window.pageYOffset > shrinkThreshold) {
        let fraction = Math.min((window.pageYOffset - shrinkThreshold) / (maxShrinkScroll - shrinkThreshold), 1);
        let initialWidth = 70;
        let minWidth = 50;
        let newWidth = initialWidth - (initialWidth - minWidth) * fraction;
        tableTop.style.width = newWidth + "%";
    } else {
        tableTop.style.width = "70%";
    }

    const navbar = document.getElementById('navbar');
    const navbarThreshold = 500;
    if (window.pageYOffset > navbarThreshold) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }

    const fadeThreshold = 650;
    const fadeOut = window.pageYOffset > fadeThreshold;

    const photoframeThreshold = 300;
    const photoframeFadeOut = window.pageYOffset > photoframeThreshold;
    if (tableTop) {
        tableTop.style.opacity = fadeOut ? '0' : '1';
        tableTop.style.pointerEvents = fadeOut ? 'none' : 'auto';
    }
    if (photoframe) {
        photoframe.style.opacity = fadeOut ? '0' : '1';
        photoframe.style.pointerEvents = fadeOut ? 'none' : 'auto';
    }
    if (books) {
        books.style.opacity = fadeOut ? '0' : '1';
        books.style.pointerEvents = fadeOut ? 'none' : 'auto';
    }
});

