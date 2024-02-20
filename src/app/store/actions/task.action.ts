import { Action } from "@ngrx/store";
import { Task } from "../models/task.model";

export enum TaskActionTypes {
    ADD_TASK = '[TASK] Add Task',
    // REMOVE_TASK = '[TASK] Remove Task',
    // UPDATE_TASK = '[TASK] Update Task',
    // LOAD_TASKS = '[TASK] Load Tasks',
    // LOAD_TASKS_SUCCESS = '[TASK] Load Tasks Success',
    // LOAD_TASKS_FAILURE = '[TASK] Load Tasks Failure',
}

export class AddTaskAction implements Action {
    readonly type = TaskActionTypes.ADD_TASK;
    //add an optional payload
    constructor(public payload: Task) { }
}

export type TaskAction = AddTaskAction;