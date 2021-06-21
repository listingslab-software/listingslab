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
} from '@material-ui/core/'
import { 
  // Debugger,
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
            <Host />
         </MuiThemeProvider> 
}
