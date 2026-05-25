import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AppSettings {
  displayName: string;
  notifyOverdue: boolean;
  notifyNewTask: boolean;
  compactView: boolean;
  defaultView: 'dashboard' | 'analytics';
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  saved = false;

  settings: AppSettings = this.loadSettings();

  private loadSettings(): AppSettings {
    const raw = localStorage.getItem('app_settings');
    if (raw) return JSON.parse(raw);
    return {
      displayName: 'Team Admin',
      notifyOverdue: true,
      notifyNewTask: false,
      compactView: false,
      defaultView: 'dashboard',
    };
  }

  saveSettings() {
    localStorage.setItem('app_settings', JSON.stringify(this.settings));
    this.saved = true;
    setTimeout(() => (this.saved = false), 2500);
  }

  clearAllData() {
    if (confirm('This will reset all tasks and settings to defaults. Continue?')) {
      localStorage.removeItem('tasks');
      localStorage.removeItem('app_settings');
      window.location.reload();
    }
  }
}
