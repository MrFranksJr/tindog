////////////////IMPORTS//////////////////////
import Dog from '/data/Dog.js'
import dogs from '/data/data.js'
import { convertStyle, isTouchDevice, isSwiped, deviceType, events, getXY, mouseX, mouseY, initialX, initialY, modifyXnY, isSwipedTrue, isSwipedFalse, resetXnY } from '/data/utils.js'


////////////////CONSTS//////////////////////
const likeBtn = document.getElementById('like-btn')
const dislikeBtn = document.getElementById('dislike-btn')
const dogContainer = document.getElementById('dog-container')

////////////////STORE AND RANDOMIZE DOGS//////////////////////
let dogArray = dogs.sort((a, b) => 0.5 - Math.random())

////////////////next dog from array//////////////////////
function getNextDog() {
    const nextDogData = dogArray.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

////////////////was swiped event//////////////////////
function wasSwiped(buttonType) {
    likeBtn.disabled = true
    dislikeBtn.disabled = true

    if (buttonType === 'like') {
        document.getElementById('badge').src = '/images/badge-like.png'
    }
    else if (buttonType === 'dislike') {
        document.getElementById('badge').src = '/images/badge-nope.png'
    }

    dog.wasSwiped(buttonType)

    if (dogArray.length > 0) {
        setTimeout(() => {
            dog = getNextDog()
            renderDogs()}, 1500)
    }
    else {
        setTimeout(() => { 
            dogContainer.innerHTML = `<p class="message">There's no more dogs out there for you to swipe through...<br><img src="/images/sad.svg"></p>`
            dogContainer.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%)`}
            , 1500)
    }
}

function renderDogs() {
    dogContainer.innerHTML = dog.getDogHtml()
    likeBtn.disabled = false
    dislikeBtn.disabled = false
}

let dog = getNextDog()

document.addEventListener("click", function(e) {
    if (e.target.dataset.buttontype) {
        if (e.target.dataset.buttontype === 'logo') {
            location.reload()
        }
        else {
        wasSwiped(e.target.dataset.buttontype)
        }
    }
})



///////////SAFARI BAR HANDLER - RESIZE EVENT///////////////
window.addEventListener("resize", convertStyle)
window.addEventListener("DOMContentLoaded", convertStyle)

///////////INITIAL RENDER///////////////
dogContainer.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%)`
setTimeout(() => renderDogs(), 1500)




///////////TOUCH EVENTS//////////////////
let diffX = 0
let diffY = 0
let swipedWhere = ''

//Start Swipe
dogContainer.addEventListener(events[deviceType].down, (event) => {
    isSwipedTrue()
    //Get X and Y Position
    getXY(event)
    modifyXnY(mouseX, 'mouseX')
    modifyXnY(mouseY, 'mouseY')
  })

  //Mousemove / touchmove
dogContainer.addEventListener(events[deviceType].move, (event) => {
    if (!isTouchDevice()) {
      event.preventDefault()
    }
    if (isSwiped) {
      getXY(event)
      diffX = mouseX - initialX;
      diffY = mouseY - initialY;
      if (Math.abs(diffY) > Math.abs(diffX)) {} 
      else {
        swipedWhere = diffX > 0 ? "Right" : "Left"
        if (swipedWhere === 'Left') {
            dogContainer.style.transform = `rotate(${diffX/10}deg) translate(${diffX*2}px, 0px)`
        }
        else if (swipedWhere === 'Right') {
            dogContainer.style.transform = `rotate(${diffX/10}deg) translate(${diffX*2}px, 0px)`
        }
      }
    }
  })
  //Stop Drawing
  dogContainer.addEventListener(events[deviceType].up, (event) => {
    console.log(event)
    if (diffX === 0) {
        if (event.clientX > document.body.clientWidth/2 || event.touches[0].pageX > document.body.clientWidth/2) {
            dog.nextPhoto()
            renderDogs()
        }
        else if (event.clientX < document.body.clientWidth/2 || event.touches[0].pageX < document.body.clientWidth/2) {
            dog.previousPhoto()
            renderDogs()
        }
    }
    else if (diffX > 110 || diffX < -110) {
        if (swipedWhere === 'Left') {
            wasSwiped('dislike')
        }
        else if (swipedWhere === 'Right') {
            wasSwiped('like')
        }
    }
    dogContainer.style.transform = `translate(0, 0)`
    diffX = 0
    isSwipedFalse()
    swipedWhere = ''
  })
  dogContainer.addEventListener("mouseleave", () => {
    isSwipedFalse()
  })
  window.onload = () => {
    isSwipedFalse()
  }