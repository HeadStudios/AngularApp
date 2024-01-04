import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTasksFourthPage } from './empty-tasks-fourth.page';

describe('EmptyTasksFourthPage', () => {
  let component: EmptyTasksFourthPage;
  let fixture: ComponentFixture<EmptyTasksFourthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyTasksFourthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyTasksFourthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
