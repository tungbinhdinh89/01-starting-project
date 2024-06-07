import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskService } from '../task/task.services';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private _taskSerivce = inject(TaskService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDay = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this._taskSerivce.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDay,
      },
      this.userId
    );
    this.close.emit();
  }
}
