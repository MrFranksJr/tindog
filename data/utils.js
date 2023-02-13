const convertStyle = () => {
    const height = window.innerHeight;
    Array.from(document.getElementsByClassName("container")).forEach((element) => {
    element.style.height = `${height}px`
    })
}

const nextPhoto = () => {
    
}

export default convertStyle