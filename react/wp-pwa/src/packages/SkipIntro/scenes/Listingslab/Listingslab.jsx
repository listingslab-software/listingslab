import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'
import {
    Sun,
} from './jsxSVG'
// import { animateListingslab } from './'
// import { toggleSkipIntroOpen } from '../../redux/actions'

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

export default function Listingslab() {

    const classes = useStyles() 
    const skipIntroSlice = useSelector(state => state.skipIntro)
    let screenSize = {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
    }

    React.useEffect(() => {
        // animateListingslab(`init`, `#listingslab` ) 
    }, [screenSize, skipIntroSlice])
    
    return <div className={ clsx( classes.skipIntro) }
                    style={{
                        minWidth: screenSize.w,
                        height: screenSize.h,
                        overflow: 'hidden',
                    }}>
                   <div id={`listingslab`} 
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
                    </div>
               </div>
}
