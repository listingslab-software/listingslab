import { gsap } from 'gsap'
const duration = 1

const init = (div, callback) => {
    gsap.to(`#clouds`, {
        // onComplete: callback,
        duration: 15 * duration,
        x: -350,
    })
    gsap.set(`#sun`, {
        x: 10,
        y: 10,
        scale: 0.76,
    })
    gsap.to(`#sun`, {
        duration: 10 * duration,
        scale: 0.86,
        // rotation: 25,
    })
}

export const animateScrollingWorld = (animation, div, callback) => {
    
    switch (animation) {    

        case `init`:
            return init(div, callback)
              
        default: {
            return null
        }

    }
}