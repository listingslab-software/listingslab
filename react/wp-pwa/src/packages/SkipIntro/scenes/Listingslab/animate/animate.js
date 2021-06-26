import { 
    gsap,
    Power1,
} from 'gsap'

const duration = 1

const init = (div, callback) => {
    reset()
    gsap.to(`#listingslab`, {
        duration: 5,
        onComplete: callback,
    })
    gsap.delayedCall( 0.5, delayedStart, [div, callback])
    // gsap.set(`#localify`, {
    //     opacity: 0,
    // })
    gsap.set(`#headline`, {
        opacity: 0,
    })

    // gsap.set(`#blokey`, {
    //     scale: 0.5,
    // })

}

const reset = () => {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    gsap.set(`#headline`, {
        x: w/2 - 100,
        y: h/2 - 30,
    })
    // gsap.set(`#localify`, {
    //     x: w/2 - 180,
    //     y: h/2 + 100,
    //     opacity: 1,
    // })
}

const delayedStart = (div, callback) => {
    gsap.to(`#headline`, {
        onComplete: () => {
            // moveUp()
            console.log ('wait for completion')
        },
        duration: duration,
        ease: Power1.easeIn,
        opacity: 1,
    })
}

// const moveUp = () => {
//     gsap.to(`#headline`, {
//         duration: duration/2,
//         ease: Power1.easeOut,
//         y: 0,
//         opacity: 0,
//     })
//     gsap.to(`#localify`, {
//         duration: duration/2,
//         ease: Power1.easeOut,
//         y: 60,
//         opacity: 1,
//     })
// }

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
