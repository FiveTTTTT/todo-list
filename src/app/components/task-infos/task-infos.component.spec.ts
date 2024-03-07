import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfosComponent } from './task-infos.component';

describe('TaskInfosComponent', () => {
  let component: TaskInfosComponent;
  let fixture: ComponentFixture<TaskInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
