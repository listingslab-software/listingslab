import { 
    gsap,
    Power1,
} from 'gsap'
import { getStore } from '../../'
// import { togglePwaOpen } from '../../redux/app/actions'

const duration = 1
const callbackTimeout = 10

const finish = (callback) => {
    callback()
    return
}

const setup = ( div, size, timeout, callback ) => {
    gsap.delayedCall( 1, step1, [ div, size, timeout, callback ])
}

const step2 = ( div, size, timeout, callback ) => {
     gsap.to(`#localify`, {
        duration,
        ease: Power1.easeOut,
        opacity: 1,
        onComplete: () => {
            gsap.delayedCall( callbackTimeout, finish, [ callback ])
        },
    })
}

const step1 = ( div, size, timeout, callback ) => {
    const client = getStore().getState().app.client
    gsap.to( div , {
        onComplete: callback,
        duration: timeout,
    })
    const { w, h } = client
    const { 
        brandingW, 
        // brandingH,
        timeMachineW,
        timeMachineH, 
    } = size
    gsap.set(`#branding`, {
        x: w/2 - brandingW/2,
        y: 65,
    })
    gsap.set(`#timeMachine`, {
        x: 0 - timeMachineW,
        y: timeMachineH ,
        scale: 0.35,
        rotation: -25,
        opacity: 1,
    })

    gsap.set(`#cannatown`, {
        y: 50,
        width: '100%',
    })

    gsap.to(`#cannatown`, {
        duration: duration,
        opacity: 1,
        y: 25,
        width: '100%',
    })

    gsap.to(`#timeMachine`, {
        duration: duration * 2,
        ease: Power1.easeOut, 
        rotation: 0,
        x: w/2 - timeMachineW/1.5,
        y: h - timeMachineH/1.4 ,
        scale: 0.33,
    })

    gsap.set(`#localify`, {
        x: '6%',
        width: '88%',
        y: 125,
    })

    gsap.to(`#branding`, {
        opacity: 1,
        onComplete: () => {
            gsap.delayedCall( 1, step2, [ div, size, timeout, callback ])
        },
        duration,
        ease: Power1.easeIn, 
    })

}

export const animateLayout = (animation, div, size, timeout, callback) => {
    switch (animation) {    
        case `setup`:
            return setup( div, size, timeout, callback )
        default: {
            return null
        }
    }
}


/*
const step3 = ( div, size, timeout, callback ) => {
    // console.log( 'step3', size)
    // togglePwaOpen( false )
    // const client = getStore().getState().app.client
    // const { w, h } = client

}
*/