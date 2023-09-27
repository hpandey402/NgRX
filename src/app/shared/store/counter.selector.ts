import { createFeatureSelector, createSelector} from "@ngrx/store";
import { CounterModel } from "./counter.state";

const getCounterState = createFeatureSelector<CounterModel>('counterState');

export const getCounter = ()=>createSelector(getCounterState,(state)=>{
    return state.counter;
});

export const getChannelName = ()=> createSelector(getCounterState,(state)=>{
    return state.channelName;
})