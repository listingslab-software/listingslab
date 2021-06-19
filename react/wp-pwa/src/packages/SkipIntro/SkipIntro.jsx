import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Dialog,
} from '@material-ui/core/'
import {
    AnimatedSVG,
} from './'

const useStyles = makeStyles( theme => ({
    dialog:{
        border: 'none',
        // background: 'none',
    },
}))

export default function SkipIntro() {

    const classes = useStyles() 
    return <div className={ clsx( classes.skipIntro ) }>
            <Dialog
                open
                fullScreen
                fullWidth={ true }
                maxWidth={ `xl` }        
                className={ clsx( classes.dialog ) }
            >
                <AnimatedSVG options={{
                    centerize: true,
                    title: `SkipIntro`,
                    btnTxt: `Click Me`,
                    onClick: (e) => {
                      e.preventDefault()
                      console.log ('clicked me')
                    },
                    borderColor: `orange`,
                    background: `yellow`,
                    height: 400,
                    width: 400,
                }}/>

            </Dialog>
           </div>
}
