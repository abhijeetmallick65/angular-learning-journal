import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.modal';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private taskService = inject(TaskService);

  get isOverdue(): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(this.task.dueDate) < today;
  }

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
