import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: []
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: User
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }

}
