import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyNotificationFifthPage } from './empty-notification-fifth.page';

describe('EmptyNotificationFifthPage', () => {
  let component: EmptyNotificationFifthPage;
  let fixture: ComponentFixture<EmptyNotificationFifthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyNotificationFifthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyNotificationFifthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
