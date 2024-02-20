import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskReducer } from './store/reducers/task.reducer';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TasksColumnComponent } from './components/tasks-column/tasks-column.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksColumnComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    StoreModule.forRoot({
      tasks: TaskReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
