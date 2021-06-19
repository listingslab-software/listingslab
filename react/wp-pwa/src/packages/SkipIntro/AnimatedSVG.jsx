import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'
import {
    ScrollingWorld,
    CloudsMidLayer,
    Sun,
    House1,
    House2,
    Tree,
} from './jsxSVG'
import { animateScrollingWorld } from './animation'
import { toggleSkipIntroOpen } from './redux/actions'

const useStyles = makeStyles( theme => ({
    skipIntro: {
    },
    htags: {
        fontWeight: 'lighter',
    },
    btnTxt:{
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
    },
}))

const skipIntro = () => {
    toggleSkipIntroOpen( false )
    return true
}

export default function AnimatedSVG( props ) {

    const classes = useStyles() 
    const skipIntroSlice = useSelector(state => state.skipIntro)
    let screenSize = {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
    }

    React.useEffect(() => {
        animateScrollingWorld(`init`, `#scrollingWorld`, skipIntro ) 
    }, [screenSize, skipIntroSlice])

    
    return <div className={ clsx( classes.skipIntro) }
                    style={{
                        minWidth: screenSize.w,
                        height: screenSize.h,
                        overflow: 'hidden',
                    }}>
                    
                   <div id={`animatedSVG`} 
                        style={{ 
                            width: screenSize.w,
                            height: screenSize.h,
                        }}>


                        <div
                            id={`sun`}
                            style={{
                                zIndex: 10021,
                                width: 99,
                                top: 100,
                                position: 'absolute',
                            }}>
                            <Sun />
                        </div> 
                        

                        <div
                            id={`clouds`}
                            style={{
                                zIndex: 10201,
                                width: 700,
                                position: 'absolute',
                            }}>
                            <CloudsMidLayer />
                        </div> 


                        <div
                            id={`tree`}
                            style={{
                                zIndex: 10081,
                                width: 48,
                                position: 'absolute',
                                bottom: 4,
                                right: 16,
                            }}>
                            <Tree />
                            
                        </div> 

                        <div
                            id={`house2`}
                            style={{
                                zIndex: 10031,
                                width: 106,
                                position: 'absolute',
                                bottom: 0,
                                left: 64,
                            }}>
                            <House2 />
                            
                        </div> 
                        <div
                            id={`house1`}
                            style={{
                                zIndex: 10011,
                                width: 74,
                                position: 'absolute',
                                left: 8,
                                bottom: 0,
                            }}>
                            <House1 />

                        </div> 


                        <div
                            id={`scrollingWorld`}
                            style={{
                                postition: `absolute`,
                                width: 900,
                                zIndex: 9999,
                            }}>
                            <ScrollingWorld color={{
                                bg: `white`,
                                cloud: `white`,
                            }} />
                        </div>  
                        
                    </div>
               </div>
}
