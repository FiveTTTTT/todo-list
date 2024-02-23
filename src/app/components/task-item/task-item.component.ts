import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from '../../store/models/task.model';
import { Store } from '@ngrx/store';
import { State } from '../../store/models/state.model';
import { UpdateTaskStatusAction } from '../../store/actions/task.action';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  // @Output() deleteTask = new EventEmitter<number>();
  // @Output() updateTask = new EventEmitter<Task>();
  // @Output() moveTask = new EventEmitter<TaskStatus>();
  @Output() editTaskStatus = new EventEmitter<Task>();
  // @Output() viewTask = new EventEmitter<Task>();

  constructor(private store: Store<State>) { }

  // onTaskStatusChange() {
  //   // Émettez l'événement editTaskStatus avec la nouvelle valeur du statut
  //   this.editTaskStatus.emit(this.task);
  //   console.log('Task status changed');    
  // }
  onStatusChange(newStatus: TaskStatus) {
    if (this.task) {
      const updatedTask: Task = { ...this.task, status: newStatus };
      this.store.dispatch(new UpdateTaskStatusAction({ taskId: updatedTask.id, newStatus }));
      this.editTaskStatus.emit(updatedTask);
    }
  }
}
