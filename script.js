//project card tilt
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 18;
            const rotateY = (x - centerX) / 18;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            const shadowX = -rotateY * 2;
            const shadowY = rotateX * 2;
            card.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.4), 
                                    ${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.2)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0) rotateY(0)";
            card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.4)";
        });
    });
});
//project redirection
document.querySelectorAll('.project-container').forEach(card => {
    card.addEventListener('click', function() {
        const targetUrl = this.getAttribute('data-url');
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});


//cursor
// const cursor = document.createElement('div');
// cursor.classList.add('custom-cursor');
// cursor.innerHTML = `
//     <!-- Your custom SVG -->
//     <svg width="300" height="300" viewBox="0 0 1172 619" xmlns="http://www.w3.org/2000/svg">
//         <path d="M 437,285 L 437,286 L 438,287 L 438,289 L 439,290 L 439,294 L 440,295 L 440,300 L 441,301 L 441,304 L 442,305 L 442,309 L 443,310 L 443,314 L 444,315 L 444,320 L 445,321 L 445,324 L 446,325 L 446,329 L 447,330 L 447,333 L 448,334 L 448,338 L 449,339 L 449,344 L 450,345 L 450,349 L 451,350 L 451,352 L 452,353 L 452,358 L 453,359 L 453,364 L 454,365 L 454,369 L 455,370 L 455,372 L 456,373 L 456,375 L 456,374 L 457,373 L 457,371 L 459,369 L 459,368 L 461,366 L 461,365 L 462,364 L 462,363 L 465,360 L 465,359 L 478,346 L 479,346 L 481,344 L 482,344 L 484,342 L 485,342 L 486,341 L 487,341 L 488,340 L 489,340 L 490,339 L 491,339 L 492,338 L 493,338 L 494,337 L 496,337 L 497,336 L 499,336 L 500,335 L 503,335 L 504,334 L 507,334 L 508,333 L 515,333 L 515,332 L 513,330 L 512,330 L 511,329 L 510,329 L 509,328 L 508,328 L 506,326 L 505,326 L 504,325 L 503,325 L 501,323 L 500,323 L 498,321 L 497,321 L 495,319 L 493,319 L 490,316 L 489,316 L 488,315 L 487,315 L 485,313 L 484,313 L 483,312 L 482,312 L 481,311 L 480,311 L 477,308 L 476,308 L 475,307 L 474,307 L 472,305 L 471,305 L 470,304 L 469,304 L 467,302 L 466,302 L 464,300 L 463,300 L 462,299 L 461,299 L 460,298 L 459,298 L 456,295 L 455,295 L 454,294 L 453,294 L 452,293 L 451,293 L 449,291 L 448,291 L 447,290 L 446,290 L 444,288 L 443,288 L 442,287 L 441,287 L 439,285 Z" fill="white" stroke="black" stroke-width="2"/>
//     </svg>
// `;
// document.body.appendChild(cursor);

// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = `${e.pageX}px`;
//     cursor.style.top = `${e.pageY}px`;
// });

// document.addEventListener('mousedown', () => {
//     cursor.style.transform = 'translate(-50%, -50%) scale(0.6)';
// });

// document.addEventListener('mouseup', () => {
//     cursor.style.transform = 'translate(-50%, -50%) scale(1)';
// });

//table drawer hover
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

//resume button

function openResume() {
    window.open('your-resume.pdf', '_blank');
}

let index = 0,
    interval = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    //   star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3))
}

/* -- Glow effect -- */


const blob = document.getElementById("blob");

        function revolveBlob() {
            let angle = 0;
            const radius = 600;

            function animate() {
                angle += 0.3;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                blob.style.transform = `translate(${x}px, ${y}px)`;

                requestAnimationFrame(animate);
            }

            animate();
        }

        revolveBlob();

// const blob = document.getElementById("blob");

// window.onpointermove = event => {
//     const { pageX, pageY } = event; // Use `pageX` and `pageY` to include scrolling offsets

//     // Get document dimensions
//     const maxX = document.documentElement.scrollWidth - blob.offsetWidth;
//     const maxY = document.documentElement.scrollHeight - blob.offsetHeight;

//     // Ensure the blob stays within bounds
//     const xPosition = Math.min(Math.max(0, pageX), maxX);
//     const yPosition = Math.min(Math.max(0, pageY), maxY);

//     // Apply movement
//     blob.style.position = "absolute"; // Absolute so it moves with the document
//     blob.style.left = `${xPosition}px`;
//     blob.style.top = `${yPosition}px`;

//     // Smooth animation
//     blob.animate({
//         left: `${xPosition}px`,
//         top: `${yPosition}px`
//     }, {
//         duration: 300, // Adjust speed for smooth tracking
//         fill: "forwards"
//     });
// };




// $("#KoiStart").on("loadeddata", function() {
//     document.querySelector(".header-text").style.WebkitAnimationPlayState = "running";
//     /*$("#KoiStart").bind("ended", function() {
//     	$("#KoiCycle").css("visibility","visible");
//         $("#KoiCycle").play();
//     });*/

// });

// //$("#KoiStart").defaultPlaybackRate = 0.5;
// function updateBlurSize() {
//     const blur = document.getElementById("blur");
//     blur.style.height = `${document.documentElement.scrollHeight}px`; // Full document height
// }

window.addEventListener("load", updateBlurSize);
window.addEventListener("resize", updateBlurSize);
window.addEventListener("scroll", updateBlurSize);

const connectSection = document.querySelector('.connect-section');
const connectText = document.querySelector('.connect-text');

connectSection.addEventListener('mouseenter', () => {
    connectText.textContent = "pearl05bharti@gmail.com";  // Replace with your email
});

connectSection.addEventListener('mouseleave', () => {
    connectText.textContent = "Let's keep in touch?";  // Reset back to original text
});



var timer = 0;
var num = 150;
var selectedhome = $("#nav-home");
var selectedcase = $("#nav-case");
var selectedcontact = $("#nav-contact");

function caseActive() {
    selectedhome.removeClass("active");
    selectedcontact.removeClass("active");
    selectedcase.addClass("active");
}

function contactActive() {
    selectedcase.removeClass("active");
    selectedhome.removeClass("active");
    selectedcontact.addClass("active");
}

function homeActive() {
    selectedcase.removeClass("active");
    selectedcontact.removeClass("active");
    selectedhome.addClass("active");
}

$(window).bind('scroll', scrollWindowBind);

function scrollBind() {
    $(window).delay(800).bind('scroll', scrollWindowBind);
}

function scrollWindowBind() {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('scrolled');
        console.log("scroll working");
    } else {
        $('.menu').removeClass('scrolled');
    };

    if (($(window).scrollTop() + $(window).height()) > ($(document).height() - 200)) {
        contactActive();
    } else if ($(window).scrollTop() > (window.innerHeight - 100)) {
        caseActive();
    } else {
        homeActive();
    };
}

