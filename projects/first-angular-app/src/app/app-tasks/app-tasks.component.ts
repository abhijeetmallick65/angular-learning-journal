import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './app-tasks.component.html',
  styleUrls: ['./app-tasks.component.css'],
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
})
export class AppTasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;

  showAddTask = false;

  private taskService = inject(TaskService);

  get selectedUserTask() {
    return this.taskService.getUserTask(this.userId);
  }

  get doneCount() {
    return this.taskService.getUserDoneCount(this.userId);
  }

  get overdueCount() {
    return this.taskService.getUserOverdueCount(this.userId);
  }

  onStartAddTask() { this.showAddTask = true; }
  onCancelTask()   { this.showAddTask = false; }
}
