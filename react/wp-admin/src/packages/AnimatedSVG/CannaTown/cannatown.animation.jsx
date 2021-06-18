import { 
    gsap, 
    Power1,
} from 'gsap'
import { getThemeChoice } from '../../../redux/app/actions'

const init = (div, callback) => {
    const themeChoice = getThemeChoice()

    gsap.set(`#tree-1`, {
        y: 200,
        x: 200,
        rotation: 0,
    })
    gsap.set(`#house-2`, {
        y: 190,
        x: 52,
        rotation: -1,
    })

    gsap.set(`#house-1`, {
        y: 110,
        x: 150,
        rotation: -2,
    })
    gsap.set(`#house-2`, {
        y: 190,
        x: 52,
        rotation: -1,
    })

    gsap.set(`#clouds-mid-left`, {
        x: -700,
    })
    gsap.set(`#clouds-mid-right`, {
        x: 0,
    })
    scrollWorld(`#clouds-mid-left`, ()=>{})
    scrollWorld(`#clouds-mid-right`, ()=>{})
    
    if (themeChoice === `light`){
        spinSun()
    }
    
}

const spinSun = () => {
    gsap.to(`#sun`, {
        transformOrigin: '50% 50%', 
        duration: 10,
        rotation: 360,
        ease: Power1.easeIn,
        repeat:-1,
    })
}

const scrollWorld = (div, callback) => {
    let x
    if (div === `#clouds-mid-left`) x = 0
    if (div === `#clouds-mid-right`) x = 700
    gsap.to(div, {
        x,
        duration: 120, 
        ease: 'none',
        repeat:-1,
    })
}

export const cannatown = (animation, div, callback) => {
    
    switch (animation) {

        case `init`:
            return init(div, callback)    
        
        case `scrollWorld`:
            return scrollWorld(div, callback)

        default: {
            return null
        }
    }
}
