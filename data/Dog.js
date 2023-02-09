import dogs from '/data/data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        document.getElementById('dog-container').style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%), url(/${this.avatar}) center / cover`
        return `
        <img class="badge" id="badge">
        <div id="dog-data">
            <h2>${this.name}, ${this.age}</h2>
            <h3>${this.bio}</h3>
        </div>
        `
    }
    wasSwiped(buttonType) {
        this.hasBeenSwiped = true
        if (buttonType === 'like') {
            this.hasBeenLiked = true
        }
    }
}

export default Dog