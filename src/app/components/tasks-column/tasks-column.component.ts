import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from '../../store/models/task.model';
import { Store } from '@ngrx/store';
import { RemoveTaskAction, UpdateTaskAction } from '../../store/actions/task.action';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrl: './tasks-column.component.css',
})
export class TasksColumnComponent {
  @Input() tasks: Readonly<Array<Task>> = [];
  @Input() status: String | undefined;
  @Output() drop = new EventEmitter<{ task: Task; previousIndex: number; currentIndex: number }>();

  TaskStatus = TaskStatus;
  
  connectedTo: string[] = ['cdk-drop-list-0', 'cdk-drop-list-1', 'cdk-drop-list-2'];


  constructor(private store: Store) { }

  ngOnInit() {
    this.connectedTo = ['cdk-drop-list-0', 'cdk-drop-list-1', 'cdk-drop-list-2'];;
    this.connectedTo = this.connectedTo.filter(status => status !== this.status);
  }

  onEditTaskStatus(task: Task) {
    this.store.dispatch(new UpdateTaskAction(task));
  }
  onDeleteTask(task: Task) {
    console.log('delete task', task);
    
    this.store.dispatch(new RemoveTaskAction(task));
  }

  currentColumn: string | undefined;

  showColumn(column: string) {
    this.currentColumn = column;
  }

  onDropListDropped(event: CdkDragDrop<readonly Task[]>) {
    if (event.previousContainer === event.container) {
      const mutableData = [...event.container.data];
      moveItemInArray(mutableData, event.previousIndex, event.currentIndex);
      event.container.data = mutableData;

    } else {      
      const task = event.previousContainer.data[event.previousIndex];

      let updatedTask: Task;

      switch (event.container.id) {
        case 'cdk-drop-list-0':
          updatedTask = { ...task, status: TaskStatus.NOT_STARTED };
          break;
        case 'cdk-drop-list-1':
          updatedTask = { ...task, status: TaskStatus.IN_PROGRESS };
          break;
        case 'cdk-drop-list-2':
          updatedTask = { ...task, status: TaskStatus.FINISHED };
          break;
        default:
          updatedTask = task;
      }

      this.drop.emit({ task: updatedTask, previousIndex: event.previousIndex, currentIndex: event.currentIndex });
    }
  }
}
