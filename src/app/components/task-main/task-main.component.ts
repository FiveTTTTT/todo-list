import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../../store/task/task.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store/models/state.model';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { UpdateTaskAction } from '../../store/task/task.action';

@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrl: './task-main.component.css',
})
export class TaskMainComponent {
  onDrop(event: { task: Task; previousIndex: number; currentIndex: number }) {   
    this.store.dispatch(new UpdateTaskAction(event.task));
  }

  columnToShow = TaskStatus.NOT_STARTED;

  allTasks$: Observable<Array<Task>> | undefined;
  TaskStatus = TaskStatus;
  tasksNOTSTARTED$: Observable<Array<Task>> | undefined;
  tasksINPROGRESS$: Observable<Array<Task>> | undefined;
  tasksFINISHED$: Observable<Array<Task>> | undefined;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.allTasks$ = this.store.select((store) => store.tasks);
    this.tasksNOTSTARTED$ = this.store.select((store) =>
      store.tasks.filter((task) => task.status === TaskStatus.NOT_STARTED)
    );
    this.tasksINPROGRESS$ = this.store.select((store) =>
      store.tasks.filter((task) => task.status === TaskStatus.IN_PROGRESS)
    );
    this.tasksFINISHED$ = this.store.select((store) =>
      store.tasks.filter((task) => task.status === TaskStatus.FINISHED)
    );
  }

  switchColumn(column: TaskStatus) {
    this.columnToShow = column;
  }

}

