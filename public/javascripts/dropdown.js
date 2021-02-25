const Allbuttons = [...document.getElementsByClassName("styles_wrap-title__3GTR-")]

for(var btn of Allbuttons) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    const currentTarget = e.target;
    const currentIndex = Allbuttons.indexOf(currentTarget)
    const otherTargets = Allbuttons.slice(0, currentIndex).concat(Allbuttons.slice(currentIndex + 1, Allbuttons.length))
    
    currentTarget.setAttribute("data-istoggle", true)
    currentTarget.nextElementSibling.setAttribute("aria-hidden", false)

    otherTargets.forEach((target) => {
      target.setAttribute("data-istoggle", false)
      target.nextElementSibling.setAttribute("aria-hidden", true)
    })
  }, false)
}
