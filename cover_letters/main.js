gsap.registerPlugin(ScrollTrigger);


console.clear();
const targets = gsap.utils.toArray(".individualLink");

targets.forEach((obj, i) => {
  obj.anim = gsap.to(obj, { letterSpacing: "2px", ease: "expo", duration: 1, }).reversed(true);
  obj.addEventListener("mouseenter", doCoolStuff);
  obj.addEventListener("mouseleave", doCoolStuff);
});

function doCoolStuff() {
  this.anim.reversed(!this.anim.reversed());
}



const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");


//gsap.set(line1, {x:-1*line1.offsetWidth})
//gsap.set(".bgc", {y: -209})
const tl = gsap.timeline();
const tl2 = gsap.timeline();
const tlb1 = gsap.timeline();
const tlb2 = gsap.timeline();
const tlb3 = gsap.timeline();
const tlb4 = gsap.timeline();
const tl2b1 = gsap.timeline();
const tl2b2 = gsap.timeline();
const tl2b3 = gsap.timeline();
const tl2b4 = gsap.timeline();
tl.to("#line1", {xPercent: 100})
tlb1.to(".bgc1", {xPercent: 100})
tlb2.to(".bgc2", {xPercent: 100})
tlb3.to(".bgc3", {xPercent: 100})
tlb4.to(".bgc4", {xPercent: 100})
tl2.from("#line2", {xPercent: 100})
tl2b1.from(".bg2c1", {xPercent: 100})
tl2b2.from(".bg2c2", {xPercent: 100})
tl2b3.from(".bg2c3", {xPercent: 100})
tl2b4.from(".bg2c4", {xPercent: 100})
//  .from(".purple", {xPercent: 100})
//  .from(".green", {yPercent: -100})
;

ScrollTrigger.create({
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: .54*window.innerWidth, 
  scrub: .7,
  pin: true,
  anticipatePin: 1
});
ScrollTrigger.create({
  animation: tlb1,
  trigger: "#container",
  start: "top top",
  end: .54*window.innerWidth, 
  scrub: .73,
  pin: true,
  anticipatePin: 1
});
ScrollTrigger.create({
  animation: tlb2,
  trigger: "#container",
  start: "top top",
  end: .54*window.innerWidth, 
  scrub: .76,
  pin: true,
  anticipatePin: 1
});
ScrollTrigger.create({
  animation: tlb3,
  trigger: "#container",
  start: "top top",
  end: .54*window.innerWidth, 
  scrub: .79,
  pin: true,
  anticipatePin: 1
});
ScrollTrigger.create({
  animation: tlb4,
  trigger: "#container",
  start: "top top",
  end: .54*window.innerWidth, 
  scrub: .76,
  pin: true,
  anticipatePin: 1
});



ScrollTrigger.create({
  animation: tl2,
  trigger: "#container",
  start: "top top",
  end: .5*window.innerWidth, 
  scrub: .4,
  pin: true,
  anticipatePin: 1
});
ScrollTrigger.create({
  animation: tl2b1,
  trigger: "#container",
  start: "top top",
  end: .5*window.innerWidth, 
  scrub: .43,
  pin: true,
  anticipatePin: 1
});
ScrollTrigger.create({
  animation: tl2b2,
  trigger: "#container",
  start: "top top",
  end: .5*window.innerWidth, 
  scrub: .46,
  pin: true,
  anticipatePin: 1
});
ScrollTrigger.create({
  animation: tl2b3,
  trigger: "#container",
  start: "top top",
  end: .5*window.innerWidth, 
  scrub: .49,
  pin: true,
  anticipatePin: 1
});
ScrollTrigger.create({
  animation: tl2b4,
  trigger: "#container",
  start: "top top",
  end: .5*window.innerWidth, 
  scrub: .46,
  pin: true,
  anticipatePin: 1
});




const tH = document.getElementById("tH");

$(tH).hover(function(){
    console.log("it worked");
    $(this).css("fill", "0CF2F2");}, function(){
  $(this).css("fill", "none");
});


const lH = document.getElementById("lH");

$(lH).hover(function(){
    console.log("it worked");
    $(this).css("fill", "EF0BEF");}, function(){
  $(this).css("fill", "none");
});

const fH = document.getElementById("fH");

$(fH).hover(function(){
    console.log("it worked");
    $(this).css("fill", "0C0BEF");}, function(){
  $(this).css("fill", "none");
});

const iH = document.getElementById("iH");

$(iH).hover(function(){
    console.log("it worked");
    $(this).css("fill", "F0F012");}, function(){
  $(this).css("fill", "none");
});



//const word = document.getElementById("word");
//
//$(word).hover(function(){
//    console.log("it worked");
//    $(this).css("fill", "F0F012");}, function(){
//  $(this).css("fill", "none");
//});






//tH.onmouseover = function () {
//    console.log("it worked");
//    gsap.to(tB, {
//        fill: "#0CF2F2",
//        ease: "power4.inOut",
//        duration: .5,
//    })
//}
//
//tH.onmouseout = function () {
//    console.log("it undo");
//    gsap.to(tB, {
//        fill: "red",
//        ease: "power4.inOut",
//        duration: .5,
//        delay:.2,
//    })
//
//}



//var vert = '-=122px';
//
//array = [$(".1"), $(".2"), $(".3"), $(".4"), $(".5"), $(".6"), $(".7"), $(".8"), $(".9"), $(".10"), $(".11"), $(".12"), $(".13"), $(".14"), $(".15"), $(".16"), $(".17"), $(".18"), $(".19"), ];
////let tl = new gsap.timeline({
////    repeat: -1,
////    yoyo: false,
////});
//
//let time = 200;
////let rt = 2.5;
//
//            tl.staggerTo('.word', rt, {
//            y: '-=40px',
//            ease: Power2.easeInOut,
//        }, .065)
//
//for (i = 0; i < 18; i++) {
//    console.log(array[i]);
//    
//    //single word move and size up
//        tl.to(array[i], rt, {
//            fontSize: "260px",
//            marginLeft: -17,
//            y: vert,
//            ease: Power2.easeInOut,
//            
//        }, "-=3.5")
//    //whole line movement up
//        .staggerTo('.word', rt, {
//            y: '-=40px',
//            ease: Power2.easeInOut,
//        }, .065)
//
//    //single word move and size down
//        .to(array[i], rt, {
//            y: vert,
//            fontSize: '20px',
//            lineHeight: '40px',
//            marginLeft: '0px',
//            ease: Power2.easeInOut,
//        }, "-=3.5")
//
//    array[i].mouseenter(function () {
//        tl.pause();
//    })
//
//    array[i].mouseleave(function () {
//        tl.play();
//    })
//
//}
