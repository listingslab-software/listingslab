import { gsap } from 'gsap'
const duration = 1
const timeout = 1000

const init = (div, callback) => {

    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight

    // console.log ('init myslogan')

    gsap.to(div, {
        onComplete: callback,
        duration: timeout * duration,
    })

    gsap.set(`#logo`, {
        opacity: 0,
        x: w/2 - 240,
        y: h/2 - 70,
        scale: 0.25,
    })

    gsap.to(`#logo`, {
        opacity: 1,
        duration,
        scale: 0.7,
    })

}


export const animate = (animation, div, callback) => {
    
    switch (animation) {    

        case `init`:
            return init(div, callback)
              
        default: {
            return null
        }
    }
}