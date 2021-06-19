import SkipIntro from './SkipIntro/SkipIntro'
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

	SkipIntro,
	skipIntroSlice,
	skipIntroReducer,
	toggleSkipIntroOpen,

	slugify,
	ordinalSuffix,
	scrollToTop,

}
