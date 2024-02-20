import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task, TaskStatus } from './store/models/task.model';
import { State } from "./store/models/state.model";
import { NgForm } from '@angular/forms';
import { AddTaskAction } from './store/actions/task.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  allTasks$: Observable<Array<Task>> | undefined;
  tasksNOTSTARTED$: Observable<Array<Task>> | undefined;
  tasksINPROGRESS$: Observable<Array<Task>> | undefined;
  tasksDONE$: Observable<Array<Task>> | undefined;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {    
    this.allTasks$ = this.store.select((store) => store.tasks);
    this.tasksNOTSTARTED$ = this.store.select((store) => store.tasks.filter((task) => task.status === TaskStatus.NOT_STARTED));
    this.tasksINPROGRESS$ = this.store.select((store) => store.tasks.filter((task) => task.status === TaskStatus.IN_PROGRESS));
    this.tasksDONE$ = this.store.select((store) => store.tasks.filter((task) => task.status === TaskStatus.FINISHED));    
  }
  addTask(form: NgForm) {
    this.store.dispatch(new AddTaskAction(form.value));
    form.reset();
}
}
