import React from 'react'
import { useSelector } from 'react-redux' 
import {
  firstRunAPI,
} from './redux/api/actions'
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
  Host,
} from './components'

export default function App() { 

	const apiSlice = useSelector( state => state.api )
  React.useEffect(() => {
    const {
      fetching,
      fetched,
    } = apiSlice
    if (!fetching && !fetched) firstRunAPI()
  }, [apiSlice])

  return <MuiThemeProvider theme={createMuiTheme(theme)}>
            <Grid container>
              
              <Grid item xs={ 12 } >
                <Host />
              </Grid>

              <Grid item xs={ 12 } sm={ 6 } >
                <Individuals />
              </Grid>

              

           </Grid>
         </MuiThemeProvider> 
}
