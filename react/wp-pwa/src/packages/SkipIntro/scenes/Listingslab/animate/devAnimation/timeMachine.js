import { 
    gsap, 
    Power1,
} from 'gsap'

const initTimeMachine = (div, callback) => {
    gsap.set(`#machineDiv`, {
        x: -180,
        y: 175,
        scale: 2,
        rotation: -19,
    })
    gsap.set(`#world1`, {
        x: -938,
    })
    gsap.set(`#world2`, {
        x: 0,
    })
    scrollWorld(`#world1`, ()=>{})
    scrollWorld(`#world2`, ()=>{})
    scrollMachine(`#machineDiv`, ()=>{})
}

const scrollMachine = (div, callback) => {
    gsap.to(div, {
        duration: 20,
        scale: 2.5, 
        x: 525,
        y: 0,
        rotation: 15,
        ease: Power1.easeIn,
        repeat:-1,
    })
}

const scrollWorld = (div, callback) => {
    let x = 0
    if (div === `#world1`) x = 0
    if (div === `#world2`) x = 938
    gsap.to(div, {
        duration: 40, 
        x,
        ease: 'none',
        repeat:-1,
    })
}

export const timeMachine = (animation, div, callback) => {
    
    switch (animation) {

        case `initTimeMachine`:
            return initTimeMachine(div, callback)    
        
        case `scrollWorld`:
            return scrollWorld(div, callback)

        default: {
            return null
        }
    }
}
