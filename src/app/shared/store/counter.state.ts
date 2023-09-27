export interface CounterModel{
    counter:number,
    type:string,
    channelName:string
}

export const initialState:CounterModel = {
    counter:0,
    type:'remove',
    channelName:'Ngrx Practice'
}