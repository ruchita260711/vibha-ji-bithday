/* ==========================
   script.js
   Vibha Birthday Website
========================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Splash Screen */

    const splash = document.getElementById("splash");

    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.transition = "1s";

        setTimeout(() => {
            splash.style.display = "none";
        }, 1000);

    }, 3000);

});


/* Smooth Journey Button */

const journeyBtn = document.getElementById("journeyBtn");

if(journeyBtn){

journeyBtn.addEventListener("click",()=>{

document.getElementById("gallery").scrollIntoView({

behavior:"smooth"

});

});

}


/* Surprise */

const openGift = document.getElementById("openGift");

const finalMessage = document.getElementById("finalMessage");

const gift = document.getElementById("gift");

if(openGift){

openGift.addEventListener("click",()=>{

gift.style.transform="scale(1.15) rotate(10deg)";

gift.style.transition=".6s";

setTimeout(()=>{

gift.style.opacity="0";

},500);

setTimeout(()=>{

finalMessage.style.display="block";

finalMessage.scrollIntoView({

behavior:"smooth"

});

confettiAnimation();

},1200);

});

}


/* Confetti */

function confettiAnimation(){

for(let i=0;i<180;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.backgroundColor=randomColor();

confetti.style.animationDuration=(Math.random()*3+2)+"s";

confetti.style.width=(Math.random()*10+6)+"px";

confetti.style.height=confetti.style.width;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},5000);

}

}


function randomColor(){

const colors=[

"#ff4f91",

"#ffd700",

"#ffffff",

"#ff99cc",

"#ffb347",

"#87cefa",

"#98fb98"

];

return colors[Math.floor(Math.random()*colors.length)];

}


/* Fade Animation */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});


document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});


/* Floating Hearts */

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=(Math.random()*18+20)+"px";

heart.style.zIndex="999";

heart.style.pointerEvents="none";

heart.style.transition="6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.bottom="110vh";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6500);

},700);


/* Navbar Highlight */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* Gallery Image Click */

document.querySelectorAll(".card img").forEach(img=>{

img.addEventListener("click",()=>{

const viewer=document.createElement("div");

viewer.style.position="fixed";

viewer.style.top="0";

viewer.style.left="0";

viewer.style.width="100%";

viewer.style.height="100%";

viewer.style.background="rgba(0,0,0,.9)";

viewer.style.display="flex";

viewer.style.justifyContent="center";

viewer.style.alignItems="center";

viewer.style.zIndex="9999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

viewer.appendChild(image);

viewer.addEventListener("click",()=>{

viewer.remove();

});

document.body.appendChild(viewer);

});

});


/* Happy Birthday Console */

console.log("🎂 Happy Birthday Vibha ❤️");
console.log("Made with love by Ruchita");
