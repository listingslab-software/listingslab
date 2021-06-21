import React from 'react'
import mysloganSrc from'./png/myslogan.png'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    // useTheme,
    Button,
} from '@material-ui/core/'

import { animate } from './'
import { 
    toggleSkipIntroOpen,
    setAnimating,
    loadPosts,
} from '../../redux/actions'
import {
    Icon
} from '../../../../theme'

const useStyles = makeStyles( theme => ({
    skipIntro: {
        background: '#28383f',
    },
    btnTxt:{
        marginRight: theme.spacing(),
        marginLeft: theme.spacing(),
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

    const { client } = appSlice
    if (!client) return null
    const {
        w,
        h,
    } = client

    React.useEffect(() => {
        const {
            animating,
            postsLoading,
            postsLoaded,
            // posts,
        } = skipIntroSlice
        if (!postsLoading && !postsLoaded){
            loadPosts( `https://rhps.com.au/wp-json/wp/v2/posts`  )
        }
        if ( !animating ){
            animate(`init`, `#myslogan`, initCallback )
            setAnimating( true )
        }
    }, [ skipIntroSlice ])

    const initCallback = () => { 
        console.log ( 'initCallback.' )
        // animate(`exit`, `#listingslab`, exitCallback ) 
        // toggleSkipIntroOpen( false)
        return true
    }
    
    return <div className={ clsx( classes.skipIntro) }
                    style={{ 
                        overflow: 'hidden',
                        minWidth: w,
                        height: h,
                    }}>
                     
                     <div 
                         id={`skipIntroBtn`} 
                         className={ clsx( classes.cta ) }>
                            <Button
                                variant={ `outlined` }
                                color={ `secondary` }
                                onClick={(e) => {
                                  e.preventDefault()
                                  toggleSkipIntroOpen( false )
                                }}>
                                <span className={ clsx( classes.btnTxt )}>
                                    WordPress Version
                                </span>
                                <Icon icon={`wordpress`}  color={ `white` }/>
                            </Button>
                    </div>

                    <div id={`logo`}
                        style={{
                            position: 'absolute',
                            zIndex: 101,
                        }}>
                        <img src={ mysloganSrc } alt={ `myslogan logo` } />
                    </div>
               </div>
}
