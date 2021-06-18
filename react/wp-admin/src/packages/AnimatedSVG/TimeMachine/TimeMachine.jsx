import React, {useEffect} from 'react'
import { getThemeChoice } from '../../redux/app/actions'
import { getContentByPath } from '../../redux/ssr/actions'
import { getHistory } from './'
import { 
    useSelector,
    useDispatch, 
} from 'react-redux'
import { 
    timeMachine, 
} from './animation/timeMachine'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'
import { 
    World,
    Machine,
} from './graphics'

const useStyles = makeStyles(theme => ({
    stage:{
        // border: '1px solid purple',
        position: 'relative',
        overflow: 'hidden',
        height: 275,
        maxWidth: 700,
    },
    machine: {
        position: 'absolute',
        zIndex: 20,
        width: 216,
    },
    world: {
        position: 'absolute',
        zIndex: 10,
        width: 938,
    },
    label: {
        position: 'absolute',
        zIndex: 50,
    },
    title: {
        position: 'absolute',
        zIndex: 55,
        top: 35,
    },
}))

export default function TimeMachine() {
  
    const history = getHistory()
    const themeChoice = getThemeChoice()
    const classes = useStyles()
    const dispatch = useDispatch()
    const animatedsvgSlice = useSelector(state => state.animatedsvg)
    const {
        initted,
        pathname,
        // scene,
    } = animatedsvgSlice
    let title = ``
    let label = ``
    const content = getContentByPath(history.location.pathname)
    if (content) {
        title = content.data.title
        label = content.data.label
    }
    useEffect(() => {
        if (!initted){
            timeMachine(`initTimeMachine`, `#world`)
            dispatch({type:`ANIMATEDSVG/INIT`, initted: true})
        }
        if (pathname !== history.location.pathname){
            dispatch({type:`ANIMATEDSVG/PATHNAME`, pathname: history.location.pathname})
        }
    })

    return  <React.Fragment>
                <div id={`stage`} className={classes.stage}>


                    <div id={`label`} className={classes.label}>
                        <Typography variant={`h4`}>
                            {label}
                        </Typography>
                    </div>

                    <div id={`title`} className={classes.title}>
                        <Typography variant={`h5`}>
                            {title}
                        </Typography>
                    </div>



                    <div id={`machineDiv`} className={classes.machine}>
                        <Machine themeChoice={themeChoice} />
                    </div>

                    <div id={`world1`} className={classes.world}>
                        <World themeChoice={themeChoice} />
                    </div>
                    <div id={`world2`} className={classes.world}>
                        <World themeChoice={themeChoice} />
                    </div>
                </div>
            </React.Fragment>
}








/*


    if (!running) return <Button
        onClick={(e) => {
            e.preventDefault()
            dispatch({type:`ANIMATEDSVG/INIT`, initted: false})
            setRunning(!running)
        }}>
        
        <span className={classes.btnTxt}>
            Play
        </span>
        <Icon icon={`play`} color={`secondary`} />
    </Button>



<div id={`toggle`} className={classes.toggle}>
    <Button
        onClick={(e) => {
            e.preventDefault()
            setRunning(!running)
        }}>
        <Icon icon={`pause`} color={`secondary`} />
        <span className={classes.btnTxt}>
            Pause
        </span>
    </Button>
</div>
*/