import { 
    gsap,
    Power1,
} from 'gsap'

const duration = 1.75

const init = (div, callback) => {
    reset()
    gsap.delayedCall( 0.5, delayedStart, [`oooh`])
    gsap.set(`#headline`, {
        opacity: 0,
    })
    gsap.set(`#wordpressBtn`, {
        opacity: 0,
    })
}

const reset = (div, callback) => {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    gsap.set(`#headline`, {
        x: w/2 - 100,
        y: h/2 - 30,
        // scale: 0.4,
    })
    gsap.set(`#wordpressBtn`, {
        bottom: 5,
        right: 5,
    })
}


const delayedStart = () => {

    gsap.to(`#headline`, {
        duration: duration,
        ease: Power1.easeIn,
        opacity: 1,
    })
    gsap.to(`#wordpressBtn`, {
        opacity: 1,
        ease: Power1.easeIn,
        duration: duration, 
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
