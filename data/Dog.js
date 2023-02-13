import dogs from '/data/data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        document.getElementById('dog-container').style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%), url(/${this.avatar[0]}) center / cover`

        if (this.avatar.length > 1) {
            let photoRadios = ''
            let photoDivs = ''
            for (let i=0; i < this.avatar.length; i++) {
                if (i === 0) {
                    photoRadios = `<input type="radio" class="radio" name="images" id="image-${i}" checked>`

                    photoDivs = photoDivs + `<label class="active" for="image-${i}" id="label-${i}"></label>`
                }
                else {
                    photoRadios = photoRadios + `<input type="radio" class="radio" name="images" id="image-${i}">`

                    photoDivs = photoDivs + `<label for="image-${i}" id="label-${i}"></label>`
                }
            }
            console.log(photoRadios)
            console.log(photoDivs)
            return `
            ${photoRadios}
            <a title="Previous photo" id="previous" href="#" data-photoevent="previous"></a>
            <a title="Next photo" id="next" href="#" data-photoevent="next"></a>
            <img class="badge" id="badge">
            <div id="dog-data">
                <h2>${this.name}, ${this.age}</h2>
                <h3>${this.bio}</h3>
                <div class="dots">${photoDivs}</div>
            </div>
            `
        }
        else {
            return `
            <img class="badge" id="badge">
            <div id="dog-data">
                <h2>${this.name}, ${this.age}</h2>
                <h3>${this.bio}</h3>
            </div>
            `
        }
        
    }
    wasSwiped(buttonType) {
        this.hasBeenSwiped = true
        if (buttonType === 'like') {
            this.hasBeenLiked = true
        }
    }
}

export default Dog