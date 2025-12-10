import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    hasError: false,
    isLoading: false,
    data: [],
}

export const ApiDta = createSlice({
    name: "api",
    initialState,
    reducers: {
        stateLoading: (state) => {
            state.isLoading = true
        },
        dataIsSuccess: (state, { payload }) => {
            state.data = payload
            state.isLoading = false
            state.hasError = false
        },
        dataIsFailed: (state) => {
            state.isLoading = false
            state.hasError = true
        }
    }
})

export default ApiDta.reducer;

export const { stateLoading, dataIsSuccess, dataIsFailed } = ApiDta.actions;

export const dataSelector = state => state.data;

export function fetchData() {
    return async dispatch => {
        dispatch(stateLoading())
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const res = await response.json();
            dispatch(dataIsSuccess(res.mealss));
        }
        catch (error) {
            // eslint-disable-next-line no-unused-expressions
          dispatch(dataIsFailed());
        }

    }
}