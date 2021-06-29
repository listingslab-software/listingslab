import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
    Card,
    CardHeader,
    Typography,
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
        background: 'white',
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
                    disableTypography
                    avatar={ <Avatar src={ getBrowserSrc( individual ) } /> }
                    title={ <Typography variant={ `h6` } className={ clsx( classes.htags ) }>
                                Who are you?
                           </Typography> }
                    subheader={ <Typography variant={ `body1` }>
                                 { getDeviceStr( individual ) }
                            </Typography> }
                />
                <CardHeader
                    disableTypography
                    avatar={ <Avatar src={ getFlagSrc( individual ) } /> }
                    title={ <Typography variant={ `h6` } className={ clsx( classes.htags ) }>
                                & where do you come from?
                            </Typography> }
                    subheader={ <Typography variant={ `body1` }>
                                 { getLocationStr ( individual )}
                            </Typography> }
                />
            </Card>
            
           </div>        
}
