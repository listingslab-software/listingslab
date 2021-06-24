import SkipIntro from './SkipIntro/SkipIntro'
import Localify from './Localify/Localify'
import { 
	localifyReducer,
	localifySlice,
} from './Localify/reducer'

import { 
	skipIntroSlice,
	skipIntroReducer,
} from './SkipIntro/redux/reducer'
import {
	toggleSkipIntroOpen,
} from './SkipIntro/redux/actions'

import slugify from './lib/slugify'
import ordinalSuffix from './lib/ordinalSuffix'
import scrollToTop from './lib/scrollToTop'

export {

	Localify,
	localifyReducer,
	localifySlice,

	SkipIntro,
	skipIntroSlice,
	skipIntroReducer,
	toggleSkipIntroOpen,

	slugify,
	ordinalSuffix,
	scrollToTop,

}
