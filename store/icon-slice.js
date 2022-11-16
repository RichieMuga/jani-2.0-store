import { createSlice } from '@reduxjs/toolkit'
// create a slice
export const iconSlice = createSlice({
    name: "icon",

    initialState: { icon: 'moon' },

    reducers: {
        iconMoon: state => { state.icon = 'moon' },

        iconSun: state => { state.icon = 'sun' },

    }
})

export const { iconMoon, iconSun } = iconSlice.actions

export default iconSlice.reducer
