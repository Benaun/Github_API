import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRepo, IReposList } from "../interfaces/intefaces";
import axios from "axios";

export const fetchRepos = createAsyncThunk<IRepo[], string, { rejectValue: string }>(
    'repos/fetchRepos',
    async (searchParams, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://api.github.com/search/repositories', {
                params: {
                    q: searchParams
                }
            })

            if (response.status !== 200) {
                return rejectWithValue("Repositories not founded")
            }

            const data: IRepo[] = response.data.items.map((item: IRepo) => {
                return {
                    id: item.id,
                    name: item.name,
                    stargazers_count: item.stargazers_count,
                    language: item.language,
                    forks_count: item.forks_count,
                    updated_at: item.updated_at,
                    license: item.license,
                }
            })
            return data
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            return rejectWithValue("Ничего не найдено")
        }
    }
)

const initialState: IReposList = {
    items: [],
    loading: false,
    error: null,
    totalRepos: 0,
    selectedRepos: -1
}

const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {
        clearAll(state): void {
            state.items = [];
            state.error = null;
            state.selectedRepos = -1
        },
        selectItem(state, action): void {
            state.selectedRepos = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepos.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.selectedRepos = -1
            })
            .addCase(fetchRepos.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false
            })
    }
})

export const { clearAll, selectItem } = repoSlice.actions;
export default repoSlice.reducer