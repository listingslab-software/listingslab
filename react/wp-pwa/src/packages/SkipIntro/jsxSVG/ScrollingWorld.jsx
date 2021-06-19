import React from 'react'

const ScrollingWorld = props => {
    const { color } = props
    let bgColor = `white`
    // let cloudColor = `black`
    if (color) {
        const  {
            bg,
            // cloud,
        } = color
        if ( bg ) bgColor = bg
        // if ( cloud ) cloudColor = cloud
    }
    return <React.Fragment>
            <svg {...props} viewBox="0 0 900 1000" >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="bg" fill={ bgColor } x="0" y="0" width="900" height="1000"></rect>
            </g>
            </svg>
        </React.Fragment>
}

export default ScrollingWorld
