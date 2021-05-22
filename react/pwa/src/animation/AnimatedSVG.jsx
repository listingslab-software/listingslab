import React from 'react'
import './style.css'
import {
    animateScrollingWorld,
    ScrollingWorld,
} from './'

export default function AnimatedSVG(props) {
    
    const { options } = props

    let display = 'fixed' // responsive || fixed
    let width = 800
    let height = 450

    if (options){
        display = options.display
        width = options.width
        height = options.height
    }

    
    React.useEffect(() => {
        animateScrollingWorld(`first`, `#scrollingWorld`)    
    })
    if (!options) {
        console.warn ('You need to pass <AnimatedSVG /> an options prop')
        return null
    }
    return	<React.Fragment>

                <div id={`animatedSVG`} 
                    className={ display === `fixed` ? `displayFixed` : `displayResponsive` }
                    style={{ 
                        width: display === `fixed` ? width : `100%`,
                        height,
                    }}>
                    <div
                        id={`scrollingWorld`}
                        style={{
                            postition: `absolute`,
                            width: 3200,
                        }}
                    >
                        <ScrollingWorld />
                    </div>       
    			</div>



            </React.Fragment>
}	