export { convertStyle, preLoadAvatars, isTouchDevice, deviceType, events, getXY, mouseX, mouseY, initialX, initialY, isSwiped, modifyXnY, isSwipedTrue, isSwipedFalse, resetXnY }

const convertStyle = () => {
    const height = window.innerHeight;
    Array.from(document.getElementsByClassName("container")).forEach((element) => {
    element.style.height = `${height}px`
    })
}

function preLoadAvatars(avatarArray) {
    let imageArray = new Array()
    for (let i=0; i < avatarArray.length; i++) {
        imageArray[i]
    }
}

////////////////////////////////TOUCH EVENTS////////////////////////////////
const dogContainer = document.getElementById('dog-container')

let isSwiped

let mouseX,
  initialX = 0
let mouseY,
  initialY = 0

let events = {
    mouse: {
      down: "mousedown",
      move: "mousemove",
      up: "mouseup",
    },
    touch: {
      down: "touchstart",
      move: "touchmove",
      up: "touchend",
    }
}

let deviceType = ""

const isTouchDevice = () => {
    try {
        //We try to create TouchEvent (it would fail for desktops and throw error)
        document.createEvent("TouchEvent")
        deviceType = "touch"
        return true
    } catch (e) {
        deviceType = "mouse"
        return false
    }
}

//Get left and top of dogContainer
let rectLeft = dogContainer.getBoundingClientRect().left
let rectTop = dogContainer.getBoundingClientRect().top

//Get Exact X and Y position of mouse/touch
const getXY = (e) => {
    mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft
    mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop
  }
isTouchDevice()


//Modify X and Y mouse position on demand
function modifyXnY(value, string) { 
    if (string === 'mouseX'){
        initialX = value
    }
    else if (string === 'mouseY') {
        initialY = value
    }
}

function resetXnY() {
mouseX,
  initialX = 0
mouseY,
  initialY = 0
}

//set isSwiped true
const isSwipedTrue = () => isSwiped = true

//set isSwiped false
const isSwipedFalse = () => isSwiped = false

//////////////////////////TOUCH EVENTS END//////////////////////////////