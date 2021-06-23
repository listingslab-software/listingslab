import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    useTheme,
    Typography,
    IconButton,
} from '@material-ui/core/'
import { 
    animate,
} from './'
import { 
    initAnimation,
    resetAnimation, 
} from '../../redux/actions'
// import Blokey from './jsxSVG/Blokey'
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
                     
                    <div id={`headline`}
                        style={{
                            width: 200,
                            height: 65,
                            position: 'absolute',
                            zIndex: 200,

                        }}>
                        <div
                            style={{
                                margin: 8,
                            }}>
                            <Typography variant={ `h4` } className={ clsx( classes.htags) }>
                                @listingslab
                            </Typography>
                        </div>
                    </div>

                    <div id={`wordpressBtn`} 
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                        }}>
                        <IconButton
                            variant={ `text` }
                            color={ `primary` }
                            onClick={(e) => {
                              e.preventDefault()
                              toggleSkipIntroOpen( false )
                            }}>
                            <Icon icon={`wordpress`}  color={ theme.palette.secondary.main }/>
                        </IconButton>
                    </div>
               
               </div>
}
