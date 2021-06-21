import React from 'react'
import mysloganSrc from'./myslogan.png'
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
} from '../../redux/actions'
import {
    Icon
} from '../../../../theme'

const useStyles = makeStyles( theme => ({
    skipIntro: {
        background: '#28383f',
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

    React.useEffect(() => {
        const {
            animating,
        } = skipIntroSlice
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
                        // minWidth: w,
                        // height: h,
                    }}>

                     <div className={ clsx( classes.cta ) }>
                        <Button
                            variant={ `text` }
                            color={ `secondary` }
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

                   <div id={`myslogan`} 
                        style={{ 
                            // width: w,
                            // height: h,
                        }}>
                        <div id={`logo`}
                            style={{
                                position: 'absolute',
                                zIndex: 101,
                            }}>
                            <img src={ mysloganSrc } alt={ `myslogan logo` } />
                        </div>                     
                    </div>
               </div>
}
