import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy.users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent {
  @Input() activeView: 'dashboard' | 'analytics' | 'settings' = 'dashboard';
  @Input() displayName = 'Team Admin';
  @Input() overdueCount = 0;
  @Output() viewChange = new EventEmitter<'dashboard' | 'analytics' | 'settings'>();

  users = DUMMY_USERS.slice(0, 3);

  setView(view: 'dashboard' | 'analytics' | 'settings') {
    this.viewChange.emit(view);
  }
}
