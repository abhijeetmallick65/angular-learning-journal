import { Injectable } from '@angular/core';
import { Task, NewTaskData } from './task/task.modal';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks: Task[] = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2026-12-31',
            status: 'active',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
            status: 'active',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary: 'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
            status: 'active',
        },
        {
            id: 't4',
            userId: 'u2',
            title: 'Design onboarding flow',
            summary: 'Create wireframes and final designs for the new user onboarding experience.',
            dueDate: '2026-07-10',
            status: 'active',
        },
        {
            id: 't5',
            userId: 'u2',
            title: 'Write API documentation',
            summary: 'Document all REST endpoints including auth, resources, and error codes.',
            dueDate: '2025-03-01',
            status: 'done',
        },
        {
            id: 't6',
            userId: 'u4',
            title: 'Set up CI/CD pipeline',
            summary: 'Configure GitHub Actions for automated testing and deployment to staging.',
            dueDate: '2026-06-01',
            status: 'active',
        },
        {
            id: 't7',
            userId: 'u5',
            title: 'Audit accessibility',
            summary: 'Run WCAG 2.1 audit across all public-facing pages and fix critical issues.',
            dueDate: '2026-08-15',
            status: 'active',
        },
        {
            id: 't8',
            userId: 'u6',
            title: 'Migrate database schema',
            summary: 'Run migration scripts and validate data integrity post-migration.',
            dueDate: '2024-11-30',
            status: 'done',
        },
    ];

    constructor() {
        const saved = localStorage.getItem('tasks');
        if (saved) {
            this.tasks = JSON.parse(saved);
        }
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getUserTask(userId: string): Task[] {
        return this.tasks.filter(t => t.userId === userId && t.status === 'active');
    }

    getUserDoneCount(userId: string): number {
        return this.tasks.filter(t => t.userId === userId && t.status === 'done').length;
    }

    getUserOverdueCount(userId: string): number {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return this.tasks.filter(t =>
            t.userId === userId &&
            t.status === 'active' &&
            new Date(t.dueDate) < today
        ).length;
    }

    getTotalActiveCount(): number {
        return this.tasks.filter(t => t.status === 'active').length;
    }

    getTotalDoneCount(): number {
        return this.tasks.filter(t => t.status === 'done').length;
    }

    getTotalOverdueCount(): number {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return this.tasks.filter(t =>
            t.status === 'active' &&
            new Date(t.dueDate) < today
        ).length;
    }

    addTask(taskData: NewTaskData, userId: string): void {
        this.tasks.unshift({
            id: `t${Date.now()}`,
            userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
            status: 'active',
        });
        this.saveTasks();
    }

    removeTask(id: string): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.status = 'done';
            this.saveTasks();
        }
    }

    private saveTasks(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
