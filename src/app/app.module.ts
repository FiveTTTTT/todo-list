import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskReducer } from './store/reducers/task.reducer';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TasksColumnComponent } from './components/tasks-column/tasks-column.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskMainComponent } from './components/task-main/task-main.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksColumnComponent,
    TaskItemComponent,
    TaskMainComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      tasks: TaskReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // restreint l'accès au DevTools en mode production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
