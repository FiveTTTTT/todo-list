import { Task, TaskStatus } from "./task.model";
import { AddTaskAction, TaskActionTypes, UpdateTaskAction, UpdateTaskStatusAction } from "./task.action";
import { Action } from "@ngrx/store";

const initialState: Array<Task> = [
    {
        id: 1,
        title: 'First Task',
        description: 'This is the first task',
        status: TaskStatus.NOT_STARTED
    },
    {
        id: 2,
        title: 'Second Task',
        description: 'This is the second task',
        status: TaskStatus.IN_PROGRESS
    },
    {
        id: 3,
        title: 'Third Task',
        description: 'This is the third task',
        status: TaskStatus.FINISHED
    },
    {
        id: 4,
        title: 'Fourth Task',
        description: 'This is the fourth task',
        status: TaskStatus.NOT_STARTED
    },
    {
        id: 5,
        title: 'Fifth Task',
        description: 'This is the fifth task',
        status: TaskStatus.IN_PROGRESS
    },
    {
        id: 6,
        title: 'Sixth Task',
        description: 'This is the sixth task',
        status: TaskStatus.FINISHED
    },
    {
        id: 7,
        title: 'Seventh Task',
        description: 'This is the seventh task',
        status: TaskStatus.NOT_STARTED
    },
    {
        id: 8,
        title: 'Eighth Task',
        description: 'This is the eighth task',
        status: TaskStatus.IN_PROGRESS
    },
    {
        id: 9,
        title: 'Ninth Task',
        description: 'This is the ninth task',
        status: TaskStatus.FINISHED
    },
    {
        id: 10,
        title: 'Tenth Task',
        description: 'This is the tenth task',
        status: TaskStatus.NOT_STARTED
    },
    {
        id: 11,
        title: 'Eleventh Task',
        description: 'This is the eleventh task',
        status: TaskStatus.IN_PROGRESS
    },
    {
        id: 12,
        title: 'Twelfth Task',
        description: 'This is the twelfth task',
        status: TaskStatus.FINISHED
    },
    {
        id: 13,
        title: 'Thirteenth Task',
        description: 'This is the thirteenth task This is the thirteenth task',
        status: TaskStatus.NOT_STARTED
    },
    {
        id: 14,
        title: 'Fourteenth Task Fourteenth Task',
        description: 'This is the fourteenth task',
        status: TaskStatus.IN_PROGRESS
    },
    {
        id: 15,
        title: 'Fifteenth Task',
        description: 'This is the fifteenth task',
        status: TaskStatus.FINISHED
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
        case TaskActionTypes.REMOVE_TASK:
            return state.filter(task => task.id !== (action as UpdateTaskAction).payload.id);

        default:
            return state;
    }
}

