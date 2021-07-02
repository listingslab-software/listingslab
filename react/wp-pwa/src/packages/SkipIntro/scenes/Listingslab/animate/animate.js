import { 
    gsap,
    Power1,
} from 'gsap'
import { getStore } from '../../../../../'

const duration = 0.66

const reset = () => {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    const isAdmin = getStore().getState().wordpress.pwaData.isAdmin
    const isMobile = getStore().getState().app.isMobile   
    let topOffset = 0
    if ( isAdmin ){
        topOffset = 34
        if ( w < 781 ){
            topOffset = 44
        }
    }
    gsap.set(`#progress`, {
        y: topOffset,
    })
    gsap.set(`#logo`, {
        x: w/2 - 100,
        y: h/2 - topOffset - 25,
    })
    if (!isMobile){
        gsap.set(`#siteHeader`, {
            x: 0,
            y: topOffset,
            width: ((w/3) * 2) + 8,
        })
        gsap.set(`#sidebar`, {
            y: topOffset,
            x: w - w/3,
            width: w/3,
        })
    } else {
        gsap.set(`#siteHeader`, {
            y: topOffset,
            width: '100%',
            // border: '1px solid green',
        })
    }
}

const delayedStart = (div, callback) => {
    gsap.to(`#logo`, {
        duration: duration,
        ease: Power1.easeIn,
        opacity: 1,
    })    
}

const init = (div, callback) => {
    reset()
    gsap.set(`#logo`, {
        opacity: 0,
    })
    gsap.set(`#siteHeader`, {
        opacity: 0,
    })
    gsap.set(`#sidebar`, {
        opacity: 0,
    })
    gsap.delayedCall( 0.5, delayedStart, [div, callback])
}

const fadeTitle = (div, callback) => {
    gsap.to(`#siteHeader`, {
        duration,
        ease: Power1.easeIn,
        opacity: 1,
    })
    const isMobile = getStore().getState().app.isMobile  
    if (!isMobile){
        gsap.to(`#sidebar`, {
            opacity: 1,
        })
    }
    gsap.to(`#logo`, {
        duration,
        opacity: 0,
    })
    gsap.to(`#progress`, {
        duration,
        opacity: 0,
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
