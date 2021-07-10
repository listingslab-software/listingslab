import React from 'react'
import { useSelector } from 'react-redux' 
// import {
//   firstRunAPI,
// } from './redux/api/actions'
import {
  theme, 
} from './theme'
import {
  MuiThemeProvider, 
  createMuiTheme,
  Grid,
} from '@material-ui/core/'
import { 
  // Debugger,
  Individuals,
  IndividualSelected,
  Host,
} from './components'

export default function App() { 

  // const apiSlice = useSelector( state => state.api )
 //  React.useEffect(() => {
 //    const {
 //      fetching,
 //      fetched,
 //    } = apiSlice
 //    if (!fetching && !fetched) firstRunAPI()
 //  }, [apiSlice])

  const individualsSlice = useSelector(state => state.individuals)
  const { selected } = individualsSlice
  // React.useEffect(() => {
  //   const { selected } = individualsSlice
  //   // console.log ( 'selected', selected )
  // }, [ individualsSlice ])

  const showHost = false

  return <MuiThemeProvider theme={createMuiTheme(theme)}>
            <Grid container>
              { showHost ? <Grid item xs={ 12 } >
                <Host />
              </Grid> : null }    
              <Grid item xs={ 12 } sm={ 5 } >
              <Host />
                <Individuals />
              </Grid>

              { !selected ? null : <Grid item xs={ 12 } sm={ 7 } >
                <IndividualSelected />
              </Grid>}

           </Grid>
         </MuiThemeProvider> 
}
