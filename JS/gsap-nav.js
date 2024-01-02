gsap.to("#nav-b", {
    backgroundColor: "#000",
    duration: "0.5",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -80%",
        end: "top -80%",
        scrub: 1
    }
})