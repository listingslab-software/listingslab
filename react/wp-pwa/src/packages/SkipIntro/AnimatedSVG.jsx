import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Button,
} from '@material-ui/core/'

const useStyles = makeStyles( theme => ({
    skipIntro:{
        // border: '1px solid ' + theme.palette.secondary.main,
    },
    htags: {
        fontWeight: 'lighter',
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
        btnTxt,
        onClick,
        background,
        borderColor,
        height,
        width,
        centerize,
    } = options

    return <div className={ clsx( centerize ? classes.centerize : null ) }>
                <div className={ clsx( classes.skipIntro) }
                    style={{
                        background: background,
                        border: '1px solid ' + borderColor,
                        height,
                        minWidth: width,
                    }}>
                    <Button
                        variant={ `contained` }
                        color={ `primary` }
                        onClick={ onClick }>
                        { btnTxt }
                    </Button>
               </div>
           </div>
}
