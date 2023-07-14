import { createSlice } from '@reduxjs/toolkit'

export const foodSlice = createSlice({

    name: 'animalfood',
    initialState: {
        seclectedCategory: 'Dry Cat Food'
    },

    reducers: {
        filterCategory: (state,action) => {
            state.seclectedCategory = action.payload
        }

    }
})

export const getSelectedCategory = state => state.animalfood.seclectedCategory;
export const { filterCategory } = foodSlice.actions;
export default foodSlice.reducer;