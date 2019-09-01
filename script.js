function imageTransition() {

  const images = [
    "lunar-moon",
    "3d-print-moon",
    "3d-moon",
    "AR-moon"
  ];

  const obj = {curImg: 0};

  const tween = TweenMax.to(obj, 1,
    {
      curImg: images.length - 1,
      roundProps: "curImg",
      immediateRender: true,
      ease: Linear.easeInOut,
      onUpdate: function () {
        var elements = document.querySelectorAll('.content-image');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.visibility = 'hidden';
        }
        document.getElementById(images[obj.curImg]).style.visibility = 'visible';
      }
    }
  );

  // ScrollMagic controller for all animation sequences
  const controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({triggerElement: ".start-trigger", duration: "250%"})
    .setTween(tween)
    .addTo(controller)

  //Pin the Last Image after sequence is completed
  new ScrollMagic.Scene({triggerElement: ".end-trigger"})
  .setClassToggle(".images", "active")
  .addTo(controller);
}

imageTransition();

function scaleImage() {
  var controller = new ScrollMagic.Controller();
  var tween = TweenMax.to(".content-image", 1, {css: {scale: 0.7}, ease: Linear.easeNone})
  var scene = new ScrollMagic.Scene({triggerElement: ".start-trigger", duration: "250%"})
    .setTween(tween)
    .addTo(controller);
}

scaleImage();