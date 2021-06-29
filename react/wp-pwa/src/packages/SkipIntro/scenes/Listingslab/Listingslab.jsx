import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    useTheme,
    Typography,
} from '@material-ui/core/'
import { 
    animate,
} from './'
import { 
    initAnimation,
    resetAnimation,
} from '../../redux/actions'
import { openFeedback } from '../../../../redux/app/actions'
import Blokey from './jsxSVG/Blokey'
import { 
    RecentPosts,
} from '../../../../components'
import {
    Localify,
} from '../../../../packages'



const useStyles = makeStyles( theme => ({
    skipIntro: {
        // background: '#eee',
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
    const localifySlice = useSelector(state => state.localify)
    const wordpressReducer = useSelector(state => state.wordpress)
    const theme = useTheme()
    
    const { individual } = localifySlice
    if ( individual ) animate(`fadeTitle`)

    const { client } = appSlice
    if (!client) return null
    const {
        w,
        h,
    } = client

    React.useEffect(() => {
        const { pwaData } = wordpressReducer 
        if ( !pwaData ) {
            openFeedback({
                severity: `error`, 
                message: `Warning - no pwaData`,
            })
            // toggleSkipIntroOpen( false )
        }
    }, [ wordpressReducer ])

    React.useEffect(() => {
        const { 
            initted,
            reset,
        } = skipIntroSlice        
        if ( !initted ){ 
            animate(`init`, `#listingslab`, () => {
                // console.log ('DAMN.')
            })
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
                    

                    <div id={`recentPosts`}
                        style={{
                            position: 'absolute',
                            zIndex: 400,
                        }}>
                        <RecentPosts />
                    </div>

                    <div id={`localify`}
                        style={{
                            position: 'absolute',
                            zIndex: 300,
                        }}>
                        <Localify />
                    </div>

                    <div id={`headline`}
                        style={{
                            height: 65,
                            width: 350,
                            position: 'absolute',
                            zIndex: 200,

                        }}>
                            <Typography variant={ `h4` } style={{
                                        width: 301,
                                        left: 49,
                                        fontWeight: 'lighter',
                                        height: 59,
                                        position: 'absolute',
                                        zIndex: 300,
                                    }}>
                                @listingslab
                            </Typography>

                            <Blokey id={`blokey`} 
                                    color= { theme.palette.primary.main }
                                    style={{
                                        left: 0,
                                        width: 36,
                                        height: 36,
                                        position: 'absolute',
                                        zIndex: 400,
                                    }} />
                    </div>
               </div>
}
