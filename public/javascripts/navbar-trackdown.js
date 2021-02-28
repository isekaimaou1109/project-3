window.addEventListener("scroll", function(event) {
  let top = this.scrollY
  const nav = document.getElementById("styles_nav__gcAIG")
  nav.style.width = "100%"

  if(top >= 500) {
    nav.style.position = "fixed"
    nav.style.zIndex = "1000"
  } else if(top > 0 && top <= 50) {
    nav.style.position = "initial"
  }
}, false)
