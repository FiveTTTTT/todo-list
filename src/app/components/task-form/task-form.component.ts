import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddTaskAction } from '../../store/actions/task.action';
import { TaskStatus } from '../../store/models/task.model';
import { Store } from '@ngrx/store';
import { State } from '../../store/models/state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  newId$: Observable<number> | undefined;
  constructor(private store: Store<State>) { }



  newTask = {
    id: 0,
    title: '',
    description: '',
    status: TaskStatus.NOT_STARTED
  };



  addTask(form: NgForm) {
    this.newId$ = this.store.select(state => state.tasks.length);
    this.newId$.subscribe(id => {
      this.newTask = {
        id: id + 1,
        title: form.value.title,
        description: form.value.description,
        status: form.value.status
      };

    });

    // console.log(form.value);
    // this.newTask = {
    //   id: this.newId + 1,
    //   title: form.value.title,
    //   description: form.value.description,
    //   status: form.value.status,
    //   color: ''
    // };

    this.store.dispatch(new AddTaskAction(this.newTask));
    form.reset();
    // this.newId = this.store.select(state => state.tasks.length);
    // this.newTask = {
    //   id: Math.floor(Math.random() * 1000) + 1,
    //   title: '',
    //   description: '',
    //   status: TaskStatus.NOT_STARTED,
    //   color: ''
    // };
  }
}
