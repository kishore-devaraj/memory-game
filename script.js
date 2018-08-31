'use strict'

const cards = document.querySelectorAll('.memory-card')

cards.forEach(item => item.addEventListener('click', flipCard))

function flipCard () {
  this.classList.add('flip')
  let isFlipped = false
  let firstCard, secondCard

  if(!isFlipped) {
    // First Card
    isFlipped = true
    firstCard = this
  } else {
    isFlipped = false;
    secondCard = this
  }
}