function smoothScroll(hash) {
    $(window).unbind('scroll');
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function () {
        window.location.hash = hash;
    });
    setTimeout(scrollBind, 800);
};

$(document).ready(function () {
    // Add smooth scrolling to all links
    if (window.location.href !== "index.html" || window.location.href !== "/") {
        $(".NI").on('click', function (event) {
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                smoothScroll(hash);
            } // End if
        });

        selectedhome.on('click', function (event) {
            homeActive();
        });

        selectedcase.on('click', function (event) {
            caseActive();
        });

        selectedcontact.on('click', function (event) {
            contactActive();
        });

    } else {
        homeActive();
    }

});


const projects = document.querySelectorAll('.project-container');
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
        };

        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        projects.forEach(project => {
            revealOnScroll.observe(project);
        });

// //PROJECT RENDERING

// var numProjShown = 4;
// var numProjTotal = 6;

// var projects = {
//     "proj0": {
//         "title": "Schneider National",
//         "projName": "Freight Search Engine",
//         "desc": "Redesigning & developing Schneider's freight search engine to improve search flexibility and usability.",
//         "link": "schneider.html",
//         "picture": "",
//         "video": "https://d14xe37va4uv2q.cloudfront.net/pearl_portfolio_assets/Schneider-project/schneider hero video index.mp4",
//         "mediaText": "01 | Freight Logistics"
//     },
//     "proj1": {
//         "title": "Rec Well, UW-Madison",
//         "projName": "Critical break-points",
//         "desc": "User research study and initial redesign proposal recommending improvements in key areas of the website. Implementation planned for the next fiscal year.",
//         "link": "recwell.html",
//         "picture": "https://d14xe37va4uv2q.cloudfront.net/pearl_portfolio_assets/Recwell-project/recwell-hero-index.png",
//         "video": "",
//         "mediaText": "02 | Campus Well-being"
//     },
//     "proj2": {
//         "title": "Upshift Swap Shop",
//         "projName": "Eco app for green future",
//         "desc": "Designing an app for Madison's sole sustainable swap shop aimed at minimizing garment waste and establishing a distinctive brand identity and voice.",
//         "link": "Upshift.html",
//         "picture": "https://d14xe37va4uv2q.cloudfront.net/pearl_portfolio_assets/Upshift-Project/upshift hero-index.png",
//         "video": "",
//         "mediaText": "03 | Sustainable Shopping"
//     },
//     "proj3": {
//         "title": "BoxMate",
//         "projName": "Campus Storage Booking",
//         "desc": "Designing a web application for a start-up to simplify and streamline booking of storage on campus.",
//         "link": "https://www.figma.com/proto/qJ39h5c6wjfvSaILhQFI69/Boxmate-Redesign?page-id=0%3A1&node-id=137-140&node-type=frame&viewport=74%2C504%2C0.03&t=oXk8W7HdXRDJU6ja-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=158%3A204",
//         "picture": "https://d14xe37va4uv2q.cloudfront.net/pearl_portfolio_assets/Boxmate-Project/Boxmate-hero-index.png",
//         "video": "",
//         "mediaText": "04 | Smart Storage Solutions"
//     },
//     "proj4": {
//         "title": "Wisconsin Department of Natural Resources",
//         "projName": "Website Usability Study",
//         "desc": "Usability test on the Wisconsin DNR website to uncover navigation issues and suggestions for enhancing user access to essential park and permit details.",
//         "link": "WDNR.html",
//         "picture": "assets/cms-prev.jpg",
//         "video": "",
//         "mediaText": "05 | Outdoor Exploration"
//     },
//     "proj5": {
//         "title": "Spotify",
//         "projName": "User Research",
//         "desc": "Spotify's user research study to understand pain-points and propose potential solutions.",
//         "link": "Spotify.html",
//         "picture": "C:\\Users\\Pearl\\Desktop\\PEARLPORTFOLIO\\assets\\spothero.jpg",
//         "video": "",
//         "mediaText": "06 | Music Experience"
//     }
// };

