import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
    Card,
    CardHeader,
} from '@material-ui/core/'
import {
    getFlagSrc,
    getDeviceStr,
    getLocationStr,
    getBrowserSrc,
} from './actions'

// import { Mapbox } from '../../components'

const useStyles = makeStyles( theme => ({
    localify:{
    },
    card: {
        margin: theme.spacing(),
        background: 'none',
        borderRadius: 0,
        boxShadow: 'none',
    },
    htags:{
        fontWeight: 'lighter',
    }
}))

export default function Localify() {

    const classes = useStyles() 
    const localifySlice = useSelector(state => state.localify)
    const {
        individual,
    } = localifySlice
    if (!individual) return null

    return <div className={ clsx( classes.localify ) }>
            <Card className={ clsx( classes.card ) }>
                 <CardHeader
                    action={ <Avatar src={ getBrowserSrc( individual ) } /> }
                    title={ `Who are you?`  }
                    subheader={ getDeviceStr( individual ) }
                />
                <CardHeader
                    action={ <Avatar src={ getFlagSrc( individual ) } /> }
                    title={ `& where do you come from?` }
                    subheader={ getLocationStr ( individual ) }
                />
            </Card>
           </div>        
}
