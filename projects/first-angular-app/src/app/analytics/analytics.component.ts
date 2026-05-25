import { Component, inject } from '@angular/core';
import { DUMMY_USERS } from '../dummy.users';
import { TaskService } from '../app-tasks/task.service';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent {
  private taskService = inject(TaskService);

  users = DUMMY_USERS;

  get totalActive()  { return this.taskService.getTotalActiveCount(); }
  get totalDone()    { return this.taskService.getTotalDoneCount(); }
  get totalOverdue() { return this.taskService.getTotalOverdueCount(); }
  get totalAll()     { return this.totalActive + this.totalDone; }

  get completionRate(): number {
    if (this.totalAll === 0) return 0;
    return Math.round((this.totalDone / this.totalAll) * 100);
  }

  getUserStats(userId: string) {
    const active  = this.taskService.getUserTask(userId).length;
    const done    = this.taskService.getUserDoneCount(userId);
    const overdue = this.taskService.getUserOverdueCount(userId);
    const total   = active + done;
    const rate    = total === 0 ? 0 : Math.round((done / total) * 100);
    return { active, done, overdue, total, rate };
  }
}
