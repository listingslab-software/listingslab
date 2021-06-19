import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Dialog,
} from '@material-ui/core/'
import {
    AnimatedSVG,
} from './'
import { toggleOpen } from './redux/actions'

const useStyles = makeStyles( theme => ({
    dialog:{
        border: 'none',
        // background: 'none',
    },
}))

export default function SkipIntro() {

    const classes = useStyles() 

    const skipIntroSlice = useSelector(state => state.skipIntro)
    const {
        open,
    } = skipIntroSlice

    return <div className={ clsx( classes.skipIntro ) }>
            <Dialog
                className={ clsx( classes.dialog ) }
                open={ open }
                fullScreen
                fullWidth={ true }
                maxWidth={ `xl` }>
                <AnimatedSVG options={{
                    centerize: true,
                    btnTxt: `Skip Intro?`,
                    borderColor: `rgba(0,0,0,0.25)`,
                    background: `rgba(0,0,0,0.025)`,
                    height: 600,
                    width: 360,
                    onClick: (e) => {
                      e.preventDefault()
                      toggleOpen( false )
                    },
                }}/>
            </Dialog>
           </div>
}
