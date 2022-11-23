
// ******************** HOME PAGE *********************** //

gsap.registerPlugin(ScrollTrigger);

// ****** LOADING PAGE TIMELINE ******
const home_timeline = gsap.timeline()
home_timeline.to('#line',{
  backgroundImage:'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(71,64,64,1) 0%)',
  duration: 1
})
.to('#line',{width: '100%', duration:1})
.to('#loadingText',{y:-50, opacity: 0},'<')
.to('.loading_page',{display:'none', duration: 0.7},'-=0.2')
.to('.contents', {display:"block", opacity: 1, duration:2})
.from('#react-logo-mobile', {rotation:270, duration:3,ease:'back',opacity:0},'<')
.from('.navbar',{opacity:0, y:-100, duration:2},'<')
.from('.npgImage', {x:40, opacity:0, duration:2},'<')
.from('#man1', {x:40, opacity:0, duration:1},'<')
.from('#title_name',{x:-40, opacity:0, duration:2, ease:"back"},'<')
.from('#developer_text',{x:40, opacity:0, duration:2, ease:"back"},'<')
.from('#designer_text',{x:40, opacity:0, duration:2, ease:"back"},'<' )
.from('.title_btn',{y:50, opacity:0, duration:1},"<")
.to('#react-logo',{rotation:270, duration:3,ease:'back'},'<')
.from('#content2-Text', {opacity:0, x:50, duration:1.5})
.from('.guitar-info',{opacity:0, x:-50, duration:1.5},'+=3')
.from('.chef-info',{opacity:0, x:50, duration:1.5},'+=1.5')
.from('.badminton-info',{opacity:0, x:-50, duration:1.5},'+=1.5')
.from('.caligraphy-info',{opacity:0, x:50, duration:1.5},'+=1.5')

// **** NAV ANIMATION **** //
const links = document.querySelectorAll('li');

links.forEach( link => {

  const underline = document.createElement('div');
  underline.setAttribute('id','underline');

  link.addEventListener('mouseover', () => {

    gsap.to(link,{y:-15, duration:0.5, ease:"back"});
    link.appendChild(underline);
    gsap.to(underline, 
            {opacity: 1,
             keyframes: {
             '50%': {y: 15, ease: "back"},
             '100%': {y: 5}},
             duration: 2,
             ease: "back"})
  })

  link.addEventListener('mouseleave', () => {
    gsap.to(link,{y:0, duration:0.5, ease:"bounce"});
  })

})



// ****** PROJECT PAGE TIMELINE ******
const project_timeline = gsap.timeline()
project_timeline.from('.navbar-project',{opacity:0, y:-100, duration:2})
.from('.project-title-content',{x:-50, opacity:0,duration:1.5},"-=1")
.from('.project-icons',{opacity:0, duration:1.5},"<")
.from('.project-content1-box1-text',{opacity:0, duration:2})
.from('.project-content1-box2-text',{opacity:0, duration:2},'<')
.from('.project-content1-box3-text',{opacity:0, duration:2},'<')
.from('.project-title-content2',{x:100, opacity:0, duration:2})
.from('.project-icons-content2', {opacity:0, duration:1.5},"<")
.from('.project-content3-box1-text',{opacity:0, duration:2})
.from('.project-content3-box2-text',{opacity:0, duration:2}, "<")
.from('.project-content3-box3-text',{opacity:0, duration:2}, "<")
.from('.project-title-content4',{opacity:0, x:-100, duration:2})
.from('#jest-content4-white',{opacity:0, y:-100, duration:2},"<")
.from('#mocha-content4-white',{opacity:0, x:100, duration:2},"<")
.from('.project-content5-box1-text', {opacity:0, duration:2})
.from('.project-content5-box2-text', {opacity:0, duration:2},"<")
.from('.project-content5-box3-text', {opacity:0, duration:2},"<")


const seeMore_btn = document.getElementById('content6-btn');

seeMore_btn.addEventListener('mouseover', () => {
  gsap.to('#content6-btn', {opacity:0, duration:2})
  gsap.to('#arrow-icon',{x:200, duration:2})
})

seeMore_btn.addEventListener('mouseleave',() => {
  gsap.to('#content6-btn', {opacity:1, duration:2})
  gsap.to('#arrow-icon',{x:0, duration:2})
})


const home = document.getElementById('nav_home');
const about = document.getElementById('nav_aboutme');
const project = document.getElementById('nav_project');
const skill = document.getElementById('nav_skill');



