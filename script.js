// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
// Shery.hoverWithMediaCircle(".hvr",{videos: ["./0.mp4","./2.mp4","./3.mp4"]});




// gsap.to(".fleftelm",{
//     scrollTrigger: {
//         trigger: "#fimages",  // fimages ko rok dega
//         pin: true,             // pin true ke waja se
//         start: "top top",      //suru jab top pe ayega tab karega
//         end: "bottom bottom",  //end hoga jab botttom pe ajaye
//         endTrigger: ".last" ,   //kab rokna hai or  kaha tak apko chalana hai
//         scrub:1                  // jaise jaise scroll kare waise waise animate ho
//     },     
//     y: "-300%",
//     ease: "power1"
// })


// let section = document.querySelectorAll(".fleftelm")
// Shery.imageEffect(".images", {
//     style: 5,
//     // config: { onMouse: { value: 1 } },
//     slideStyle: (setScroll) => {
//        section.forEach(function(section,index){
//             ScrollTrigger.create({
//                 trigger: section,
//                 start:"top top",
//                 scrub:1,
//                 onUpdate: function(prog){
//                     setScroll(prog.progress+index)
                    
//                 }

//             })
//        })
//     },
//   });






Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
  });

  gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-275%",
    ease: Power3,
  });

  let sections = document.querySelectorAll(".fleftelm");
  Shery.imageEffect(".images", {
    style: 2,
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 3,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });