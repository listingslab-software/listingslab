import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    useTheme,
    Typography,
    Button,
} from '@material-ui/core/'
import { 
    animate,
} from './'
import { 
    initAnimation,
    resetAnimation, 
} from '../../redux/actions'
import Blokey from './jsxSVG/Blokey'
import { 
    toggleSkipIntroOpen,
} from '../../redux/actions'
import {
    Icon
} from '../../../../theme'

const useStyles = makeStyles( theme => ({
    skipIntro: {
        // background: '#28383f',
    },
    btnTxt:{
        marginRight: theme.spacing(),
        marginLeft: theme.spacing(),
    },
    htags: {
        fontWeight: 'lighter',
    },
    ctaBtn:{
        borderRadius: 0,
        boxShadow: 'none',
    },
}))

export default function Myslogan() {

    const classes = useStyles() 
    const appSlice = useSelector(state => state.app)
    const skipIntroSlice = useSelector(state => state.skipIntro)
    const theme = useTheme()

    const { client } = appSlice
    if (!client) return null
    const {
        w,
        h,
    } = client

    React.useEffect(() => {
        const { 
            initted,
            reset,
        } = skipIntroSlice        
        if ( !initted ){ 
            animate(`init`, `#listingslab` )
            initAnimation( true )
        }
        if (reset) {
            animate( `reset`, `#listingslab` )
            resetAnimation ( false )
        }
    }, [ skipIntroSlice ])

    
    return <div id={`listingslab`} className={ clsx( classes.skipIntro) }
                    style={{ 
                        overflow: 'hidden',
                        minWidth: w,
                        height: h,
                    }}>
                     
                    <div id={`blokey`}
                            style={{
                                position: 'absolute',
                                zIndex: 1102,
                                width: 49,
                                height: 59,
                            }}>
                        <Blokey color={ theme.palette.secondary.main } />
                    </div>

                    <div id={`listingslabTxt`}
                        style={{
                            position: 'absolute',
                            zIndex: 101,
                        }}>
                        <Typography variant={ `h1` }>
                            @listingslab
                        </Typography>
                    </div>

                    <div id={`description`}
                        style={{
                            position: 'absolute',
                            zIndex: 126,
                        }}>
                        <Typography variant={ `h5` } className={ clsx( classes.htags) }>
                            Progressive WordPress Apps
                        </Typography>
                    </div>

                    <div id={`skipIntroBtn`} style={{
                            position: 'absolute',
                            zIndex: 10,
                        }}>
                            <Button
                                variant={ `text` }
                                color={ `primary` }
                                onClick={(e) => {
                                  e.preventDefault()
                                  toggleSkipIntroOpen( false )
                                }}>
                                <span className={ clsx( classes.btnTxt )}>
                                    WordPress
                                </span>
                                <Icon icon={`wordpress`}  color={ theme.palette.secondary.main }/>
                            </Button>
                    </div>
               </div>
}
