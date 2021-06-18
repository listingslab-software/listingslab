import React from 'react'
import { Provider } from 'react-redux'
import reduxStore from './redux'
import { CannaTown } from './CannaTown'
import { createBrowserHistory } from 'history'

const animatedSVGStore = reduxStore()
export const getAnimatedSVGStore = () => { return animatedSVGStore }

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

export default function AnimatedSVG() {

	return  <React.Fragment>
	        <Provider store={animatedSVGStore}>
	            <CannaTown />
	        </Provider>
	      </React.Fragment>
}
