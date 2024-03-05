import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from '../../store/models/task.model';
import { Store } from '@ngrx/store';
import { UpdateTaskAction } from '../../store/actions/task.action';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrl: './tasks-column.component.css',
})
export class TasksColumnComponent {
  // onDrop($event: CdkDragDrop<readonly Task[], any, any>) {
  //   console.log($event);

  //   throw new Error('Method not implemented.');
  // }
  @Input() tasks: Readonly<Array<Task>> = [];
  @Input() status: String | undefined;
  @Output() drop = new EventEmitter<{ task: Task; previousIndex: number; currentIndex: number }>();

  TaskStatus = TaskStatus;

  connectedTo = [TaskStatus.NOT_STARTED, TaskStatus.IN_PROGRESS, TaskStatus.FINISHED];


  constructor(private store: Store) { }

  ngOnInit() {
    this.connectedTo = [TaskStatus.NOT_STARTED, TaskStatus.IN_PROGRESS, TaskStatus.FINISHED];
    this.connectedTo = this.connectedTo.filter(status => status !== this.status);
  }

  onEditTaskStatus(task: Task) {
    console.log(task);
    // this.store.dispatch(
    //   new UpdateTaskStatusAction({ taskId: updatedTask.id, newStatus })
    // );
    this.store.dispatch(new UpdateTaskAction(task));
  }

  currentColumn: string | undefined;

  showColumn(column: string) {
    this.currentColumn = column;
  }

  onDropListDropped(event: CdkDragDrop<readonly Task[]>) {
    if (event.previousContainer === event.container) {
      console.log("same container");
      
      console.log(event.container)
      const mutableData = [...event.container.data];
      moveItemInArray(mutableData, event.previousIndex, event.currentIndex);
      event.container.data = mutableData;
    } else {
      console.log("different container");
      console.log(event.container);

      // Déplacer l'élément d'une liste à l'autre
      const task = event.previousContainer.data[event.previousIndex];
      this.drop.emit({ task, previousIndex: event.previousIndex, currentIndex: event.currentIndex });
    }
  }

  theStatus() {
    console.log(this.connectedTo);

  }
}
