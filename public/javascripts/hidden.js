window.addEventListener("scroll", function(evt) {
  const currentChild = [...document.querySelectorAll(".styles_box__12HZq")][5]

  const distanceToBody = currentChild.offsetTop
  const ChildHeight = currentChild.offsetHeight
  const restHeight = ChildHeight + distanceToBody

  if((this.scrollY - distanceToBody >= -100 && this.scrollY - distanceToBody <= -1)  || 
    (this.scrollY - restHeight >= -1 && this.scrollY - restHeight <= -100)) {
      document.querySelector(".styles_img__3bWMv").style.opacity = 1
  } else {
    document.querySelector(".styles_img__3bWMv").style.opacity = 0
    document.querySelector(".styles_img__3bWMv").style.transition = "opacity 1.5s"
  }
}, false)
