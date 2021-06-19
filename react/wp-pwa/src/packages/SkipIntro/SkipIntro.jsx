import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Dialog,
    Button,
} from '@material-ui/core/'
import {
    Listingslab,
} from './scenes'
import { toggleSkipIntroOpen } from './redux/actions'
import {
    Icon
} from '../../theme'

const useStyles = makeStyles( theme => ({
    dialog:{
    },
    cta:{
        // border: '1px solid red',
    },
    ctaBtn:{
        borderRadius: 0,
        boxShadow: 'none',
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

                <div className={ clsx( classes.cta ) }>
                    <Button
                        className={ clsx( classes.ctaBtn )}
                        fullWidth
                        variant={ `text` }
                        color={ `primary` }
                        size={ `large` }
                        onClick={(e) => {
                          e.preventDefault()
                          toggleSkipIntroOpen( false )
                        }}>
                        <span className={ clsx( classes.btnTxt )}>
                            Skip Intro
                        </span>
                        <Icon icon={`skip`}  color={ `inherit` }/>
                    </Button>
                </div>

                <Listingslab />
            </Dialog>
           </div>
}
