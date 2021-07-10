import { 
    gsap,
    Power1,
} from 'gsap'
import { getStore } from '../../'
// import { togglePwaOpen } from '../../redux/app/actions'

const duration = 1

const setup = ( div, size, timeout, callback ) => {
    gsap.delayedCall( 1, step1, [ div, size, timeout, callback ])
}

const step2 = ( div, size, timeout, callback ) => {
    gsap.to(`#branding`, {
        duration,
        ease: Power1.easeOut,
        opacity: 0,
        onComplete: () => {
            console.log ( 'DONE' )
            // gsap.delayedCall( 1, step3, [ div, size, timeout, callback ])
        },
    })
     gsap.to(`#localify`, {
        duration,
        ease: Power1.easeOut,
        opacity: 1,
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
        brandingH,
        timeMachineW,
        timeMachineH, 
    } = size
    gsap.set(`#branding`, {
        x: w/2 - brandingW/2,
        y: h/2 - brandingH/2,
    })
    gsap.set(`#timeMachine`, {
        x: 0 - timeMachineW,
        y: timeMachineH / 2 ,
        scale: 0.35,
        rotation: 15,
        opacity: 1,
    })
    gsap.to(`#timeMachine`, {
        duration,
        ease: Power1.easeOut, 
        rotation: 0,
        x: w/2 - timeMachineW/2 - 36,
        y: h - timeMachineH/1.4 ,
        scale: 0.33,
        
    })
    gsap.set(`#localify`, {
        x: 0,
        y: 25,
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