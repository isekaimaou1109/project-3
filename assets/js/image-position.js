const image = document.querySelector("#image-content");
image.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
image.style.transition = 'transform .8s';

image.addEventListener('mousemove', function(event) {
  const x = event.pageX - this.offsetLeft;
  const y = event.pageY - this.offsetTop;

  const imageEndWidthPosition = image.width;
  const imageEndHeightPosition = image.height;

  if((y < (imageEndHeightPosition / 2)) && (x < (imageEndWidthPosition / 2))) {
    image.style.transform = 'rotateX(-10deg) rotateY(20deg) rotateZ(10deg)';
  }

  if((y < (imageEndHeightPosition / 2)) && (x > (imageEndWidthPosition / 2))) {
    image.style.transform = `rotateX(-10deg) rotateY(-20deg) rotateZ(-10deg)`;

  }

  if((y > (imageEndHeightPosition / 2)) && (x < (imageEndWidthPosition / 2))) {
    image.style.transform = `rotateX(10deg) rotateY(20deg) rotateZ(-10deg)`;
  }

  if((y > (imageEndHeightPosition / 2)) && (x > (imageEndWidthPosition / 2))) {
    image.style.transform = `rotateX(10deg) rotateY(-10deg) rotateZ(10deg)`
  }
})

image.addEventListener('mouseleave', function(event) {
  image.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
})

