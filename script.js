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
    console.log(firstCard.dataset.languages)
  } else {
    // Second Card
    isFlipped = false;
    secondCard = this


    // Comparing the values
    if(firstCard.dataset.languages === secondCard.dataset.languages) {
      console.log('Matched')  
    }
  }

}