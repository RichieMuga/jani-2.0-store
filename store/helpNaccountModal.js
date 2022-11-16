import { createSlice } from '@reduxjs/toolkit'
// create a slice
export const modalSlice = createSlice({
    name: "modal",

    initialState: { isModalOpen: true },

    reducers: {
        changeHelpNAccountModal: state => { state.isModalOpen = !state.isModalOpen },



    }
})

export const { changeHelpNAccountModal } = modalSlice.actions

export default modalSlice.reducer