import { Component, Input } from '@angular/core';
import { Task } from '../../store/models/task.model';

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
  // @Output() editTask = new EventEmitter<Task>();
  // @Output() viewTask = new EventEmitter<Task>();
}
