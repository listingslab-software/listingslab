import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
  theme,
} from './theme'
import {
  MuiThemeProvider, 
  createMuiTheme,
  makeStyles,
  Grid,
} from '@material-ui/core/'
import { 
  Individuals,
  IndividualSelected,
  Host,
} from './components'

const useStyles = makeStyles(theme => ({
  app:{
    background: theme.palette.background.default,
  },
}))

export default function App() { 

  const classes = useStyles() 
  const individualsSlice = useSelector(state => state.individuals)
  const { selected } = individualsSlice
  const hostSlice = useSelector(state => state.host)
  const {
      wpData,
  } = hostSlice
  
  return <MuiThemeProvider theme={createMuiTheme(theme)}>
          <div className={ clsx( classes.app ) } >
            <Grid container> 
             
              { !selected ? null : <Grid item xs={ 12 } sm={ 6 } >
                <IndividualSelected />
              </Grid> }

              <Grid item xs={ 12 } sm={ 6 } >
                { wpData.assetsDir !== `` ? <Host /> : null }
                <Individuals />
              </Grid>
              
           </Grid>
           </div>
         </MuiThemeProvider> 
}
