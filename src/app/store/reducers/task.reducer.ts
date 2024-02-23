import { Task, TaskStatus } from "../models/task.model";
import { AddTaskAction, TaskActionTypes, UpdateTaskAction, UpdateTaskStatusAction } from "../actions/task.action";
import { Action } from "@ngrx/store";

const initialState: Array<Task> = [
    {
        id: 1,
        title: 'First Task',
        description: 'This is the first task',
        status: TaskStatus.NOT_STARTED,
        color: 'red'
    },
    {
        id: 2,
        title: 'Second Task',
        description: 'This is the second task',
        status: TaskStatus.IN_PROGRESS,
        color: 'green'
    },
    {
        id: 3,
        title: 'Third Task',
        description: 'This is the third task',
        status: TaskStatus.FINISHED,
        color: 'blue'
    },
    {
        id: 4,
        title: 'Fourth Task',
        description: 'This is the fourth task',
        status: TaskStatus.NOT_STARTED,
        color: 'yellow'
    },
    {
        id: 5,
        title: 'Fifth Task',
        description: 'This is the fifth task',
        status: TaskStatus.IN_PROGRESS,
        color: 'purple'
    },
    {
        id: 6,
        title: 'Sixth Task',
        description: 'This is the sixth task',
        status: TaskStatus.FINISHED,
        color: 'orange'
    },
    {
        id: 7,
        title: 'Seventh Task',
        description: 'This is the seventh task',
        status: TaskStatus.NOT_STARTED,
        color: 'red'
    },
    {
        id: 8,
        title: 'Eighth Task',
        description: 'This is the eighth task',
        status: TaskStatus.IN_PROGRESS,
        color: 'green'
    },
    {
        id: 9,
        title: 'Ninth Task',
        description: 'This is the ninth task',
        status: TaskStatus.FINISHED,
        color: 'blue'
    },
    {
        id: 10,
        title: 'Tenth Task',
        description: 'This is the tenth task',
        status: TaskStatus.NOT_STARTED,
        color: 'yellow'
    },
    {
        id: 11,
        title: 'Eleventh Task',
        description: 'This is the eleventh task',
        status: TaskStatus.IN_PROGRESS,
        color: 'purple'
    },
    {
        id: 12,
        title: 'Twelfth Task',
        description: 'This is the twelfth task',
        status: TaskStatus.FINISHED,
        color: 'orange'
    },
    {
        id: 13,
        title: 'Thirteenth Task',
        description: 'This is the thirteenth task',
        status: TaskStatus.NOT_STARTED,
        color: 'red'
    },
    {
        id: 14,
        title: 'Fourteenth Task',
        description: 'This is the fourteenth task',
        status: TaskStatus.IN_PROGRESS,
        color: 'green'
    },
    {
        id: 15,
        title: 'Fifteenth Task',
        description: 'This is the fifteenth task',
        status: TaskStatus.FINISHED,
        color: 'blue'
    }
];

export type TaskActions = AddTaskAction | Action;
export type TaskState = Array<Task>;

export function TaskReducer(
    state: Array<Task> = initialState,
    action: TaskActions
) {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            return [...state, (action as AddTaskAction).payload];
        case TaskActionTypes.UPDATE_TASK:
            const updatedTask = (action as UpdateTaskAction).payload;
            return state.map(task => (task.id === updatedTask.id) ? updatedTask : task);
        case TaskActionTypes.UPDATE_TASK_STATUS:
            const { taskId, newStatus } = (action as UpdateTaskStatusAction).payload;
            return state.map(task => (task.id === taskId) ? { ...task, status: newStatus } : task);

        default:
            return state;
    }
}

