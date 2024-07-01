// we use gsab and scroll trigger which is use for moving animation
// we use here for moving navebar
// js library name -gsap cdn

var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // x axis and y axis se move krta rhega 
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})


gsap.to("#nav",{
    backgroundColor : "#000",
    duration:0.5,
    height:'110px',
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:'top -10%',
        end:"top -11%",
        // repeate
        scrub:0.8,
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // kaam hone ke baad hta do isse pta chlta hn kha se kha tk change ho rha hn
        // markers:true,
        start:'top -30vh',
        end:"top -100vh",
        scrub:2
    }
})

var h4all=document.querySelectorAll("#nav h4")
// it is use to select all the query and create a nodelist

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // this is use to increase the size when mouse over there
        crsr.style.scale=2
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave",function(){
    // this is use to increase the size when mouse over there
    crsr.style.scale=1
    crsr.style.border="0px solid   #d1f373"
    crsr.style.backgroundColor=" #d1f373"
})
})

gsap.from('#about-us img,#about-us-in',{
    y:50,
    // opacity mtl dhime se ayega
    opacity:0,
    duration:3,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:'top 70%',
        end:"top 65%",
        scrub:0.8}

})

gsap.from('.card',{
    // scale -andar se uthkar  aa rhi hn
    scale:0.5,
    // opacity mtl dhime se ayega
    opacity:0,
    duration:3,
    // staggered ka mtlv ek ek krke ayenge
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:'top 70%',
        end:"top 65%",
        scrub:0.8}

})

gsap.from("#colon1",{
    y:-60,
    x:-60,
    scrollTrigger:
    {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 50%",
        scrub:4

    }
})

gsap.from("#colon2",{
    y:60,
    x:60,
    scrollTrigger:
    {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 50%",
        scrub:4

    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3

    }
})

