import slugify from './lib/slugify'
import ordinalSuffix from './lib/ordinalSuffix'
import scrollToTop from './lib/scrollToTop'
import { SkipIntro } from './SkipIntro/'
import { 
	skipIntroSlice,
	skipIntroReducer,
} from './SkipIntro/redux/reducer'
import {
	toggleSkipIntroOpen,
} from './SkipIntro/redux/actions'

export {

	toggleSkipIntroOpen,
	
	SkipIntro,
	skipIntroSlice,
	skipIntroReducer,

	slugify,
	ordinalSuffix,
	scrollToTop,

}