// function createProj(proj) {
//     let { title, projName, desc, link, picture, video, mediaText } = projects[proj];

//     // Check if a video is available; otherwise, use an image
//     let mediaContent = video
//         ? `<video class='prev-video' autoplay loop muted>
//               <source src="${video}" type="video/mp4">
//               Your browser does not support the video tag.
//            </video>`
//         : `<img class='prev-img' src="${picture}" />`;

//     var HTMLproj = `
//     <div class='projItem ui two column grid' id="${proj}">
//         <div class='column studyCard'>
//             <div class='studyHeader'>${title}</div>
//             <div class='studyTitle'>${projName}</div>
//             <div class='studyDesc'>${desc}</div>
//             <a class='seeMore' href="${link}">Learn more >></a>
//         </div>
//         <div class='column'>
//             <div class='media-box'> 
//                 <a href="${link}">
//                     ${mediaContent}
//                 </a>
//                 <span class="media-text">${mediaText}</span>
//                 <a class='proj-arrow' href="${link}">
//                     <img class="navigationArrow" src="assets/arrow-right_2@3x.png">
//                 </a>
//             </div>
//         </div>
//     </div>
//     `;

//     document.querySelector("#landingStudies").innerHTML += HTMLproj;
// }


// function deleteProj(proj) {
//     $("#" + proj).remove();
// }

// function showHide() {
//     let projItems = document.querySelectorAll(".projItem");
//     let numProjItems = projItems.length;
//     if (numProjItems < numProjShown + 1) {
//         for (let x = numProjShown; x < numProjTotal; x++) {
//             let proj = "proj" + x;
//             createProj(proj);
//         }
//         moreProjects.innerHTML = "show less";
//     } else {
//         for (let x = numProjShown; x < numProjTotal; x++) {
//             let proj = "proj" + x;
//             deleteProj(proj);
//         }
//         moreProjects.innerHTML = "view more";
//     }
// }

// for (let x = 0; x < numProjShown; x++) {
//     let proj = "proj" + x;
//     createProj(proj);
// }

// var moreProjects = document.querySelector("#moreProjects");
// moreProjects.addEventListener('click', showHide);

// // Select elements
// // const connectSection = document.querySelector('.footer-header');
// // const connectText = document.querySelector('.connect-text');

// // // Add hover event listeners
// // connectSection.addEventListener('mouseover', () => {
// //     connectText.textContent = "example@example.com"; // Replace with your email
// // });

// // connectSection.addEventListener('mouseout', () => {
// //     connectText.textContent = "Let's connect?";
// // });
