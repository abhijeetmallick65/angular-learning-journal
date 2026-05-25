import { Component, inject } from '@angular/core';
import { DUMMY_USERS } from './dummy.users';
import { TaskService } from './app-tasks/task.service';

type NavView = 'dashboard' | 'analytics' | 'settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = '';
  activeView: NavView = 'dashboard';

  private taskService = inject(TaskService);

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId) ?? null;
  }

  get totalOverdue() {
    return this.taskService.getTotalOverdueCount();
  }

  get displayName(): string {
    const raw = localStorage.getItem('app_settings');
    if (raw) return JSON.parse(raw).displayName ?? 'Team Admin';
    return 'Team Admin';
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.activeView = 'dashboard';
  }

  setView(view: NavView) {
    this.activeView = view;
  }
}
