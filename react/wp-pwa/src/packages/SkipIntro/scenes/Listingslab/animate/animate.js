import { 
    gsap,
    Power1,
} from 'gsap'

const duration = 1

const init = (div, callback) => {
    reset(div, callback)
    gsap.delayedCall( 0.5, delayedStart, [div, callback])

    gsap.set(`#localify`, {
        opacity: 0,
    })

    gsap.set(`#headline`, {
        opacity: 0,
    })
    gsap.set(`#wordpressBtn`, {
        opacity: 0,
    })
    gsap.to(`#listingslab`, {
        duration: 5,
        onComplete: callback,
    })
}

const reset = (div, callback) => {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    gsap.set(`#headline`, {
        x: w/2 - 100,
        y: h/2 - 30,
    })
    gsap.set(`#wordpressBtn`, {
        bottom: 5,
        right: 5,
    })
    gsap.set(`#localify`, {
        x: w/2 - 180,
        y: h/2 + 100,
        opacity: 1,
    })
}


const delayedStart = (div, callback) => {
    gsap.to(`#headline`, {
        onComplete: () => {
            moveUp()
        },
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

const moveUp = () => {
    gsap.to(`#headline`, {
        duration: duration/2,
        ease: Power1.easeOut,
        y: 0,
    })
    gsap.to(`#localify`, {
        duration: duration/2,
        ease: Power1.easeOut,
        y: 60,
        opacity: 1,
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
