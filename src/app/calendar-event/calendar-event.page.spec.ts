import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventPage } from './calendar-event.page';

describe('CalendarEventPage', () => {
  let component: CalendarEventPage;
  let fixture: ComponentFixture<CalendarEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
