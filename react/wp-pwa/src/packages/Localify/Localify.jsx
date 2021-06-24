import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core/'
import {
    initLocalify,
    // getFlagSrc,
    getDeviceStr,
    getLocationStr,
} from './actions'

import { Mapbox } from '../../components'


const useStyles = makeStyles( theme => ({
    localify:{
    },
    card: {
        margin: theme.spacing(),
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

    React.useEffect(() => {
        const {
            initted,
            initting,
        } = localifySlice
        if (!initted && !initting) initLocalify()
    }, [ localifySlice ]) 

    if (!individual) return null

    // const {
    //     device,
    // } = individual

    return <div className={ clsx( classes.localify ) }>
            
            <Card className={ clsx( classes.card ) }>




                <CardHeader
                    disableTypography
                    avatar={ <Avatar src={ `/png/localifyIcon.png`} /> }
                    title={ <Typography variant={ `h6` } className={ clsx( classes.htags ) }>
                                @localify
                            </Typography> }
                />

                <CardHeader
                    disableTypography
                    title={ <Typography variant={ `h6` } className={ clsx( classes.htags ) }>
                                Who are you?
                           </Typography> }
                    subheader={ <Typography variant={ `body1` }>
                                 { getDeviceStr( individual ) }
                            </Typography> }
                />

                <CardHeader
                    disableTypography
                    title={ <Typography variant={ `h6` } className={ clsx( classes.htags ) }>
                                Where do you come from?
                            </Typography> }

                    subheader={ <Typography variant={ `body1` }>
                                 { getLocationStr ( individual )}
                            </Typography> }
                />

                <CardContent>
                    <Mapbox />
                </CardContent>
                
            </Card>
            
           </div>        
}

/*
<CardHeader
                    disableTypography
                    avatar={ <Avatar src={ getFlagSrc( individual ) } /> }
                    title={ <Typography variant={ `body1` }>
                                
                            </Typography> }
                />
*/