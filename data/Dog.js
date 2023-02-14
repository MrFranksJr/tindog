import { preLoadAvatars } from "./utils.js"

class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.maxIndex = this.avatar.length
        this.currentIndex = 0
    }
    getDogHtml() {
        preLoadAvatars(this.avatar)
        document.getElementById('dog-container').style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%), url(/${this.avatar[this.currentIndex]}) center / cover`

        let photoDivs = ''
        for (let i=0; i < this.maxIndex; i++) {
            if (i === this.currentIndex) {
                photoDivs = photoDivs + `<label class="active" id="label-${i}" data-dotid="dot${i+1}"></label>`
            }
            else {
                photoDivs = photoDivs + `<label id="label-${i}" data-dotid="dot${i+1}"></label>`
            }
        }
        return `
        <img class="badge" id="badge">
        <div id="dog-data">
            <h2>${this.name}, ${this.age}</h2>
            <h3>${this.bio}</h3>
            <div class="dots">${photoDivs}</div>
        </div>
        `
    }
    wasSwiped(buttonType) {
        this.hasBeenSwiped = true
        if (buttonType === 'like') {
            this.hasBeenLiked = true
        }
    }
    nextPhoto() {
        if (this.currentIndex < this.maxIndex - 1) {
            this.currentIndex ++
        }
    }
    previousPhoto() {
        if (this.currentIndex > 0) {
            this.currentIndex --
        }
    }
}

export default Dog