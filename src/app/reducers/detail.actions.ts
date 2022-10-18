import { createAction, props } from "@ngrx/store";
import { PokeDetail } from "../interfaces/pkmBase.interface";

export const addFavorite = createAction('Add', props<{pokemon: PokeDetail}>());
export const resetFavorite = createAction('Reset');