import { createReducer, on } from "@ngrx/store";
import { PokeDetail } from "../interfaces/pkmBase.interface";
import { addFavorite, resetFavorite } from "./detail.actions";

const initialState: PokeDetail = {
    id: 0,
    types: [
        {
            slot: 0,
            type: {
                name: '',
                url: ''
            }
        }
    ],
    sprites: {
        front_default: undefined,
        other: {
            dream_world: {
                front_default: ""
            }
        }
    },
    checked: false
};

export const detailReducer = createReducer(
    initialState,
    on(addFavorite, (state, {pokemon}) => ({
        id: pokemon.id,
        types: pokemon.types,
        sprites: pokemon.sprites,
        height: pokemon.height,
        name: pokemon.name,
        weight: pokemon.weight,
        checked: pokemon.checked
    })),
    on(resetFavorite, (state) => initialState)
)