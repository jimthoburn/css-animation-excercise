
const link = document.querySelector(".link")
const link__character = document.querySelector(".link__character")
const image = document.querySelector(".lost-woods__image")
const swordMask = document.querySelector(".sword-mask")

const swordDistanceFromTopOfImage = 215
const swordPosition =
        image.getBoundingClientRect().y +
        swordDistanceFromTopOfImage

let linkPosition = 0

function checkDistance() {
  console.log(swordPosition)
  linkPosition = link.getBoundingClientRect().y
  
  // If Link’s position is close to the sword
  if (linkPosition < swordPosition) {

    // Indicate to the CSS that he’s got it.
    link__character.classList.add("link__character--with-sword")
    swordMask.classList.add("sword-mask--active")

  } else {
    link__character.classList.remove("link__character--with-sword")
  }

}

setInterval(checkDistance, 200)




