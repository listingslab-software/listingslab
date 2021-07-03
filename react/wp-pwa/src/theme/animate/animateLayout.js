import { 
    gsap,
    Power1,
} from 'gsap'
import { getStore } from '../../'
const duration = 3

const setup = (div, callback, size, timeout) => {
    gsap.delayedCall( 1, delayedStart, [div, callback, size, timeout])
}

const delayedStart = (div, callback, size, timeout) => {
    const client = getStore().getState().app.client
    gsap.to( div , {
        onComplete: callback,
        duration: timeout,
    })
    const { w, h } = client
    const { spriteW, spriteH } = size
    gsap.set(`#branding`, {
        x: w/2 - spriteW/2,
        y: h/2 - spriteH/2,
    })
    gsap.to(`#branding`, {
        opacity: 1,
        onComplete: () => {
            console.log ( 'dont')
        },
        duration: duration,
        ease: Power1.easeIn, 
    })
}


export const animateLayout = (animation, div, callback, size, timeout) => {
    switch (animation) {    
        case `setup`:
            return setup( div, callback, size, timeout )
        default: {
            return null
        }
    }
}
