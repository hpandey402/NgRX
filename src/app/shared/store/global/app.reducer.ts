import { createReducer, on } from "@ngrx/store"
import { appState } from "./app.state"
import { loadSpinner } from "./app.actions"


export const appReducer = createReducer(appState,
    on(loadSpinner, (state, action)=>{
        return {
            ...state,
            isLoaded:action.isLoaded
        }
    }))