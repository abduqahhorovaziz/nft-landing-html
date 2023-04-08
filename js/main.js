function parallax(e) {
    let x = e.clientX
    let y = e.clientY
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    x = (x / windowWidth) * 2 - 1
    y = (y / windowHeight) * 2 - 1
    const elements = document.querySelectorAll('[data-parallax]')
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const elementX = element.getAttribute('data-parallax-x') || 20
        const elementY = element.getAttribute('data-parallax-y') || 20
        element.style.transform = `translateX(${
            x * elementX + 'px'
        }) translateY(${y * elementY + 'px'})`
    }
}

window.addEventListener('mousemove', parallax)
