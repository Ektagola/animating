function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./male0001.png
       ./male0002.png
       ./male0004.png
       ./male0003.png
       ./male0005.png
       ./male0006.png
       ./male0007.png
       ./male0008.png
       ./male0009.png
       ./male0010.png
       ./male0011.png
       ./male0012.png
       ./male0013.png
       ./male0014.png
       ./male0015.png
       ./male0016.png
       ./male0017.png
       ./male0018.png
       ./male0019.png
       ./male0020.png
       ./male0021.png
       ./male0022.png
       ./male0023.png
       ./male0024.png
       ./male0025.png
       ./male0026.png
       ./male0027.png
       ./male0028.png
       ./male0029.png
       ./male0030.png
       ./male0031.png
       ./male0032.png
       ./male0033.png
       ./male0034.png
       ./male0035.png
       ./male0036.png
       ./male0037.png
       ./male0038.png
       ./male0039.png
       ./male0040.png
       ./male0041.png
       ./male0042.png
       ./male0043.png
       ./male0044.png
       ./male0230.png
       ./male0231.png
       ./male0232.png
       ./male0233.png
       ./male0234.png
       ./male0235.png
       ./male0236.png
       ./male0237.png
       ./male0238.png
       ./male0239.png
       ./male0240.png
       ./male0241.png
       ./male0242.png
       ./male0243.png
       ./male0244.png
       ./male0245.png
       ./male0246.png
       ./male0247.png
       ./male0248.png
       ./male0249.png
       ./male0250.png
       ./male0251.png
       ./male0252.png
       ./male0253.png
       ./male0254.png
       ./male0255.png
       ./male0256.png
       ./male0257.png
       ./male0258.png
       ./male0259.png
       ./male0260.png
       ./male0261.png
       ./male0262.png
       ./male0263.png
       ./male0264.png
       ./male0265.png
       ./male0266.png
       ./male0267.png
       ./male0268.png
       ./male0269.png
       ./male0270.png
       ./male0271.png
       ./male0272.png
       ./male0273.png
       ./male0274.png
       ./male0275.png
       ./male0276.png
       ./male0277.png
       ./male0278.png
       ./male0279.png
       ./male0280.png
       ./male0281.png
       ./male0282.png
       ./male0283.png
       ./male0284.png
       ./male0285.png
       ./male0286.png
       ./male0287.png
       ./male0288.png
       ./male0289.png
       ./male0290.png
       ./male0291.png
       ./male0292.png
       ./male0293.png
       ./male0294.png
       ./male0295.png
       ./male0296.png
       ./male0297.png
       ./male0298.png
       ./male0299.png
       ./male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
