const link = document.getElementsByClassName("individualLink");

gsap.set(link, {
transformOrigin:"left 50%"
})


//link.onmouseover(function () {
//    gsap.to(this, {
//        letterSpacing: "2px",
//        ease: "power.5",
//        duration: 1,
//    })
//}) 
//$(link).mouseleave(function () {
//    gsap.to(this, {
//        letterSpacing: "0px",
//        ease: "power.5",
//        duration: 1,
//    })
//}) 


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



//const mag = document.getElementById("magium");
//const m1 = document.getElementById("m1");
//const m2 = document.getElementById("m2");
//const m3 = document.getElementById("m3");
//
//mag.onmouseover = function () {
//    console.log("it worked");
//    gsap.to(m1, {
//        marginTop:-450,
//        ease: "power4.inOut",
//        duration: .5,
//    })
//    gsap.to(m2, {
//        height:754,
//        marginLeft: 849,
//        marginTop: -487,
//        ease: "power4.inOut",
//        duration: .5,
//    })
//    gsap.to(m3, {
//        marginTop:-290,
//        ease: "power4.inOut",
//        duration: .5,
//    })
//}





const tH = document.getElementById("tH");

$(tH).hover(function () {
    console.log("it worked");
    $(this).css("fill", "0CF2F2");
}, function () {
    $(this).css("fill", "none");
});


const lH = document.getElementById("lH");

$(lH).hover(function () {
    console.log("it worked");
    $(this).css("fill", "EF0BEF");
}, function () {
    $(this).css("fill", "none");
});

const fH = document.getElementById("fH");

$(fH).hover(function () {
    console.log("it worked");
    $(this).css("fill", "0C0BEF");
}, function () {
    $(this).css("fill", "none");
});

const iH = document.getElementById("iH");

$(iH).hover(function () {
    console.log("it worked");
    $(this).css("fill", "F0F012");
}, function () {
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
