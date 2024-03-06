import { Action } from "@ngrx/store";
import { Task, TaskStatus } from "../models/task.model";

export enum TaskActionTypes {
    ADD_TASK = '[TASK] Add Task',
    UPDATE_TASK = '[TASK] Update Task',

    REMOVE_TASK = '[TASK] Remove Task',
    UPDATE_TASK_STATUS = '[TASK] Update Task Status',
    // LOAD_TASKS = '[TASK] Load Tasks',
    // LOAD_TASKS_SUCCESS = '[TASK] Load Tasks Success',
    // LOAD_TASKS_FAILURE = '[TASK] Load Tasks Failure',
    ADD_NUM_TASKS = '[TASK] Add Num Tasks'
}

export class AddTaskAction implements Action {
    readonly type = TaskActionTypes.ADD_TASK;
    constructor(public payload: Task) { }
}

export class UpdateTaskAction implements Action {
    readonly type = TaskActionTypes.UPDATE_TASK;
    constructor(public payload: Task) { }
}

export class UpdateTaskStatusAction implements Action {
    readonly type = TaskActionTypes.UPDATE_TASK_STATUS;
    constructor(public payload: { taskId: number, newStatus: TaskStatus }) { }
}

export class RemoveTaskAction implements Action {
    readonly type = TaskActionTypes.REMOVE_TASK;
    constructor(public payload: Task) { }
}

export class addNumTasksAction implements Action {
    readonly type = TaskActionTypes.ADD_NUM_TASKS;
    constructor(public payload: number) { }
}

export type TaskAction = AddTaskAction | UpdateTaskAction | UpdateTaskStatusAction | RemoveTaskAction | Action;