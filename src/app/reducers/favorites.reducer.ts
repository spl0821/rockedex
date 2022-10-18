import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./favorites.actions";


export const initialState = 0;

export const favoritesReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state -1)
)