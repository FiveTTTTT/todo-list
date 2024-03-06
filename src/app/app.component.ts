import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task, TaskStatus } from './store/task/task.model';
import { State } from './store/models/state.model';
import { NgForm } from '@angular/forms';
import { AddTaskAction } from './store/task/task.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  allTasks$: Observable<Array<Task>> | undefined;
  TaskStatus = TaskStatus;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.allTasks$ = this.store.select((store) => store.tasks);
  }
}
