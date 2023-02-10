import Dog from '/data/Dog.js'
import dogs from '/data/data.js'
import convertStyle from '/data/utils.js'

const likeBtn = document.getElementById('like-btn')
const dislikeBtn = document.getElementById('dislike-btn')

let dogArray = dogs.sort((a, b) => 0.5 - Math.random())

function getNextDog() {
    const nextDogData = dogArray.shift()

    return nextDogData ? new Dog(nextDogData) : {}
}

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
        dog = getNextDog()
        setTimeout(() => renderDogs(), 1500)
    }
    else {
        setTimeout(() => { 
            document.getElementById('dog-container').innerHTML = `<p class="message">There's no more dogs out there for you to swipe through...<br><img src="/images/sad.svg"></p>`
            document.getElementById('dog-container').style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%)`}
            , 1500)
    }
}

function renderDogs() {
    document.getElementById('dog-container').innerHTML = dog.getDogHtml()
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
document.getElementById('dog-container').style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%)`
setTimeout(() => renderDogs(), 1500)