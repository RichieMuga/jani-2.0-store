// store configaration
import { configureStore } from '@reduxjs/toolkit'
import iconSlice from './icon-slice'
export const store = configureStore({
    reducer: {
        icon: iconSlice,
    }
})