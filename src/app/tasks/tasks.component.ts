import { Component, Input, inject } from '@angular/core';
import { TaskService } from './task/task.services';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name: string | undefined;
  @Input({ required: true }) userId!: string;
  // constructor(private _taskService: TaskService) {}
  isAddingTask = false;
  private _taskService = inject(TaskService);
  get selectedUserTasks() {
    return this._taskService.getUserTasks(this.userId);
  }
  // onComplete(id: string) {
  //   this._taskService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
  // onAddTask(taskData: NewTaskData) {
  //   this._taskService.addTask(taskData, this.userId);
  //   this.isAddingTask = false;
  // }
}
