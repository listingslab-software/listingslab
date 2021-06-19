import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    useTheme,
} from '@material-ui/core/'
import {
    Blokey,
} from './jsxSVG'
import { animate } from './'
import { toggleSkipIntroOpen } from '../../redux/actions'

const useStyles = makeStyles( theme => ({
    skipIntro: {
        // border: '1px solid red',
    },
}))

export default function Listingslab() {

    const classes = useStyles() 
    const theme = useTheme()
    const primaryColor = theme.palette.primary.main
    const skipIntroSlice = useSelector(state => state.skipIntro)
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight

    const exitCallback = () => { 
        toggleSkipIntroOpen( false)
        return false
    }

    const initCallback = () => { 
        // animate(`exit`, `#listingslab`, exitCallback ) 
        toggleSkipIntroOpen( false)
        return false
    }

    React.useEffect(() => {
        // animate(`init`, `#listingslab`, initCallback ) 
    }, [skipIntroSlice])
    
    return <div className={ clsx( classes.skipIntro) }
                    style={{
                        minWidth: w,
                        height: h,
                        overflow: 'hidden',
                    }}>
                   <div id={`listingslab`} 
                        style={{ 
                            width: w,
                            height: h,
                        }}>
                        <div id={`blokey`}
                            style={{
                                position: 'absolute',
                                zIndex: 101,
                                width: 49,
                                height: 59,
                            }}>
                            <Blokey color={ primaryColor } />
                        </div>                     
                    </div>
               </div>
}
