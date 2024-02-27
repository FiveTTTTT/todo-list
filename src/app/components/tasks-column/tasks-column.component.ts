import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../../store/models/task.model';
import { Store } from '@ngrx/store';
import { UpdateTaskAction } from '../../store/actions/task.action';

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrl: './tasks-column.component.css',
})
export class TasksColumnComponent {
  @Input() tasks: Readonly<Array<Task>> = [];
  @Input() status: String | undefined;
  TaskStatus = TaskStatus;

  constructor(private store: Store) {}

  onEditTaskStatus(task: Task) {
    this.store.dispatch(new UpdateTaskAction(task));
  }
}
