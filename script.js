ScrollTrigger.create({
   
    trigger: 'div.two',
    start:"top 30%",
    end:"bottom 0%", 
  
    onEnter: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#262626', color: '#fff'})
    },
    
    onLeaveBack: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#fff', color: '#000'})
    },
  
    
  })
  
  ScrollTrigger.create({
    
    trigger: 'footer',
    start:"top 73%",
    end:"bottom 0%", 
  
    onEnter: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#fff',color: '#000'})
    },
    
    onLeaveBack: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#262626', color: '#fff'})
    },
  
    
  })