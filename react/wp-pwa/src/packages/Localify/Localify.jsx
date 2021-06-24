import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
} from '@material-ui/core/'

import SimpleList from './SimpleList'

const useStyles = makeStyles( theme => ({
    title:{
    },
}))

export default function Localify() {

    const classes = useStyles() 
    // const localifySlice = useSelector(state => state.localify)
    // const {
    //     open,
    // } = localifySlice
    // console.log ( 'localifySlice', localifySlice, open )
    return <div className={ clsx( classes.skipIntro ) }>
            <SimpleList />
           </div>
}
