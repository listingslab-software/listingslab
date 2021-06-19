import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
export const open = createAction(`SKIPINTRO/OPEN`) 
export const error = createAction(`SKIPINTRO/ERROR`) 


