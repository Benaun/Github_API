import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "./repoSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        repos: reposReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()