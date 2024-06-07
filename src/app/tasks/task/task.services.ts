import { Injectable } from '@angular/core';
import { type NewTaskData } from '../new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private DUMMY_TASKS = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.DUMMY_TASKS = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.DUMMY_TASKS.filter((t) => t.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.DUMMY_TASKS.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.DUMMY_TASKS = this.DUMMY_TASKS.filter((t) => t.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.DUMMY_TASKS));
  }
}
