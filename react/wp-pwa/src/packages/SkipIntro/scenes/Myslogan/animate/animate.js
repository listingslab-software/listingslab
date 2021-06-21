import { gsap } from 'gsap'

const duration = 0.75

const init = (div, callback) => {

    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight

    gsap.set(`#logo`, {
        opacity: 0,
        x: w/2 - 240,
        y: h/2 - 70,
        scale: 0.25,
    })
    gsap.set(`#skipIntroBtn`, {
        opacity: 0,
        x: w - 250,
        y: h - 50,
    })

    gsap.delayedCall( 0.75, delayedStart, [`oooh`])

}

const delayedStart = () => {
    gsap.to(`#logo`, {
        duration,
        opacity: 1,
        scale: 0.5,
    })
    gsap.to(`#skipIntroBtn`, {
        opacity: 1,
        duration,
        
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


/*
    // gsap.to(div, {
    //     // onComplete: callback,
    // })

    // var tl = gsap.timeline({
    //                   repeat: 2, 
    //                   repeatDelay: 1
    //          });
    // tl.to("#skipIntroBtn", {x: 100, duration: 1});
*/