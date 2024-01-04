import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTasksThirdPage } from './empty-tasks-third.page';

describe('EmptyTasksThirdPage', () => {
  let component: EmptyTasksThirdPage;
  let fixture: ComponentFixture<EmptyTasksThirdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyTasksThirdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyTasksThirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
