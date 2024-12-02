// // script.js
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('backgroundCanvas'), alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);

// // Shader for the grainy hue-shifting background
// const fragmentShader = `
//   uniform float u_time;
//   uniform vec2 u_resolution;
//   uniform vec2 u_mouse;

//   float random(vec2 uv) {
//     return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453123);
//   }

//   void main() {
//     vec2 uv = gl_FragCoord.xy / u_resolution;
    
//     // Centered grainy dot effect
//     float distToCenter = length(uv - vec2(0.5));
//     float radius = smoothstep(0.5, 0.3, distToCenter - u_time * 0.1); // Expanding radius

//     // Grain and color
//     float grain = random(uv * u_time) * 0.2;
//     vec3 color = vec3(0.5 + 0.5 * cos(u_time + uv.xyx + vec3(0, 2, 4)));

//     gl_FragColor = vec4(color * radius + grain, 1.0);
//   }
// `;

// // Define geometry and material using the shader
// const geometry = new THREE.PlaneGeometry(2, 2);
// const material = new THREE.ShaderMaterial({
//   uniforms: {
//     u_time: { value: 0.0 },
//     u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
//     u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
//   },
//   fragmentShader: fragmentShader
// });

// const plane = new THREE.Mesh(geometry, material);
// scene.add(plane);

// camera.position.z = 1;

// function animate() {
//   material.uniforms.u_time.value += 0.05; // Time-based animation for hue change
//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
// });



//old


$("#KoiStart").on("loadeddata", function() {
    document.querySelector(".header-text").style.WebkitAnimationPlayState = "running";
    /*$("#KoiStart").bind("ended", function() {
    	$("#KoiCycle").css("visibility","visible");
        $("#KoiCycle").play();
    });*/

});

//$("#KoiStart").defaultPlaybackRate = 0.5;




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
    }, 800, function() {
        window.location.hash = hash;
    });
    setTimeout(scrollBind, 800);
};

$(document).ready(function() {
    // Add smooth scrolling to all links
    if (window.location.href !== "index.html" || window.location.href !== "/") {
        $(".NI").on('click', function(event) {
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

        selectedhome.on('click', function(event) {
            homeActive();
        });

        selectedcase.on('click', function(event) {
            caseActive();
        });

        selectedcontact.on('click', function(event) {
            contactActive();
        });

    } else {
        homeActive();
    }

});

//PROJECT RENDERING

var numProjShown = 4;
var numProjTotal = 6;

var projects = {
    "proj0": {
        "title": "Wisconsin Department of Natural Resources",
        "projName": "Website Usability Study",
        "desc": "Usability test on the Wisconsin DNR website to uncover navigation issues and suggestiions for enhancing user access to essential park and permit details.",
        "link": "WDNR.html",
        "picture": "assets/cms-prev.jpg",
    },
    "proj1": {
        "title": "Schneider National",
        "projName": "Freight Search Engine Redesign",
        "desc": "Redesigning & developing Schneider's freight search engine to streamline the search process, improve usability with multi-capacity selection, ensure above-the-fold search options, & enable mileage-based results for enhanced user experience.",
        "link": "schneider.html",
        "picture": "https://d14xe37va4uv2q.cloudfront.net/pearl_portfolio_assets/Schneider-project/schneider hero.mp4",
    },
    "proj2": {
        "title": "Rec Well, UW-Madison ",
        "projName": "Critical break-points redesign",
        "desc": "User research study and initial redesign proposal for Recreation and Wellbeing at UW-Madison, focused on identifying pain points and recommending improvements in key areas of the website. Implementation planned for the next fiscal year.",
        "link":"recwell.html",
        "picture": "recwell.png",
    },
    "proj3": {
        "title": "BoxMate",
        "projName": "Website Revamp ",
        "desc": "Designing an web application for a start-up to simplify and streamline the payments page and booking a storage location as well as added features based on user insights.",
        "link": "https://www.figma.com/proto/qJ39h5c6wjfvSaILhQFI69/Boxmate-Redesign?page-id=0%3A1&node-id=137-140&node-type=frame&viewport=74%2C504%2C0.03&t=oXk8W7HdXRDJU6ja-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=158%3A204",
        "picture": "assets/smarttagger-prev.jpg",
    },
    "proj4": {
        "title": "Upshift Swap Shop",
        "projName": "eco store's design",
        "desc": "Designing an app for Madison's sole sustainable swap shop to minimize garment waste aimed at incentivizing users with loyalty points, offer customizable and affordable gifting hampers, enable online shopping, and establishing a distinctive brand identity and voice.",
        "link": "Upshift.html",
        "picture": "assets/upshift.jpg",
    },
    "proj5": {
        "title": "Spotify",
        "projName": "User Research",
        "desc": "Spotify's user research study to understand pain-points and propose potential solutions.",
        "link": "Spotify.html",
        "picture": "C:\Users\Pearl\Desktop\PEARLPORTFOLIO\assets\spothero.jpg",
    },
    
   
}

function createProj(proj) {
    let title = projects[proj].title;
    let projName = projects[proj].projName;
    let desc = projects[proj].desc;
    let link = projects[proj].link;
    let picture = projects[proj].picture;

    var HTMLproj = `
    <div class='projItem ui two column grid' id="${proj}">
    <div class='column studyCard'>
        <div class='studyHeader'>${title}</div>
        <div class='studyTitle'>${projName}</div>
        <div class='studyDesc'>${desc}</div>
        <a class='seeMore' href="${link}">Learn more >></a>
    </div>
   <div class='column image-box'>
        <a href="${link}">
        <img class='prev-img' src="${picture}"/></a><a class='proj-arrow' href="${link}">
        <img class="navigationArrow" src="assets/arrow-right_2@3x.png">
        </a>

   </div>
</div>
    `
    var landingStudies = document.querySelector("#landingStudies");
    landingStudies.innerHTML += HTMLproj;
}

function deleteProj(proj) {
    $("#" + proj).remove();
}

function showHide() {
    let projItems = document.querySelectorAll(".projItem");
    let numProjItems = projItems.length;
    if (numProjItems < numProjShown + 1) {
        for (let x = numProjShown; x < numProjTotal; x++) {
            let proj = "proj" + x;
            createProj(proj);
        }
        moreProjects.innerHTML = "show less";
    } else {
        for (let x = numProjShown; x < numProjTotal; x++) {
            let proj = "proj" + x;
            deleteProj(proj);
        }
        moreProjects.innerHTML = "view more";
    }
}

for (let x = 0; x < numProjShown; x++) {
    let proj = "proj" + x;
    createProj(proj);
}

var moreProjects = document.querySelector("#moreProjects");
moreProjects.addEventListener('click', showHide);