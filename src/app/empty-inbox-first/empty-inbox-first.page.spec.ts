import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyInboxFirstPage } from './empty-inbox-first.page';

describe('EmptyInboxFirstPage', () => {
  let component: EmptyInboxFirstPage;
  let fixture: ComponentFixture<EmptyInboxFirstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyInboxFirstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyInboxFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
