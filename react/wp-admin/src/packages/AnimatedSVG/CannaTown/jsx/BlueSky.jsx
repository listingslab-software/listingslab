import React from 'react'
import { getThemeChoice } from '../../../../redux/app/actions'
// import {
//   useTheme,
// } from '@material-ui/core'

const BlueSky = props => {

    // const theme = useTheme()
    const themeChoice = getThemeChoice()
    // console.log ('BlueSky', themeChoice)
    // theme.palette.background.default
    let gradient = {
        colorTop: `#DAEFF3`,
        colorBottom: `#6EC1D4`,
    }
    if (themeChoice === `dark`){
        gradient = {
            colorTop: `#006d73`,
            colorBottom: `#015357`,
        }
    }

    return (
        <React.Fragment>
            <svg viewBox="0 0 700 275" >
                

                <defs>
                    <radialGradient cx="50%" cy="113.628884%" fx="50%" fy="113.628884%" r="137.700215%" gradientTransform="translate(0.500000,1.136289),scale(0.392857,1.000000),rotate(180.000000),scale(1.000000,0.722875),translate(-0.500000,-1.136289)" id="radialGradient-1">
                        <stop stopColor={gradient.colorTop} offset="0%"></stop>
                        <stop stopColor={gradient.colorBottom} offset="100%"></stop>
                    </radialGradient>
                </defs>
                <g id="CannaTown" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="BlueSky">
                        <polygon id="blue-sky" fill="url(#radialGradient-1)" points="0 275 700 275 700 0 0 0"></polygon>
                        
                    </g>
                </g>


            </svg>
        </React.Fragment>
    )
}

export default BlueSky