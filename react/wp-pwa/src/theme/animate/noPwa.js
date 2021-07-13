import { 
    gsap,
    Power1,
} from 'gsap'
import { getStore } from '../../'

const duration = 1
const callbackTimeout = 5

const start = ( div, size, timeout, callback ) => {
    // console.log ('start')
    setTimeout( () => { 
        startingPositions( div, size, timeout, callback)
    } , 100)
    return true
}

const startingPositions = ( div, size, timeout, callback ) => {
    
    const client = getStore().getState().app.client
    const { w, h } = client
    // console.warn ('startingPositions please', w, h)

    gsap.set(`#timemachineBtn`, {
        x: -100,
        y: h - h/2.5,
        rotation: 45,
        scale: 0.1,
        
    })

    gsap.to(`#timemachineBtn`, {
        duration: duration * 2,
        ease: Power1.easeOut,
        scale: 0.33,
        x: w/1.02,
        y: h/1.6,
        rotation: 0,
        opacity: 1,
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