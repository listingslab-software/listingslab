import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Dialog,

} from '@material-ui/core/'
import {
    Myslogan,
} from './scenes'

const useStyles = makeStyles( theme => ({
    dialog:{
    },
}))

export default function SkipIntro() {

    const classes = useStyles() 
    const skipIntroSlice = useSelector(state => state.skipIntro)
    const {
        open,
        // restart,
    } = skipIntroSlice

    // console.log ( 'restart', restart )

    return <div className={ clsx( classes.skipIntro ) }>
            <Dialog
                className={ clsx( classes.dialog ) }
                open={ open }
                fullScreen
                fullWidth={ true }
                maxWidth={ `xl` }>
                <Myslogan />
            </Dialog>
           </div>
}
