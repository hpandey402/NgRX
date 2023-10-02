import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModal } from "./app.modal";

const getAppState = createFeatureSelector<AppStateModal>('app');

export const getSpinnerState = createSelector(getAppState,(state)=>{
    return state.isLoaded;
})