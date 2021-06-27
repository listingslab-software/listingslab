import { 
    gsap,
    Power1,
} from 'gsap'

const duration = 0.75

const delayedStart = (div, callback) => {
    gsap.to(`#headline`, {
        duration: duration,
        ease: Power1.easeIn,
        opacity: 1,
    })    
}

const init = (div, callback) => {
    reset()
    gsap.to(`#listingslab`, {
        duration: 5,
        onComplete: callback,
    })
    gsap.delayedCall( 0.5, delayedStart, [div, callback])
    gsap.set(`#headline`, {
        opacity: 0,
    })
    gsap.set(`#pwaData`, {
        opacity: 0,
    })
}


const fadeTitle = (div, callback) => {
    gsap.to(`#pwaData`, {
        duration,
        ease: Power1.easeIn,
        opacity: 1,
    })
    gsap.to(`#headline`, {
        duration,
        opacity: 0,
    })
}

const reset = () => {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    gsap.set(`#headline`, {
        x: w/2 - 100,
        y: h/2 - 30,
    })
    gsap.set(`#pwaData`, {
        x: 0,
        y: 65,
    })
}

export const animate = (animation, div, callback) => {
    switch (animation) {    
        case `init`:
            return init(div, callback)
        case `fadeTitle`:
            return fadeTitle(div, callback)
        case `reset`:
            return reset(div, callback)
        default: {
            return null
        }
    }
}
