import { Component, Input } from '@angular/core';
import { Task } from '../../store/models/task.model';

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrl: './tasks-column.component.css'
})
export class TasksColumnComponent {
  @Input() tasks: Readonly<Array<Task>> = [];
}
