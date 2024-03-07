export interface Task {
    id: number;
    title: string;
    description: string;
    created: Date;
    status: TaskStatus;
}

export enum TaskStatus {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    FINISHED = 'FINISHED',
}