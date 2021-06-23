import { gsap } from 'gsap'

const duration = 0.75

const init = (div, callback) => {
    reset()
    gsap.delayedCall( 0.75, delayedStart, [`oooh`])
    gsap.set(`#listingslabTxt`, {
        opacity: 0,
    })
    gsap.set(`#blokey`, {
        opacity: 0,
    })
    gsap.set(`#skipIntroBtn`, {
        opacity: 0,
    })
}

const reset = (div, callback) => {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    gsap.set(`#listingslabTxt`, {
        x: w/2 - 240,
        y: 20,
        scale: 0.5,
    })
    gsap.set(`#blokey`, {
        x: w/2 - 180,
        y: 40,
    })
    gsap.set(`#skipIntroBtn`, {
        x: w - 150,
        y: h - 50,
    })
}


const delayedStart = () => {
    gsap.to(`#blokey`, {
        duration: duration * 1,
        opacity: 1,
    })
    gsap.to(`#listingslabTxt`, {
        duration: duration * 2,
        opacity: 1,
    })
    gsap.to(`#skipIntroBtn`, {
        opacity: 1,
        duration: duration * 3, 
    })
}

export const animate = (animation, div, callback) => {
    
    switch (animation) {    

        case `init`:
            return init(div, callback)

        case `reset`:
            return reset(div, callback)

        default: {
            return null
        }
    }
}
