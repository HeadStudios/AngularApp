import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersPage } from './subscribers.page';

describe('SubscribersPage', () => {
  let component: SubscribersPage;
  let fixture: ComponentFixture<SubscribersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
