import { createAction, props } from "@ngrx/store";

const increment = createAction('increment');
const decrement = createAction('decrement');
const reset = createAction('reset');
const customIncrement = createAction('customIncrement', props<{value:number, counterType:string}>());
const changeChannel = createAction('changeChannel',props<{name:string}>())

export {
    increment,
    decrement,
    reset,
    customIncrement,
    changeChannel
}