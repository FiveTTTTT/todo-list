import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from '../../store/task/task.model';
import { Store } from '@ngrx/store';
import { State } from '../../store/models/state.model';
import { UpdateTaskStatusAction } from '../../store/task/task.action';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() taskId: Number | undefined;
  @Output() editTaskStatus = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();

  task: Task | undefined;
  constructor(private store: Store<State>) { }
  ngOnInit() {
    this.store.select('tasks').subscribe((tasks) => {
      this.task = tasks.find((task) => task.id === this.taskId);
    });
  }

  onStatusChange(newStatus: TaskStatus) {
    if (this.task) {
      const updatedTask: Task = { ...this.task, status: newStatus };
      
      this.editTaskStatus.emit(updatedTask);
    }
  }
  onDeleteTask() {
    console.log('delete task', this.task);
    
    if (this.task) {
      this.deleteTask.emit(this.task);
    }
  }
}
