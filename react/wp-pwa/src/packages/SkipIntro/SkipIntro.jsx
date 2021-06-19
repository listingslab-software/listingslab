import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Dialog,
    Button,
} from '@material-ui/core/'
import {
    AnimatedSVG,
} from './'
import { toggleSkipIntroOpen } from './redux/actions'
import {
    Icon
} from '../../theme'

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
                <Button
                    fullWidth
                    variant={ `text` }
                    color={ `primary` }
                    onClick={(e) => {
                      e.preventDefault()
                      toggleSkipIntroOpen( false )
                    }}>
                    <Icon icon={`skip`} />
                    <span className={ clsx( classes.btnTxt )}>
                        Skip Intro?
                    </span>
                </Button>
                <AnimatedSVG options={{
                    centerize: false,
                    btnTxt: `Skip Intro?`,
                    
                }}/>
            </Dialog>
           </div>
}
