import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyNotificationFirstPage } from './empty-notification-first.page';

describe('EmptyNotificationFirstPage', () => {
  let component: EmptyNotificationFirstPage;
  let fixture: ComponentFixture<EmptyNotificationFirstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyNotificationFirstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyNotificationFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
