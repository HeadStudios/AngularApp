import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyEventsThirdPage } from './empty-events-third.page';

describe('EmptyEventsThirdPage', () => {
  let component: EmptyEventsThirdPage;
  let fixture: ComponentFixture<EmptyEventsThirdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyEventsThirdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyEventsThirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
