import { createAction, props } from "@ngrx/store";
import { BasketModel } from "src/app/models/basket.model";

export const addBasket = createAction(
    '[Baskets] Add Count',
    props<{ "basket": BasketModel }>(),
);