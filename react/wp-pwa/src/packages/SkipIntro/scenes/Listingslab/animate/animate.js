import { gsap } from 'gsap'
const duration = 1

const init = (div, callback) => {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight

    gsap.to(div, {
        onComplete: callback,
        duration: 3 * duration,
    })
    
    gsap.set(`#blokey`, {
        scale: 0.3,
        opacity: 0,
        x: w/2 - 25,
        y: h/2 - 100,
    })
    
    setInterval(() => {
        gsap.to(`#blokey`, {
            duration: 1 * duration,
            scale: 2,
            opacity: 1,
        })
    } ,750)
}

const exit = (div, callback) => {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    console.log ('exit')
    gsap.to(`#blokey`, {
        onComplete: callback,
        scale: 0.3,
        opacity: 0,
        x: w/2 - 25,
        y: h/2 - 100,
    })
}

export const animate = (animation, div, callback) => {
    
    switch (animation) {    

        case `init`:
            return init(div, callback)

        case `exit`:
            return exit(div, callback)
              
        default: {
            return null
        }
    }
}