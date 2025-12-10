import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./redux/CounterSlice";
import ApiData from "./redux/ApiData";

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        apiData: ApiData,
    }
})