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
        y: 45,
    })
    gsap.set(`#timeMachine`, {
        x: 0 - timeMachineW,
        y: timeMachineH ,
        scale: 0.35,
        rotation: 15,
        opacity: 1,
    })
    gsap.to(`#timeMachine`, {
        duration,
        ease: Power1.easeOut, 
        rotation: 0,
        x: -50,
        y: h - timeMachineH/1.4 ,
        scale: 0.33,
        
    })

    gsap.set(`#localify`, {
        x: '5%',
        width: '90%',
        y: 110,
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