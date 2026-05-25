export interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
    status: 'active' | 'done';
}

export interface NewTaskData {
    title: string;
    summary: string;
    dueDate: string;
}
