import { createSlice } from '@reduxjs/toolkit'
// create a slice
export const modalSlice = createSlice({
    name: "modal",

    initialState: {
        isHelpDropdownOpen: false,
        isAccountDropdownOpen: false

    },

    reducers: {
        toggleHelp: state => { state.isHelpDropdownOpen = !state.isHelpDropdownOpen },
        toggleAccount: state => { state.isAccountDropdownOpen = !state.isAccountDropdownOpen },

    }
})

export const { toggleAccount, toggleHelp } = modalSlice.actions

export default modalSlice.reducer