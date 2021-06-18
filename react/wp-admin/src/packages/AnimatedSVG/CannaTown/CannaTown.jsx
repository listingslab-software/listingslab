import React, {useEffect} from 'react'
import { getContentByPath } from '../../../redux/ssr/actions'
import { getThemeChoice } from '../../../redux/app/actions'
import { getStore } from '../../../'
import { getHistory } from '../'
import { 
    useSelector,
    useDispatch, 
} from 'react-redux'
import { 
    cannatown, 
} from './cannatown.animation'
import {
  makeStyles,
  Typography,
  IconButton,
} from '@material-ui/core'
import { 
    BlueSky,
    CloudsMidLayer,
    Sun,
    House1,
    House2,
    Tree,
} from './'
import {
    Icon,
} from '../../../components'

const useStyles = makeStyles(theme => ({
    stage:{
        position: 'relative',
        overflow: 'hidden',
        maxWidth: 700,
        height: 275,
    },
    background: {
        position: 'absolute',
        zIndex: 1,
        width: 700,
    },
    sun: {
        position: 'absolute',
        zIndex: 3,
        width: 99,
        top: -10,
        right: 75,
    },
    themeToggle: {
        position: 'absolute',
        zIndex: 4,
        bottom: 0,
        right: 0,
    },
    tree:{
        position: 'absolute',
        zIndex: 102,
        width: 48,
    },
    house1:{
        position: 'absolute',
        zIndex: 100,
        width: 74,
    },
    house2:{
        position: 'absolute',
        zIndex: 101,
        width: 106,
    },
    world: {
        position: 'absolute',
        zIndex: 10,
        width: 550,
    },
    front: {
        position: 'absolute',
        zIndex: 20,
        width: 700,
    },
    label: {
        position: 'absolute',
        zIndex: 50,
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
    title: {
        position: 'absolute',
        zIndex: 55,
        top: theme.spacing(2) + 36,
        left: theme.spacing(2),
    },
    aniType: {
        color: 'white',
    },
}))

export default function CannaTown() {
  
    const history = getHistory()
    const themeChoice = getThemeChoice()
    const classes = useStyles()
    const dispatch = useDispatch()
    const appStore = getStore()
    const animatedsvgSlice = useSelector(state => state.animatedsvg)
    const {
        initted,
        pathname,
    } = animatedsvgSlice
    let title = ``
    let label = ``
    const content = getContentByPath(history.location.pathname)
    if (content) {
        title = content.data.title
        label = content.data.label
    }
    useEffect(() => {
        if (pathname !== history.location.pathname){
            dispatch({type:`ANIMATEDSVG/PATHNAME`, pathname: history.location.pathname})
        }
        if (!initted){
            cannatown(`init`)
            dispatch({type:`ANIMATEDSVG/INIT`, initted: true})
        }
    })

    return  <React.Fragment>
                <div id={`stage`} className={classes.stage}>

                    <div id={`label`} className={classes.label}>
                        <Typography 
                            className={classes.aniType} 
                            variant={`h4`}>
                            {label}
                        </Typography>
                    </div>

                    <div id={`title`} className={classes.title}>
                        <Typography  
                            className={classes.aniType} 
                            variant={`h6`}>
                            {title}
                        </Typography>
                    </div>


                    { themeChoice === `light` ? <div id={`sun`} className={classes.sun}>
                        <Sun />
                    </div> : null }
                    

                    <div id={`theme`} className={classes.themeToggle}>
                        <IconButton
                            onClick = {(e) => {
                                e.preventDefault()
                                let newTheme = `light`
                                if (themeChoice === `light`){
                                    newTheme = `dark`
                                }
                                appStore.dispatch({type:`APP/THEME`, themeChoice: newTheme})
                            }}>
                            <Icon icon={themeChoice === `light` ? `dark` : `light`} 
                            color={`primary`}/>
                        </IconButton>
                    </div>

                    <div id={`tree-1`} className={classes.tree}>
                        <Tree />
                    </div>

                    <div id={`house-2`} className={classes.house2}>
                        <House2 />
                    </div>

                    <div id={`house-1`} className={classes.house1}>
                        <House1 />
                    </div>


                    <div id={`clouds-mid-left`} className={classes.world}>
                        <CloudsMidLayer />
                    </div>
                    <div id={`clouds-mid-right`} className={classes.world}>
                        <CloudsMidLayer />
                    </div>


                    <div id={`blue-sky`} className={classes.background}>
                        <BlueSky />
                    </div>
                    
                </div>
            </React.Fragment>
}

/*
<div id={`world1`} className={classes.world}>
                        <World themeChoice={themeChoice} />
                    </div>
                    <div id={`world2`} className={classes.world}>
                        <World themeChoice={themeChoice} />
                    </div>
*/