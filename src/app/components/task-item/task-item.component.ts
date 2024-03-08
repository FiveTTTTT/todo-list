import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from '../../store/task/task.model';
import { Store } from '@ngrx/store';
import { State } from '../../store/models/state.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() taskId: Number | undefined;
  @Output() editTaskStatus = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();

  truncateTitle: boolean = false;
  truncateDescription: boolean = false;
  task: Task | undefined;
  showInfosModal: Boolean = false;
  constructor(private store: Store<State>) { }
  ngOnInit() {

    this.truncateTitle = false;
    this.truncateDescription = false;
    this.store.select('tasks').subscribe((tasks) => {
      this.task = tasks.find((task) => {
        this.checkTextLength(task.title, "title");
        this.checkTextLength(task.description, "description");
        return task.id === this.taskId
      });
    });
  }

  checkTextLength(text: string, type: string) {
    if (text.length > 20 && type === "title") {
      this.truncateTitle = true;
    } else {
      if (text.length > 20 && type === "description") {
        this.truncateDescription = true;
      }
      else {
        this.truncateTitle = false;
        this.truncateDescription = false;
      }
    }
  }

  statusChange(newStatus: TaskStatus) {
    if (this.task) {
      const updatedTask: Task = { ...this.task, status: newStatus };
      this.editTaskStatus.emit(updatedTask);
    }
  }
  removeTask() {
    if (this.task) {
      this.deleteTask.emit(this.task);
    }
  }
}
