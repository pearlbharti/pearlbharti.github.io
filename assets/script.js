


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

window.onpointermove = event => {
    const { pageX, pageY } = event; // Use `pageX` and `pageY` to include scrolling offsets

    // Get document dimensions
    const maxX = document.documentElement.scrollWidth - blob.offsetWidth;
    const maxY = document.documentElement.scrollHeight - blob.offsetHeight;

    // Ensure the blob stays within bounds
    const xPosition = Math.min(Math.max(0, pageX), maxX);
    const yPosition = Math.min(Math.max(0, pageY), maxY);

    // Apply movement
    blob.style.position = "absolute"; // Absolute so it moves with the document
    blob.style.left = `${xPosition}px`;
    blob.style.top = `${yPosition}px`;

    // Smooth animation
    blob.animate({
        left: `${xPosition}px`,
        top: `${yPosition}px`
    }, {
        duration: 300, // Adjust speed for smooth tracking
        fill: "forwards"
    });
};




// $("#KoiStart").on("loadeddata", function() {
//     document.querySelector(".header-text").style.WebkitAnimationPlayState = "running";
//     /*$("#KoiStart").bind("ended", function() {
//     	$("#KoiCycle").css("visibility","visible");
//         $("#KoiCycle").play();
//     });*/

// });

// //$("#KoiStart").defaultPlaybackRate = 0.5;
function updateBlurSize() {
    const blur = document.getElementById("blur");
    blur.style.height = `${document.documentElement.scrollHeight}px`; // Full document height
}

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
