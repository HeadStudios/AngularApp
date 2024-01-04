import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyEventsSecondPage } from './empty-events-second.page';

describe('EmptyEventsSecondPage', () => {
  let component: EmptyEventsSecondPage;
  let fixture: ComponentFixture<EmptyEventsSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyEventsSecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyEventsSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
