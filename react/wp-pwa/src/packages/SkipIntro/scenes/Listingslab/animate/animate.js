import { 
    gsap,
    Power1,
} from 'gsap'
import { getStore } from '../../../../../'

const duration = 0.8


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
    gsap.set(`#localify`, {
        opacity: 0,
    })
}

const fadeTitle = (div, callback) => {
    gsap.to(`#localify`, {
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
    const isAdmin = getStore().getState().wordpress.pwaData.isAdmin
    let topOffset = 0

    if ( isAdmin ){
        topOffset = 30
        if ( w < 781 ){
            topOffset = 44
        }
    }

    gsap.set(`#headline`, {
        x: w/2 - 100,
        y: h/2,
    })
    gsap.set(`#localify`, {
        x: 0,
        y: topOffset,
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
