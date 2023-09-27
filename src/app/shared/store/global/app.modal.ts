import { BlogList } from "../blog/blog.model";
import { CounterModel } from "../counter.state";

export interface AppStateModal{
    counterState: CounterModel,
    blogState:BlogList
}