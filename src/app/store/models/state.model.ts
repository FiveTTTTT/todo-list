import { Task } from "./task.model";

export interface State {
    readonly tasks: Array<Task>;
}