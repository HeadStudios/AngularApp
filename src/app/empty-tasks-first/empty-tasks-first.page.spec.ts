import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTasksFirstPage } from './empty-tasks-first.page';

describe('EmptyTasksFirstPage', () => {
  let component: EmptyTasksFirstPage;
  let fixture: ComponentFixture<EmptyTasksFirstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyTasksFirstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyTasksFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
