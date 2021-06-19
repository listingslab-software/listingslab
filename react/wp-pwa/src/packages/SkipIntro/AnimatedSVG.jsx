import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    // Button,
} from '@material-ui/core/'
import {
    BlueSky,
} from './jsxSVG'

const useStyles = makeStyles( theme => ({
    skipIntro:{
        // border: '1px solid ' + theme.palette.secondary.main,
    },
    htags: {
        fontWeight: 'lighter',
    },
    btnTxt:{
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
    },
    centerize: {
      minHeight: 'calc( 100vh - 75px )',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
    }
}))

export default function AnimatedSVG( props ) {

    const classes = useStyles()
    const {
        options,
    } = props

    const {
        // btnTxt,
        // onClick,
        background,
        borderColor,
        // height,
        // width,
        centerize,
    } = options

    let screenSize = {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    }

    return <div className={ clsx( centerize ? classes.centerize : null ) }>
                <div className={ clsx( classes.skipIntro) }
                    style={{
                        background: background,
                        border: '1px solid ' + borderColor,
                        minWidth: screenSize.w,
                    }}>
                    <BlueSky />
                    
                    
               </div>
           </div>
}










/*



<pre>
                    { JSON.stringify(screenSize, null, 2 ) } 
                    </pre>
*/