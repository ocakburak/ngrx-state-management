import { createReducer, on } from "@ngrx/store";
import { BasketModel } from "src/app/models/basket.model";
import * as BasketsActions from "./baskets.actions";

export const initialState: BasketModel[] = [];

export const BasketsReducer = createReducer(
    initialState,
    on(BasketsActions.addBasket, (state, { basket }) => {
        return [...state, basket];
    })
);