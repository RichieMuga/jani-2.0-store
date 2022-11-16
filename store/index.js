// store configaration
import { configureStore } from '@reduxjs/toolkit'
import iconSlice from './icon-slice'
import modalSlice from './helpNaccountModal'
export const store = configureStore({
    reducer: {
        icon: iconSlice,
        modal: modalSlice,
    }
})