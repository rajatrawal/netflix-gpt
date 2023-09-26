import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            trailer: null,
            moviesList: []
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
            },
            addTrailer: (state, action) => {
                state.trailer = action.payload;
            },
            addMoviesList: (state, action) => {
                state.moviesList.push(action.payload)
            }
        }
    }
)

export const { addNowPlayingMovies, addTrailer, addMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;