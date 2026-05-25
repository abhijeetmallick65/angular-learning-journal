import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

type NewTaskData = {
  title: string;
  summary: string;
  dueDate: string;
};


@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  standalone: true
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;
  enterTitle = '';
  enterSummary = '';
  enterDate = '';

  // both of the ways below are correct 
  // constructor(private taskService: TaskService){}
  private taskService = inject(TaskService);


  addNewTask() {
    this.taskService.addTask({
      title: this.enterTitle,
      summary: this.enterSummary,
      dueDate: this.enterDate
    }, this.userId)
  }

  cancelTask() {
    console.log()
    this.cancel.emit()
  }

}
