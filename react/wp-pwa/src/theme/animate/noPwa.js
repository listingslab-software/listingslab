import { 
    gsap,
    Power1,
} from 'gsap'
import { getStore } from '../../'

const duration = 1
const callbackTimeout = 5

const start = ( div, size, timeout, callback ) => {
    console.log ('start')
    setTimeout( () => { 
        startingPositions( div, size, timeout, callback)
    } , 1000)
    // gsap.delayedCall( 1000, startingPositions, [ div, size, timeout, callback ])
    return true
}

const startingPositions = ( div, size, timeout, callback ) => {
    
    const client = getStore().getState().app.client
    const { w, h } = client
    console.warn ('startingPositions please', w, h)

    gsap.set(`#timemachineBtn`, {
        x: -200,
        y: -200,
        scale: 0.35,
        rotation: -25,
        opacity: 1,
    })

    gsap.to(`#timemachineBtn`, {
        duration,
        ease: Power1.easeOut,
        scale: 0.6,
        x: w,
        y: h/1.7,
        rotation: 0,
        onComplete: () => {
            gsap.delayedCall( callbackTimeout, finish, [ callback ])
        },
    })

}

export const noPwa = (animation, div, size, timeout, callback) => {
    switch (animation) {    
        case `start`:
            return start( div, size, timeout, callback )
        default: {
            return null
        }
    }
}

const finish = (callback) => {
    callback()
    return
}