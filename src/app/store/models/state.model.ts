import { Task } from "../task/task.model";

export interface State {
    readonly tasks: Array<Task>;
    readonly numberOfTasks: number;
}